/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

require("./dokki.css");

import store from "./store.js";
import dokkiArea from "./components/dokki-area.vue";
import dokkiCode from "./components/dokki-code.vue";
import dokkiConsole from "./components/dokki-console.vue";
import dokkiHeader from "./components/dokki-header.vue";
import dokkiIframe from "./components/dokki-iframe.vue";
import dokkiImage from "./components/dokki-image.vue";
import dokkiItem from "./components/dokki-item.vue";
import dokkiLorem from "./components/dokki-lorem.vue";
import dokkiOutput from "./components/dokki-output.vue";
import dokkiSidePanel from "./components/dokki-side-panel.vue";
import dokkiSpoiler from "./components/dokki-spoiler.vue";
import dokkiSubtopic from "./components/dokki-subtopic.vue";
import dokkiTable from "./components/dokki-table.vue";
import dokkiThemeSelector from "./components/dokki-theme-selector.vue";
import dokkiTip from "./components/dokki-tip.vue";
import dokkiTopic from "./components/dokki-topic.vue";
import dokkiTopics from "./components/dokki-topics.vue";
import dokkiVideo from "./components/dokki-video.vue";
import dokkiWarning from "./components/dokki-warning.vue";
import dokki0TextBlockWithLineNumbers from "./components/dokki0-text-block-with-line-numbers.vue";
import productName from "./components/product-name.vue";

window.addEventListener("DOMContentLoaded", ()=>
{
    // Prepare the DOM for mounting the app.
    {
        const documentBodyTemplate = document.querySelector("#dokki-document");
        const whileInitializingElement = document.querySelector(".dokki-while-initializing");

        if (!(documentBodyTemplate instanceof HTMLTemplateElement)) {
            throw new Error("No document body found.");
        }

        document.body.appendChild(documentBodyTemplate.content)
        documentBodyTemplate.remove();

        if (whileInitializingElement) {
            whileInitializingElement.remove();
        }
    }
    
    Vue.createApp({})
    .component("dokki-area", dokkiArea)
    .component("dokki-code", dokkiCode)
    .component("dokki-console", dokkiConsole)
    .component("dokki-header", dokkiHeader)
    .component("dokki-iframe", dokkiIframe)
    .component("dokki-image", dokkiImage)
    .component("dokki-item", dokkiItem)
    .component("dokki-lorem", dokkiLorem)
    .component("dokki-output", dokkiOutput)
    .component("dokki-side-panel", dokkiSidePanel)
    .component("dokki-spoiler", dokkiSpoiler)
    .component("dokki-subtopic", dokkiSubtopic)
    .component("dokki-table", dokkiTable)
    .component("dokki-theme-selector", dokkiThemeSelector)
    .component("dokki-tip", dokkiTip)
    .component("dokki-topic", dokkiTopic)
    .component("dokki-topics", dokkiTopics)
    .component("dokki-video", dokkiVideo)
    .component("dokki-warning", dokkiWarning)
    .component("dokki0-text-block-with-line-numbers", dokki0TextBlockWithLineNumbers)
    .component("product-name", productName)
    .use(store)
    .mount("body");
});
