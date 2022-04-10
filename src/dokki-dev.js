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
import dokkiDirectory from "./components/dokki-directory.vue";
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
import dokkiTag from "./components/dokki-tag.vue";
import dokkiTagCloud from "./components/dokki-tag-cloud.vue";
import dokkiTagFilter from "./components/dokki-tag-filter.vue";
import dokkiThemeSelector from "./components/dokki-theme-selector.vue";
import dokkiTip from "./components/dokki-tip.vue";
import dokkiTopic from "./components/dokki-topic.vue";
import dokkiTopics from "./components/dokki-topics.vue";
import dokkiVideo from "./components/dokki-video.vue";
import dokkiHr from "./components/dokki-hr.vue";
import dokkiWarning from "./components/dokki-warning.vue";
import dokki0AnimatedExpander from "./components/dokki0-animated-expander.vue";
import dokki0ExpansionIndicator from "./components/dokki0-expansion-indicator.vue";
import dokki0HashRouter from "./components/dokki0-hash-router.vue";
import dokki0PageLoadProgressBar from "./components/dokki0-page-load-progress-bar.vue";
import dokki0TextBlockWithLineNumbers from "./components/dokki0-text-block-with-line-numbers.vue";
import dokki0Topic from "./components/dokki0-topic.vue";
import productName from "./components/product-name.vue";

export function start(args = {})
{
    args = {
        container: document.body,
        template: document.querySelector("#dokki-document"),
        ...args,
    };

    console.assert(args.container instanceof HTMLElement,
                   "Invalid document container");

    if (args.template instanceof HTMLTemplateElement)
    {
        args.container.appendChild(args.template.content)
        args.template.remove();
    }
    else
    {
        console.assert((args.template === null),
                       "Invalid document template");
    }

    if (!document.documentElement.hasAttribute("lang"))
    {
        document.documentElement.setAttribute("lang", "en");
    }

    // Apply URL parameters.
    {
        const urlParams = new URLSearchParams(window.location.search);

        // ?layout
        {
            const layoutModes = ["horizontal", "vertical", "vertical-narrow"];
            const defaultLayoutMode = layoutModes[0];
            const mode = (modeName)=>layoutModes.find(mode=>mode==modeName);

            if (urlParams.has("layout"))
            {
                const targetMode = (mode(urlParams.get("layout")) || defaultLayoutMode);
                store.commit("set_layout_mode", targetMode);
            }
            else
            {
                window.addEventListener("resize", (
                    function set_mode()
                    {
                        const screenWidth = document.documentElement.clientWidth;
                        const targetMode = 
                            (screenWidth < 500)?
                                mode("vertical-narrow")
                            : (screenWidth < 860)?
                                mode("vertical")
                            : mode("horizontal");

                        store.commit("set_layout_mode", (targetMode || defaultLayoutMode));
                        return set_mode;
                    })()
                );
            }
        }
    }

    const app = Vue.createApp({})
    .use(store)
    .component("dokki-area", dokkiArea)
    .component("dokki-code", dokkiCode)
    .component("dokki-console", dokkiConsole)
    .component("dokki-directory", dokkiDirectory)
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
    .component("dokki-tag", dokkiTag)
    .component("dokki-tag-cloud", dokkiTagCloud)
    .component("dokki-tag-filter", dokkiTagFilter)
    .component("dokki-theme-selector", dokkiThemeSelector)
    .component("dokki-tip", dokkiTip)
    .component("dokki-topic", dokkiTopic)
    .component("dokki-topics", dokkiTopics)
    .component("dokki-video", dokkiVideo)
    .component("dokki-warning", dokkiWarning)
    .component("dokki-hr", dokkiHr)
    .component("dokki0-animated-expander", dokki0AnimatedExpander)
    .component("dokki0-expansion-indicator", dokki0ExpansionIndicator)
    .component("dokki0-hash-router", dokki0HashRouter)
    .component("dokki0-page-load-progress-bar", dokki0PageLoadProgressBar)
    .component("dokki0-text-block-with-line-numbers", dokki0TextBlockWithLineNumbers)
    .component("dokki0-topic", dokki0Topic)
    .component("product-name", productName);

    // Register any user-provided custom components.
    if (Array.isArray(parent.window.dokkiUserComponents))
    {
        for (const component of parent.window.dokkiUserComponents)
        {
            if ((typeof component !== "object") ||
                !component.hasOwnProperty("$tag"))
            {
                continue;
            }

            const tagName = component.$tag;

            // Don't feed the tag name into Vue, just in case Vue uses a property
            // of this name for something else.
            delete component.$tag;

            app.component(tagName, component);
        }
    }

    app.mount(args.container);

    return;
}
