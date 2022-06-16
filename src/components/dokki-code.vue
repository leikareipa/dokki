/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-code"
    :has-content="Boolean(codeFromSlot || code)"
    icon="fas fa-code"
    title="Code">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <dokki-area>

            <dokki0-text-block-with-line-numbers
                :syntax="syntax"
                :text="codeFromSlot || code"
            />

        </dokki-area>

    </template>

    <template #after v-if="this.$slots['output'] || this.$slots['default']">

        <slot name="output"/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-code
{
    & > .dokki0-animated-expander > .dokkiCSS-container
    {
        overflow: auto;
    }

    &.has-after > footer
    {
        border-top: 1px solid var(--dokkiCSS-page-primary-line-color);
        
        & > .dokki-area
        {
            background-color: unset;
            margin-top: 0;
            padding: 0;

            .dokki0-embedded-expandable
            {
                margin: 0 !important;
                box-shadow: none;
                border: none;
            }
        }
    }

    body[data-dokki-theme="light"] &
    {
        .hljs-comment
        {
            font-style: italic;
            color: #737373;
        }

        .hljs-title.function_,
        .hljs-built_in
        {
            color: #035ae1;
        }

        .hljs-keyword,
        .hljs-tag > .hljs-name
        {
            background-color: #d6f6ea;
            border-radius: 2px;
        }

        .hljs-attr
        {
            font-style: italic;
        }

        .hljs-string
        {
            background-color: #fff2ad;
            border-radius: 2px;
        }

        .hljs-literal
        {
            color: crimson;
        }

        .hljs-number
        {
            color: #b3309e;
        }

        .hljs-property
        {
            font-style: italic;
        }
    }

    body[data-dokki-theme="dark"] &
    {
        .hljs-comment
        {
            color: #00aeae;
        }
    }
}
</style>

<script>
export default {
    props: {
        title: {default: "Code"},
        code: {default: undefined},
        syntax: {default: undefined},
    },
    computed: {
        codeFromSlot()
        {
            return this.$slots["code"]?.()[0]?.children;
        }
    },
}
</script>

<api-reference lang="md">
Displays a source code snippet, with optional syntax highlighting and sample output.

## Samples

<dokki-code>
    <template #caption>
        A listing of a C program
    </template>
    <template #code>
        <pre>
            void main(void)
            {
                printf("Hello there.\n");
            }
        </pre>
    </template>
</dokki-code>

<dokki-code headerless>
    <template #caption>
        A listing of a C program
    </template>
    <template #code>
        <pre>
            void main(void)
            {
                printf("Hello there.\n");
            }
        </pre>
    </template>
</dokki-code>

## Markdown syntax

You can produce a \<dokki-code\> element in Markdown by using the ``` block syntax, as
shown below; where *language* identifies the language of the code using one of
[the language aliases of highlight.js](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)
(for more information about syntax highlighting, see the **syntax** HTML attribute).

    ```language
    Code
    ```

<x-example>
    <dokki-code headerless>
        <template #code>
            <pre>
                ```c
                int main(void)
                {
                    printf("Hello there.");
                    return 0;
                }
                ```
            </pre>
        </template>
    </dokki-code>
    <dokki-code syntax="c">
        <template #code>
            <pre>
                int main(void)
                {
                    printf("Hello there.");
                    return 0;
                }
            </pre>
        </template>
    </dokki-code>
</x-example>

## HTML syntax

    <dokki-code code expanded headerless inline-class syntax>

        <template #caption>
        </template>

        <template #code>
        </template>

        <template #output>
        </template>

    </dokki-code>

## HTML templates

### #caption

The template's children will be displayed as the \<dokki-code\> element's caption.

<x-example>
    <dokki-code headerless
        code="
        <dokki-code>
            <template #caption>
                Hello there
            </template>
        </dokki-code>
        ">
    </dokki-code>
    <dokki-code>
        <template #caption>
            Hello there
        </template>
    </dokki-code>
</x-example>

### #code <x-required></x-required>

The textual contents of the template's children will be displayed as the \<dokki-code\>
element's code.

<dokki-tip>
    <ul>
        <li>
            To preserve whitespace, wrap the children in a &lt;pre&gt; element.
        </li>
        <li>
            If the code includes characters that clash with HTML parsers (e.g. &lt;&gt;
            braces), you can use the <strong>code</strong> attribute instead.
        </li>
    </ul>
</dokki-tip>

<x-example>
    <dokki-code headerless
        code='
        <template #code>
            <pre>
                void main(void) {
                    printf("Hello there.\n");
                }
            </pre>
        </template>
        '>
    </dokki-code>
    <dokki-code>
        <template #code>
            <pre>
                void main(void) {
                    printf("Hello there.\n");
                }
            </pre>
        </template>
    </dokki-code>
</x-example>

### #output

The template's child element will be indicated as the output of the \<dokki-code\>
element's code. The child element should be one of dokki's embeddables, like
\<dokki-output\>, \<dokki-image\>, or \<dokki-spoiler\>.

<x-example>
    <dokki-code headerless
        code="
        <template #code>
            console.log('Hello there')
        </template>
        <template #output>
            <dokki-output>
                Hello there.
            </dokki-output>
        </template>
        ">
    </dokki-code>
    <dokki-code>
        <template #code>
            console.log('Hello there')
        </template>
        <template #output>
            <dokki-output>
                Hello there.
            </dokki-output>
        </template>
    </dokki-code>
</x-example>

## HTML attributes

### code

If the **#code** template isn't provided, the value of this attribute
(a string) will be used in place of the template to populate the \<dokki-code\>
element's code listing.

You might generally use this attribute instead of the **#code** template
if your code string includes characters that cause problems with HTML parsers, like
&lt;&gt; brackets.

### expanded

If present, the \<dokki-code\> element's code listing will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-code\> element to be dispayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-example>
    <dokki-code headerless
        code="
        <dokki-code headerless>
            <template #code>
                const x = 1;
            </template>
        </dokki-code>
        ">
    </dokki-code>
    <dokki-code headerless>
        <template #code>
            const x = 1;
        </template>
    </dokki-code>
</x-example>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-code\>
element's class list.

### syntax

Identifies the language of the \<dokki-code\> element's code, using one of
[the language aliases of highlight.js](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)
(e.g. "javascript" for JavaScript, "x86asm" for x86 assembly).

If this attribute is set, the HTML document includes highlight.js, and highlight.js
is configured to include support for the given language alias, the \<dokki-code\>
element's code will be parsed for syntax and you can apply custom CSS to the
various syntactic classes (e.g. "hljs-string").

</api-reference>
