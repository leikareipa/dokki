/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 * 
 * Converts dokki's intermediate-format documents into their final HTML format. Work
 * in progress.
 * 
 * Command-line arguments:
 * 
 *   1: Path to the intermediate source HTML file.
 *   2: Path to the output HTML file.
 * 
 *   Example: "node build-intermediate.js ./data/intermediate.html ./dist/output.html"
 * 
 */

const fs = require("fs");
const assert = require("node:assert");
const sharp = require('sharp');
const htmlParser = require("node-html-parser");
const markdownIt = require("markdown-it")({html: true});

// The dokki elements that can receive a caption.
const captionableDokkiTags = [
    "dokki-image",
    "dokki-code",
    "dokki-iframe",
    "dokki-directory",
    "dokki-spoiler",
    "dokki-output",
    "dokki-table",
    "dokki-video",
    "dokki-tag-cloud",
];

// Run.
(async function() {
    const srcHtmlFilename = process.argv[2];
    const dstHtmlFilename = process.argv[3];
    assert(srcHtmlFilename, "No source HTML file specified.");
    assert(dstHtmlFilename, "No destination HTML file specified.");

    const srcDOM = htmlParser.parse(fs.readFileSync(srcHtmlFilename, "utf-8"));
    const htmlEl = srcDOM.querySelector("html");
    const dokkiEl = htmlEl.querySelector("template[dokki-document]");
    const contentEl = dokkiEl.querySelector("section[content]");
    const titleEl = dokkiEl.querySelector("section[title]");
    const widgetsEl = dokkiEl.querySelector("section[widgets]");
    assert(htmlEl, "The source HTML is missing a <html> block.");
    assert(dokkiEl, "The source HTML is missing a <dokki> block.");
    assert(contentEl, "The source HTML's <dokki> block is missing a <topics> child.");
    assert(titleEl, "The source HTML's <dokki> block is missing a <title> child.");

    const bodyEl = (()=>{
        if (!srcDOM.querySelector("body")) {
            htmlEl.insertAdjacentHTML("beforeend", "<body></body>");
        }
        return srcDOM.querySelector("body");
    })();
    assert(bodyEl, "Could not find or create a <body> block in the source HTML.");

    // Convert dokki Markdown articles (<article src='???.md'></article>) into dokkified HTML.
    for (const el of contentEl.childNodes) {
        const isMdArticle = (
            (el.tagName === "ARTICLE") &&
            el.getAttribute("src").endsWith(".md")
        );

        if (isMdArticle) {
            const fileContents = (
                fs.readFileSync(el.getAttribute("src"), "utf-8")
                // Extra metadata about code blocks may be provided via "```lang [{option},{option},...]".
                // To allow an IDE to display the correct syntax highlighting, the metadata are separated
                // from the language name with a space, but that results in the metadata being discarded
                // when rendering into Markdown using markdown-it. So let's remove the space before rendering.
                .replace(/(\n```.+) (\[.*\])/ig, "$1$2")
            );

            const articleContentsEl = htmlParser.parse(markdownIt.render(fileContents));
            el.replaceWith(articleContentsEl);

            // Process the HTML to transform certain regular HTML elements into dokki elements.
            {
                const transforms = [
                    convert_h1_h2_to_dokki_topic_subtopic,
                    dokkify_code_blocks,
                    dokkify_tables,
                    dokkify_media,
                    dokkify_nested_blockquote_captions,
                    move_dokki_elements_out_of_p,
                    dokkify_adjacent_blockquote_captions,
                    dokkify_blockquotes,
                    merge_code_and_output,
                ];

                for (const fn of transforms) {
                    await fn(articleContentsEl, el.getAttribute("src"));
                }
            }
        }
    }

    // Inject the processed intermediate elements into the final HTML.
    {
        const docTitle = (
            titleEl.textContent
            .replace("<", "&lt;")
            .replace(">", "&gt;")
        );
        
        const widgetsTemplate = widgetsEl
            ? `<template #widgets>${widgetsEl.innerHTML}</template>`
            : "";

        bodyEl.insertAdjacentHTML("beforeend", `
            <template id="dokki">
                <dokki-document>
                    <dokki-header>
                        <template #caption>
                            ${docTitle}
                        </template>
                        ${widgetsTemplate}
                    </dokki-header>
                    <dokki-topics>
                        ${contentEl.childNodes.map(el=>el.outerHTML).join("\n")}
                    </dokki-topics>
                </dokki-document>
            </template>
        `);

        dokkiEl.remove();
    }

    fs.writeFileSync(dstHtmlFilename, srcDOM.outerHTML);

    process.exit(0);
})();

// Given the 'src' attribute of an <img> element that points to a local image source, generates a
// thumbnail image and returns it as a data URL. Returns undefined if an error occurred.
async function thumbnail_data_url(imageSrc) {
    if (typeof imageSrc !== "string") {
        return undefined
    }

    const isLocalFile = !/^https?:\/\//.test(imageSrc); /// <- TODO: Better checking of local vs. non-local src.
    if (!isLocalFile) {
        console.warn(`Thumbnail generation skipped for non-local image file: ${imageSrc}`);
        return undefined
    }

    const imageData = fs.readFileSync(imageSrc, null);
    const resizedImageData = await sharp(imageData).resize(20).toBuffer();
    return `data:image/png;base64,${resizedImageData.toString('base64')}`;
}

// Merges adjacent <dokki-code> and <dokki-xxxx inline> elements, whereby the
// latter element becomes the <dokki-code> element's output.
function merge_code_and_output(dom) {
    const embeddableWithCode = [
        "dokki-image",
        "dokki-iframe",
        "dokki-directory",
        "dokki-spoiler",
        "dokki-output",
        "dokki-table",
        "dokki-video"
    ];

    const els = dom.querySelectorAll(embeddableWithCode.map(tag=>`dokki-code + ${tag}[inline]`).join(","));

    for (const el of els) {
        const codeEl = el.previousElementSibling;
        codeEl.insertAdjacentHTML("beforeend", `<template #output>${el.outerHTML}</template>`);
        el.remove();
    }
}

// Converts
//
//   <p>
//     Abcd
//     <dokki-xxxx>...</dokki-xxxx>
//   </p>
//
// into
//
//   <p>Abcd</p>
//   <dokki-xxxx>...</dokki-xxxx>
//
// (<dokki-xxxx> elements are converted into <p> elements by dokki at run-time,
// so it doesn't make sense to have them wrapped in a duplicate <p> by Markdown).
function move_dokki_elements_out_of_p(dom) {
    const dokkiElTags = [
        "dokki-image",
        "dokki-code",
        "dokki-iframe",
        "dokki-directory",
        "dokki-spoiler",
        "dokki-output",
        "dokki-table",
        "dokki-video"
    ];

    const els = dom.querySelectorAll(dokkiElTags.map(tag=>`p > ${tag}`).join(","));

    for (const el of els) {
        el.parentNode.insertAdjacentHTML("afterend", el);
        el.parentNode.remove();
    }
}

// Converts
//
//   <table>
//     Abcd
//   </table>
//
// into
//
//   <dokki-table>
//     <template #table>
//       Abcd
//     </template>
//   </dokki-table>
function dokkify_tables(dom) {
    const tableEls = dom.querySelectorAll("table");
    
    for (const el of tableEls) {
        el.insertAdjacentHTML("beforebegin", `
            <dokki-table>
                <template #table>
                    ${el.innerHTML}
                </template>
                </dokki-table>`);
        el.remove();
    }
}

// Converts a string of the form "{a}{b:5}{c}" into an object of the form "{a, b:5, c}".
function parse_metadata_string(string) {
    if (typeof string !== "string") {
        throw new Error("Expected a string.");
    }

    string = string.trim();

    const metadataBlocks = (string.match(/{.*?}/g)?.map(match=>match.replace(/{(.*?)}/g, "$1")) || []);
    
    if (metadataBlocks.map(opt=>`{${opt}}`).join("").length != string.length) {
        console.warn(`Warning: The option string "${string}" includes one or more characters outside of {} blocks. Any text not inside {} will be ignored.`);
    }

    return metadataBlocks.reduce((parsedObj, option)=>{
        if (option.startsWith("image:")) {
            const [width, height] = option.split(":")[1].split("x");
            assert(width && height);
            parsedObj.type = "image";
            parsedObj.width = width;
            parsedObj.height = height;
        }
        else if (option === "image") {
            parsedObj.type = "image";
        }
        else if (option === "inline") {
            parsedObj.inline = true;
        }
        else if (option === "autofocus") {
            parsedObj.autofocus = true;
        }
        else if (option === "expanded") {
            parsedObj.expanded = true;
        }
        else if (option === "headerless") {
            parsedObj.headerless = true;
        }
        else if (option === "youtube") {
            parsedObj.type = "video";
            parsedObj.platform = "youtube";
        }
        else if (option === "iframe") {
            parsedObj.type = "iframe";
        }
        return parsedObj;
    }, {});
}

// Converts
//
//   <img src="Abcd" alt="<100x200> Efgh">
//
// into
//
//   <dokki-image src="Abcd" width="100" height="200">
//     <template #caption>
//       Efgh
//     </template>
//   </dokki-image>
async function dokkify_media(dom) {
    const mediaEls = dom.querySelectorAll("img");
    
    for (const el of mediaEls) {
        const src = el.getAttribute("src");
        const metadata = parse_metadata_string(el.getAttribute("alt") || "");

        const options = {
            type: "image",
            ...metadata,
        };

        const attributesString = [
            "inline",
            "autofocus",
            "expanded",
            "headerless"
        ].reduce((str, attr)=>`${str} ${options[attr]? attr : ""}`, "");

        const dokkifiedMediaElString = await (async ()=>{
            switch (options.type) {
                case "image": {
                    const thumbnailDataUrl = await thumbnail_data_url(src);
                    const thumbnailString = thumbnailDataUrl
                        ? `thumbnail-src="${thumbnailDataUrl}"`
                        : "";

                    return `
                        <dokki-image src="${src}" width="${options.width}" height="${options.height}" ${attributesString} ${thumbnailString}>
                        </dokki-image>
                    `;
                }
                case "video": return `
                    <dokki-video platform="youtube" src="${src}" ${attributesString}>
                    </dokki-video>
                `;
                case "iframe": return `
                    <dokki-iframe src="${src}" ${attributesString}>
                    </dokki-iframe>
                `;
                default: assert.fail(`Unrecognized media type "${options.type}".`);
            }
        })();

        el.insertAdjacentHTML("beforebegin", dokkifiedMediaElString);
        el.remove();
    }
}

// Converts
//
//   <blockquote>
//     Abcd
//   <blockquote>
//
// into
//
//   <dokki-area>
//     Abcd
//   </dokki-area>
function dokkify_blockquotes(dom) {
    // We loop over the quoteSelectorAll() result to ensure we convert all nested
    // blockquotes as well.
    let quoteEls;
    while ((quoteEls = dom.querySelectorAll("blockquote")).length) {
        for (const el of quoteEls) {
            el.insertAdjacentHTML("beforebegin", `<dokki-area>${el.innerHTML}</dokki-area>`);
            el.remove();
        }
    }
}

// Converts
//
//   <pre>
//     <code>
//       Abcd
//     </code>
//   </pre>
//
// into
//
//   <dokki-code code="Abcd">
//   </dokki-code>
function dokkify_code_blocks(dom) {
    const codeEls = dom.querySelectorAll("pre").filter(el=>el.rawText);

    for (const el of codeEls) {
        // "<code class='...'>xxxxx</code>" => "xxxxx".
        const codeString = el.rawText.substring((el.rawText.indexOf(">") + 1), (el.rawText.length - "</code>".length));

        const codeEl = htmlParser
            .parse(el.textContent)
            .querySelector("code");

        if (codeEl) {
            const syntaxString = codeEl.classList.value[0];
            const [, syntaxName, metadataString] = (
                /^(.+?)\[(.*)\]/.exec(codeEl.classList.value[0]) ||
                [, syntaxString,]
            );
            const metadata = parse_metadata_string(metadataString || "");
            const shortSyntaxName = syntaxName.substring("language-".length);
            const codeSyntaxAttribute = shortSyntaxName.length
                ? `syntax="${shortSyntaxName}"`
                : "";

            const extraAttributesString = [
                "expanded",
                "headerless"
            ].reduce((str, attr)=>`${str} ${metadata[attr]? attr : ""}`, "");

            el.insertAdjacentHTML("beforebegin", `
                <dokki-code ${codeSyntaxAttribute} ${extraAttributesString}>
                    <template #code>
                        <pre>${codeString}</pre>
                    </template #code>
                </dokki-code>
            `);

            el.remove();
        }
    }
}

// Converts
//
//   <blockquote>
//     <p>Abcd</p>
//   </blockquote>
//   <dokki-xxxx></dokki-xxxx>
//
// into
//
//   <dokki-xxxx>
//     <template #caption>Abcd</template>
//   </dokki-xxxx>"
//
// Sample markdown (note empty line between caption and dokki element):
//
//   > Caption text
//
//   <dokki-image></dokki-image>
function dokkify_adjacent_blockquote_captions(dom) {
    const captionableEls = dom.querySelectorAll(captionableDokkiTags.join(",")).filter(el=>el.previousElementSibling?.rawTagName === "blockquote");

    for (const el of captionableEls) {
        const captionEl = el.previousElementSibling;

        if (captionEl) {
            const caption = captionEl.textContent.trim();
            el.insertAdjacentHTML("afterbegin", `<template #caption>${caption}</template>`);
            captionEl.remove();
        }
    }
}

// Converts
//
//   <blockquote>
//     <p>
//       Abcd
//       <dokki-xxxx></dokki-xxxx>
//     </p>
//   </blockquote>
//
// into
//
//   <dokki-xxxx>
//     <template #caption>Abcd</template>
//   </dokki-xxxx>"
//
// Sample markdown (note lack of empty line between caption and dokki element):
//
//   > Caption text
//   <dokki-image></dokki-image>
function dokkify_nested_blockquote_captions(dom) {
    const els = dom.querySelectorAll(captionableDokkiTags.map(tag=>`blockquote > p > ${tag}`).join(","));

    for (const dokkiEl of els) {
        const pEl = dokkiEl.parentNode;
        const blockquoteEl = pEl.parentNode;
        const caption = pEl.childNodes[0].textContent.trim();

        dokkiEl.insertAdjacentHTML("afterbegin", `<template #caption>${caption}</template>`);
        blockquoteEl.insertAdjacentHTML("beforebegin", dokkiEl);

        dokkiEl.remove();
        pEl.remove();
        blockquoteEl.remove();
    }
}

function convert_h1_h2_to_dokki_topic_subtopic(dom) {
    const htmlLines = dom.innerHTML.split("\n");

    let isInsideTopic = false;
    let isInsideSubtopic = false;

    for (let i = 0; i < htmlLines.length; i++) {
        if (htmlLines[i].startsWith("<h1>")) {
            if (isInsideSubtopic) {
                htmlLines[i] = ("</dokki-subtopic>" + htmlLines[i]);
                isInsideSubtopic = false;
            }

            // Note: We rely on the HTML parser to clean up unneeded closing tags.
            const title = htmlLines[i].match(/<h1>(.*)<\/h1>/)?.[1];
            htmlLines[i] = htmlLines[i].replace(/<h1>(.*)<\/h1>/, `</dokki-topic><dokki-topic title="${escaped_title(title)}">`);
            isInsideTopic = true;
        }
        else if (htmlLines[i].startsWith("<h2>")) {
            const title = htmlLines[i].match(/<h2>(.*)<\/h2>/)?.[1];
            htmlLines[i] = htmlLines[i].replace(/<h2>(.*)<\/h2>/, `</dokki-subtopic><dokki-subtopic title="${escaped_title(title)}">`);
            isInsideSubtopic = true;
        }

        function escaped_title(title) {
            if (typeof title !== "string" || !title.trim().length) {
                console.warn(`Warning: Encountered an undefined topic title on line ${i+1}: ${htmlLines[i]}`);
                return "[Untitled]";
            }
    
            return (
                title
                .replace("'", "&apos;")
                .replace("\"", "&quot;")
            );
        }
    }

    if (isInsideSubtopic) {
        htmlLines[htmlLines.length-1] += "</dokki-subtopic>";
    }

    if (isInsideTopic) {
        htmlLines[htmlLines.length-1] += "</dokki-topic>";
    }

    dom.innerHTML = htmlLines.join("\n");
}
