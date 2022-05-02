/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-directory"
    :has-content="Boolean(Object.keys(this.structureObject).length)"
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
}
</style>

<script>
export default {
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
        structure() {
            return `{${this.$slots["structure"]?.()[0]?.children || ''}}`;
        },
        structureObject()
        {
            return eval(`(${this.structure})`);
        },
        flattenedStructure()
        {
            return recurse(this.structureObject);

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

<api-reference lang="md">
Displays a nested listing of files and folders.

## Samples

<dokki-directory>
    <template #caption>
        A listing of files and folders
    </template>
    <template #structure>
        "Directory": {
            "Sub-directory": {
                "file.1": {},
                "file.2": {},
            },
        }
    </template>
</dokki-directory>

<dokki-directory headerless>
    <template #caption>
        A listing of files and folders
    </template>
    <template #structure>
        "Directory": {
            "Sub-directory": {
                "file.1": {},
                "file.2": {},
            },
        }
    </template>
</dokki-directory>

## Markup

    <dokki-directory expanded headerless inline-class>

        <template #caption>
        </template>

        <template #structure>
        </template>

    </dokki-directory>

## Templates

### #caption

The template's children will be displayed as the \<dokki-directory\>
element's caption.

<x-example>
    <dokki-code headerless
        code="
        <dokki-directory>
            <template #caption>
                Hello there
            </template>
        </dokki-directory>
        ">
    </dokki-code>
    <dokki-directory>
        <template #caption>
            Hello there
        </template>
    </dokki-directory>
</x-example>

### #structure <x-required></x-required>

A string-serialized JavaScript object describing the directory structure. Each
property key is the name of a folder or file, with files being those properties
which have no further sub-properties (apart from metadata). Property keys prefixed
with "/" are interpreted as metadata.

<dokki-table>
    <template #caption>
        File metadata identifiers
    </template>
    <template #table>
        <tr>
            <td>/content</td>
            <td>
                Determines the name of the Font Awesome icon used for the file (&lt;i&gt;fa-file-&lt;/i&gt;xxxx).
            </td>
        </tr>
        <tr>
            <td>/href</td>
            <td>
                A hyperlink that will be applied to the file's name.
            </td>
        </tr>
    </template>
</dokki-table>

<x-example>
    <dokki-code headerless
        code="
        <dokki-directory>
            <template #structure>
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
            </template>
        </dokki-directory>
        ">
    </dokki-code>
    <dokki-directory>
        <template #structure>
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
        </template>
    </dokki-directory>
</x-example>

## Attributes

### expanded

If present, the \<dokki-directory\> element's directory listing will be visible
initially, rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-directory\> element to be displayed without its
caption.

Setting this attribute will implicitly set the **expanded** attribute
as well. 

<x-example>
    <dokki-code headerless
        code="
        <dokki-directory headerless>
            <template #structure>
                'Directory': {
                    'file.1': {},
                    'file.2': {},
                }
            </template>
        </dokki-directory>
        ">
    </dokki-code>
    <dokki-directory headerless>
        <template #structure>
            'Directory': {
                'file.1': {},
                'file.2': {},
            }
        </template>
    </dokki-directory>
</x-example>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-directory\>
element's class list.
</api-reference>
