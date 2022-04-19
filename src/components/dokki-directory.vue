/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-directory"
    :has-content="Boolean(Object.keys(structure).length)"
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
        structure: {type: Object, default: {}},
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
        Displays a nested listing of files and folders.
    </p>

    <h2>Samples</h2>

        <dokki-directory :structure="{
                'Directory': {
                    'Sub-directory': {
                        'file.1': {},
                        'file.2': {},
                    },
                }
            }">

            <template #caption>
                A listing of files and folders
            </template>

        </dokki-directory>

        <dokki-directory plain :structure="{
                'Directory': {
                    'Sub-directory': {
                        'file.1': {},
                        'file.2': {},
                    },
                }
            }">

            <template #caption>
                A listing of files and folders
            </template>

        </dokki-directory>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-directory expanded headerless inline-class :structure>

                <template #caption>
                </template>

            </dokki-directory>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-directory</x-tag>
                element's caption.
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            Hello there
                        </template>
                        ">
                    </dokki-code>

                    <dokki-directory>
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-directory>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-directory>
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-directory>

                </x-example>
            </x-examples>

    <h2>Attributes</h2>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-directory</x-tag> element's directory listing will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-directory</x-tag> element to be displayed without its
                caption.
            </p>

            <p>
                Setting this attribute will implicitly set the <x-attr>expanded</x-attr> attribute
                as well. 
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-directory headerless :structure=``{
                            'Directory': {
                                'file.1': {},
                            }
                        }``>
                        </dokki-directory>
                        ">
                    </dokki-code>

                    <dokki-directory headerless :structure="{
                        'Directory': {
                            'file.1': {},
                        }
                    }">
                    </dokki-directory>

                </x-example>
            </x-examples>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-directory</x-tag> element's class list.
            </p>

        <x-attr>:structure</x-attr>
        <x-required></x-required>

            <p>
                A string-serialized JavaScript object describing the directory structure. Each property
                key is the name of a folder or file, with files being those properties which have no
                further sub-properties (apart from metadata). Property keys prefixed with "/" are
                interpreted as metadata.
            </p>

            <dokki-table>
                <template #caption>
                    File metadata identifiers
                </template>
                <template #table>
                    <table>
                        <tr>
                            <td>/content</td>
                            <td>
                                Determines the name of the Font Awesome icon used for the file (<i>fa-file-</i>xxxx).
                            </td>
                        </tr>
                        <tr>
                            <td>/href</td>
                            <td>
                                A hyperlink that will be applied to the file's name.
                            </td>
                        </tr>
                    </table>
                </template>
            </dokki-table>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-directory :structure=``{
                            'Field recording B': {
                                'Metadata': {
                                    'readme.pdf': {
                                        '/content': 'pdf',
                                        '/href': '#',
                                    },
                                    'timestamps.xlsx': {
                                        '/content': 'excel',
                                    },
                                },
                                '1st-interview.wav': {
                                    '/content': 'audio',
                                },
                                '2nd-interview.wav': {
                                    '/content': 'audio',
                                },
                            }
                        }``>
                        </dokki-directory>
                        ">
                    </dokki-code>

                    <dokki-directory :structure="{
                        'Field recording B': {
                            'Metadata': {
                                'readme.pdf': {
                                    '/content': 'pdf',
                                    '/href': '#',
                                },
                                'timestamps.xlsx': {
                                    '/content': 'excel',
                                },
                            },
                            '1st-interview.wav': {
                                '/content': 'audio',
                            },
                            '2nd-interview.wav': {
                                '/content': 'audio',
                            },
                        }
                    }">
                    </dokki-directory>

                </x-example>
            </x-examples>
</api-reference>
