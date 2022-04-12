/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-directory"
    icon="fas fa-folder"
    title="File list">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <div v-for="entry in flattenedStructure"
             class="directory-entry"
             :class="entry.type">

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
        
    </template>
    
</dokki0-embedded-expandable>
</template>

<script>
export default {
    props: {
        structure: {type: Object},
    },
    data() {
        return {
            codeFromSlot: undefined,
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
