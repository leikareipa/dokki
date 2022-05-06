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
const path = require("path");
const assert = require("node:assert");
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
    "dokki-video"
];

// Run.
(function()
{
    const srcHtmlFilename = process.argv[2];
    const dstHtmlFilename = process.argv[3];
    assert(srcHtmlFilename, "No source HTML file specified.");
    assert(dstHtmlFilename, "No destination HTML file specified.");

    const srcDOM = htmlParser.parse(fs.readFileSync(srcHtmlFilename, "utf-8"));
    const dokkiEl = srcDOM.querySelector("dokki");
    const topicsEl = srcDOM.querySelector("topics");
    const titleEl = srcDOM.querySelector("title");
    const widgetsEl = srcDOM.querySelector("widgets");
    assert(dokkiEl, "The source HTML is missing a <dokki> block.");
    assert(topicsEl, "The source HTML's <dokki> block is missing a <topics> child.");
    assert(titleEl, "The source HTML's <dokki> block is missing a <title> child.");

    const bodyEl = (()=>{
        if (!srcDOM.querySelector("body"))
        {
            dokkiEl.insertAdjacentHTML("afterend", "<body></body>");
        }
        return srcDOM.querySelector("body");
    })();
    assert(bodyEl, "Could not find or create a <body> block in the source HTML.");

    // Load the contents of <topics></topics> and convert them into DOM trees.
    const topicsDOM = (()=>{
        // The source HTML code is provided inline.
        if (topicsEl.getAttribute("inline") !== undefined)
        {
            const lang = (topicsEl.getAttribute("lang") || "html");
            const content = topicsEl.innerHTML;

            switch (lang)
            {
                case "md": {
                    const html = markdownIt.render(content);
                    return [htmlParser.parse(html)];
                }
                case "html": {
                    return [htmlParser.parse(content)];
                }
                default: assert.fail(`Unrecognized source öanguage ${lang}.`);
            }
        }
        // The source HTML provides a list of files containing the code.
        else
        {
            const topicsFilenameList = (()=>{
                try {
                    return topicsEl.innerHTML.split("\n").map(name=>name.trim()).filter(name=>name.length);
                }
                catch (error) {
                    return undefined;
                }
            })();

            assert(
                (Array.isArray(topicsFilenameList) && topicsFilenameList.length),
                "The <topics> block contains an invalid source file array."
            );
            
            return topicsFilenameList.map(filename=>{
                const fileExtension = path.extname(filename);
                const fileContents = fs.readFileSync(filename, "utf-8");

                switch (fileExtension)
                {
                    case ".md": {
                        const html = markdownIt.render(fileContents);
                        return htmlParser.parse(html);
                    }
                    case ".html": {
                        return htmlParser.parse(fileContents);
                    }
                    default: assert.fail(`Unrecognized source file type ${fileExtension}.`);
                }
            });
        }
    })();

    // Modify the DOM trees loaded from <topics></topics> to use the dokki API (e.g.
    // <dokki-table> instead of <table>).
    const dokkiTopicsDOM = topicsDOM.map(topicDOM=>{
        convert_h1_h2_to_dokki_topic_subtopic(topicDOM);
        dokkify_code_blocks(topicDOM);
        dokkify_tables(topicDOM);
        dokkify_media(topicDOM);
        dokkify_nested_blockquote_captions(topicDOM);
        move_dokki_elements_out_of_p(topicDOM);
        dokkify_adjacent_blockquote_captions(topicDOM);
        dokkify_blockquotes(topicDOM);
        merge_code_and_output(topicDOM);
        return topicDOM;
    });

    // Inject dokki's element tree into the source HTML.
    {
        const docTitle = titleEl.textContent;
        const topicsHtml = dokkiTopicsDOM.reduce((html, dom)=>(html + dom.outerHTML), "");

        bodyEl.insertAdjacentHTML("beforeend", `
            <template id="dokki-document">
                <dokki-toolbar>
                    <template #caption>
                        ${docTitle}
                    </template>
                    <template #widgets>
                        ${widgetsEl.innerHTML}
                    </template>
                </dokki-toolbar>
                <dokki-topics>
                    ${topicsHtml}
                </dokki-topics>
            </template>
        `);

        dokkiEl.remove();
    }

    fs.writeFileSync(dstHtmlFilename, srcDOM.outerHTML);

    process.exit(0);
})();

// Merges adjacent <dokki-code> and <dokki-xxxx inline> elements, whereby the
// latter element becomes the <dokki-code> element's output.
function merge_code_and_output(dom)
{
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

    for (const el of els)
    {
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
function move_dokki_elements_out_of_p(dom)
{
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

    for (const el of els)
    {
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
function dokkify_tables(dom)
{
    const tableEls = dom.querySelectorAll("table");
    
    for (const el of tableEls)
    {
        el.insertAdjacentHTML("beforebegin", `<dokki-table><template #table>${el.innerHTML}</template></dokki-table>`);
        el.remove();
    }
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
function dokkify_media(dom)
{
    const mediaEls = dom.querySelectorAll("img");
    
    for (const el of mediaEls)
    {
        const src = el.getAttribute("src");

        // E.g. "{a}{b}{c}" => ["a", "b", "c"].
        const optionString = el.getAttribute("alt").trim();
        const optionBlocks = (optionString?.match(/{.*?}/g)?.map(match=>match.replace(/{(.*?)}/g, "$1")) || []);
        if (optionBlocks.map(opt=>`{${opt}}`).join("").length != optionString.length)
        {
            console.warn(`Warning: The option string "${optionString}" includes one or more characters outside of {} blocks. Any text not inside {} will be ignored.`);
        }

        const options = {
            // Default values.
            type: "image",

            // User-supplied options.
            ...optionBlocks.reduce((parsedObj, option)=>{
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
            }, {})
        };

        const attributesString = [
            "inline",
            "autofocus",
            "expanded",
            "headerless"
        ].reduce((str, attr)=>`${str} ${options[attr]? attr : ""}`, "");

        const dokkifiedMediaElString = (()=>{
            switch (options.type)
            {
                case "image": return `
                    <dokki-image src=${src} width=${options.width} height=${options.height} ${attributesString}>
                    </dokki-image>
                `;
                case "video": return `
                    <dokki-video platform="youtube" src=${src} ${attributesString}>
                    </dokki-video>
                `;
                case "iframe": return `
                    <dokki-iframe src=${src} ${attributesString}>
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
function dokkify_blockquotes(dom)
{
    // We loop over the quoteSelectorAll() result to ensure we convert all nested
    // blockquotes as well.
    let quoteEls;
    while ((quoteEls = dom.querySelectorAll("blockquote")).length)
    {
        for (const el of quoteEls)
        {
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
function dokkify_code_blocks(dom)
{
    const codeEls = dom.querySelectorAll("pre").filter(el=>el.textContent);

    for (const el of codeEls)
    {
        const code = htmlParser
            .parse(el.textContent)
            .querySelector("code");

        if (code)
        {
            const codeSyntax = code.classList.value[0]?.substring("language-".length);
            const codeText = code.innerHTML.replaceAll("\"", "``");
            el.insertAdjacentHTML("beforebegin", `<dokki-code syntax="${codeSyntax}" code="${codeText}"></dokki-code>`);
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
function dokkify_adjacent_blockquote_captions(dom)
{
    const captionableEls = dom.querySelectorAll(captionableDokkiTags.join(",")).filter(el=>el.previousElementSibling?.rawTagName === "blockquote");

    for (const el of captionableEls)
    {
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
function dokkify_nested_blockquote_captions(dom)
{
    const els = dom.querySelectorAll(captionableDokkiTags.map(tag=>`blockquote > p > ${tag}`).join(","));

    for (const dokkiEl of els)
    {
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

function convert_h1_h2_to_dokki_topic_subtopic(dom)
{
    const html = dom.innerHTML.split("\n");

    let isInsideTopic = false;
    let isInsideSubtopic = false;

    for (let i = 0; i < html.length; i++)
    {
        if (html[i].startsWith("<h1>"))
        {
            if (isInsideSubtopic)
            {
                html[i] = ("</dokki-subtopic>" + html[i]);
                isInsideSubtopic = false;
            }

            // Note: We rely on the HTML parser to clean up unneeded closing tags.
            html[i] = html[i].replace(/<h1>(.*)<\/h1>/, "</dokki-topic><dokki-topic title='$1'>");
            isInsideTopic = true;
        }
        else if (html[i].startsWith("<h2>"))
        {
            html[i] = html[i].replace(/<h2>(.*)<\/h2>/, "</dokki-subtopic><dokki-subtopic title='$1'>");
            isInsideSubtopic = true;
        }
    }

    if (isInsideSubtopic)
    {
        html[html.length-1] += "</dokki-subtopic>";
    }

    if (isInsideTopic)
    {
        html[html.length-1] += "</dokki-topic>";
    }

    dom.innerHTML = html.join("\n");
}
