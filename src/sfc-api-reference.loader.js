/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 * 
 * 
 * A quick 'n dirty custom webpack loader for parsing dokki's <api-reference> documentation blocks
 * in Vue SFC files. The loader will insert the blocks' contents into a document template.
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

const nodeHtmlParser = require("node-html-parser");
const fs = require("fs");

const processedResources = new Set();
let htmlTemplate, htmlTemplateEl;

module.exports = function (source) {
    const basePath = this.rootContext;
    const resourceName = this.resourcePath;
    const templateFilename = `${basePath}/src/docs/api-reference.template.html`;
    const templateOutputFilename = `${basePath}/docs/api-reference.html`;
    const doc = nodeHtmlParser.parse(source);

    if (!htmlTemplate) {
        htmlTemplate = nodeHtmlParser.parse(
            fs.readFileSync(templateFilename, "utf-8")
        );

        htmlTemplateEl = htmlTemplate.querySelector("dokki-topics");
    }

    // I'm using a Set here to make sure the script doesn't process the same
    // source files multiple times. I'm not sure why webpack does it, but it
    // passes the same files into the loader three, four times. So this is a
    // kludge for now.
    if (!processedResources.has(resourceName)) {
        processedResources.add(resourceName);

        const docEl = doc.querySelector("api-reference");

        if (docEl) {
            const componentName = resourceName.match(/components\/(.*)\.vue$/)[1];

            htmlTemplateEl.innerHTML += topic_html_string(componentName, docEl.innerHTML);
            fs.writeFileSync(templateOutputFilename, htmlTemplate.toString(), "utf-8");

            // Don't pass the custom <api-reference> blocks to other loaders.
            docEl.remove();
        }
    }

    return doc.toString();

    function topic_html_string(componentName = "", content = "")
    {
        return `
        <dokki-topic title='${componentName}'>
            ${content}
        </dokki-topic>
        `;
    }
}
