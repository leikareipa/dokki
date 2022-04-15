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
 *   test: /\.vue$/i,
 *   use: [
 *     "vue-loader",
 *     path.resolve("./src/sfc-api-reference.loader.js"),
 *   ]
 * }
 * 
 */

const htmlParser = require("node-html-parser");
const fs = require("fs");

const topics = {};
let templateDoc, topicsContainerEl;

module.exports = function (source) {
    const basePath = this.rootContext;
    const srcFilename = this.resourcePath;
    const dstFilename = `${basePath}/docs/api-reference.html`;
    const sfcContents = htmlParser.parse(source);

    // Load the API reference HTML template as soon as we know the base path.
    if (!templateDoc) {
        templateDoc = htmlParser.parse(
            fs.readFileSync(`${basePath}/src/docs/api-reference.template.html`, "utf-8")
        );

        topicsContainerEl = templateDoc.querySelector("dokki-topics");
    }

    // Insert the custom block's contents into the output API reference file.
    const docEl = sfcContents.querySelector("api-reference"); 
    if (docEl) {
        const componentName = srcFilename.match(/components\/(.*)\.vue$/)[1];

        topics[componentName] = topic_html_string(componentName, docEl.innerHTML);
        topicsContainerEl.innerHTML = Object.keys(topics).sort().map(key=>topics[key]).join("\n");

        fs.writeFileSync(dstFilename, templateDoc.toString(), "utf-8");

        // Don't pass the custom block to other loaders.
        docEl.remove();
    }

    return sfcContents.toString();

    function topic_html_string(componentName = "", content = "")
    {
        return `
        <dokki-topic title='${componentName}'>
            ${content}
        </dokki-topic>
        `;
    }
}
