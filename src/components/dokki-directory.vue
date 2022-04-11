/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-directory dokkiCSS-expandable dokkiCSS-groupbox"
       :class="{
           'dokkiCSS-headerless': isHeaderless,
           'dokkiCSS-expanded': isExpanded,
           'dokkiCSS-transitioning': isTransitioning,
       }">

        <header v-if="!isHeaderless"
                @click="this.$refs['directory-expander'].toggle_expansion()">

            <span class="dokkiCSS-groupbox-title">
                <i class="fas fa-sm fa-folder"/>
                File list
            </span>

            <span class="dokkiCSS-title">
                {{title}}
            </span>

            <dokki0-expansion-indicator :isExpanded="isExpanded"/>

        </header>

        <dokki0-animated-expander ref="directory-expander"
                                  :start-expanded="isExpanded"
                                  @transitioning="isTransitioning = true"
                                  @expanded="isExpanded = true, isTransitioning = false"
                                  @minimized="isExpanded = false, isTransitioning = false">

            <div class="dokkiCSS-container">

                <div v-for="entry in flattenedStructure"
                    class="directory-entry"
                    :class="entry.type"
                >

                    <span class="spacer-container">
                        <span v-for="level in entry.level" class="spacer">
                        </span>
                    </span>

                    <i class="icon" :class="entryIcon(entry)"/>

                    <span class="label" style="margin-left: 0.5ch;">
                        <a v-if="entry.href" :href="entry.href">
                            {{entry.name}}
                        </a>
                        <span v-else>
                            {{entry.name}}
                        </span>
                    </span>

                </div>

            </div>

        </dokki0-animated-expander>

    </p>
</template>

<script>
import {headerlessPropMixin} from "../component-mixins.js";
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [
        headerlessPropMixin,
        expandedPropMixin,
    ],
    props: {
        structure: {type: Object},
        title: {type: String, default: "Directory structure"},
    },
    data() {
        return {
            codeFromSlot: undefined,
            isTransitioning: false,
        }
    },
    methods: {
        entryPadding(entry = {})
        {
            return "<span></span>".repeat(entry.level);
        },
        entryIcon(entry = {})
        {
            const style = (entry.type == "folder")
                ? "fas"
                : "far";

            const base = (entry.type == "folder")
                ? "folder"
                : "file";

            const suffix = entry.content
                ? `-${entry.content}`
                : "";

            return `${style} fa-${base}${suffix}`;
        },
    },
    mounted()
    {
        if (this.isHeaderless)
        {
            this.$refs["directory-expander"].expand({animate: false});
        }
    },
    computed: {
        flattenedStructure()
        {
            return recurse(this.$props.structure);

            function recurse(object, flattened = [], depth = 0)
            {
                if ((typeof object !== "object")) {
                    return;
                }

                const keys = Object.keys(object).filter(key=>!key.startsWith("/"));

                for (const key of keys)
                {
                    const srcObj = object[key];
                    const srcObjKeys = Object.keys(srcObj).filter(key=>!key.startsWith("/"));
                    const meta =
                        Object.keys(srcObj)
                        .filter(key=>key.startsWith("/"))
                        .reduce((metaObj, key)=>{metaObj[key.substr(1)] = srcObj[key]; return metaObj;}, {})

                    flattened.push({
                        name: key,
                        level: depth,
                        href: meta.href,
                        type: (meta.type || (srcObjKeys.length? "folder" : "file")),
                        content: meta.content,
                    });
                    
                    recurse(srcObj, flattened, (depth + 1));
                }

                return flattened;
            }
        },
    },
}
</script>
