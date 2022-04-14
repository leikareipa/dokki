/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-directory"
    expands-to="dropdown"
    icon="fas fa-folder"
    title="File tree">

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

<style lang="scss">
.dokki0-embedded-expandable.dokki-directory
{
    border: none;

    &.headerless
    {
        transform: translateY(-0.25em);
    }

    .dokkiCSS-container
    {
        overflow: auto;
        padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    }

    .directory-entry
    {
        line-height: initial;
        min-height: 26px;
        display: flex;

        .icon,
        .label
        {
            display: flex;
            align-items: center;
        }

        .spacer-container
        {
            display: flex;
        }

        .spacer
        {
            padding-left: 1.25em;
            display: flex;
        }

        .spacer::before
        {
            border-left: 1px solid var(--dokkiCSS-page-primary-line-color);
            content: "";
            position: relative;
            left: -1.5ch;
        }

        &:last-child .spacer
        {
            transform: translateY(-0.5ch);
        }
    }

    .dokkiCSS-container
    {
        padding-top: calc(var(--dokkiCSS-embedded-vertical-padding) - 4px);
        padding-bottom: calc(var(--dokkiCSS-embedded-vertical-padding) - 4px);
    }

    &.headerless
    {
        .dokkiCSS-container
        {
            border-top: none;
        }
    }
}
</style>

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

<api-reference>
<p>
    Displays a directory listing of files and folders.
</p>

<h2>Attributes</h2>

<h3>expanded</h3>
<p>
    If present, the directory listing will be visible by default rather than requiring
    the user to reveal it manually.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>headerless</h3>
<p>
    If present, causes the <i>dokki-directory</i> element's header to not be displayed.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>title</h3>
<p>
    The title to be shown in the header of the <i>dokki-directory</i> element.
</p>

<h3>structure</h3>
<p>
    A JavaScript object as a string describing the directory structure. Each property
    key is the name of a folder or file, except for keys prefixed with "/", which are
    metadata about the entry.
</p>

<p>
    TODO: Explain the structure object in more detail.
</p>

<h2>Examples</h2>

<dokki-code
    headerless
    code="
        <dokki-directory :structure=``{
            'src': {
                'kelpo_interface': {
                    'interface.c': {
                        '/content': 'code',
                        '/href': 'https://github.com/leikareipa/kelpo/blob/master/src/kelpo_interface/interface.c',
                    },
                    'interface.h': {
                        '/content': 'code',
                        '/href': 'https://github.com/leikareipa/kelpo/blob/master/src/kelpo_interface/interface.h',
                    },
                },
            }
        }``>
        </dokki-directory>
    ">

    <dokki-output>
        <dokki-directory :structure="{
            'src': {
                'kelpo_interface': {
                    'interface.c': {
                        '/content': 'code',
                        '/href': 'https://github.com/leikareipa/kelpo/blob/master/src/kelpo_interface/interface.c',
                    },
                    'interface.h': {
                        '/content': 'code',
                        '/href': 'https://github.com/leikareipa/kelpo/blob/master/src/kelpo_interface/interface.h',
                    },
                },
            }
        }">
        </dokki-directory>
    </dokki-output>
</dokki-code>
</api-reference>
