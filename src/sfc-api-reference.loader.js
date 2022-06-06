/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 * 
 * 
 * A quick 'n dirty custom webpack loader for parsing dokki's <api-reference> documentation blocks
 * in Vue SFC files. The loader will insert the blocks' contents into an API reference HTML template.
 * 
 * I haven't written a webpack loader before, so I'm going by the seat of my pants a bit here.
 * 
 * Usage in webpack.config.js:
 * 
 * {
 *   resourceQuery: /blockType=api-reference/,
 *   loader: path.resolve("./src/sfc-api-reference.loader.js"),
 * }
 * 
 */

const htmlParser = require("node-html-parser");
const markdownIt = require("markdown-it")({html: true});
const fs = require("fs");

const topics = {};
let templateDoc, topicsContainerEl;

module.exports = function(apiReferenceMarkdown) {
    const basePath = this.rootContext;
    const srcFilename = this.resourcePath;
    const dstFilename = `${basePath}/docs/api-reference.html`;

    // Load the API reference HTML template as soon as we know the base path.
    if (!templateDoc) {
        templateDoc = htmlParser.parse(
            fs.readFileSync(`${basePath}/src/docs/api-reference.template.html`, "utf-8")
        );

        topicsContainerEl = templateDoc.querySelector("dokki-topics");
    }

    // Convert the block's Markdown contents into HTML, and save it into the output document.
    {
        const componentName = srcFilename.match(/components\/(.*)\.vue$/)[1];

        topics[componentName] = `
            <dokki-topic title='${componentName}'>
                ${markdownIt.render(apiReferenceMarkdown)}
            </dokki-topic>
        `;

        topicsContainerEl.innerHTML = Object.keys(topics).sort().map(key=>topics[key]).join("\n");
        fs.writeFileSync(dstFilename, templateDoc.toString(), "utf-8");
    }

    return "";
}
