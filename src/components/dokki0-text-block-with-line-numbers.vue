/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <table class="dokki0-text-block-with-line-numbers">

        <tr v-for="(line, lineNum) in formattedText"
            class="line">

            <td class="number">
                {{lineNum+1}}
            </td>
            
            <td class="content">
                <code :class="(syntax !== undefined)? `language-${syntax}` : 'unspecified-syntax'">
                    {{line}}
                </code>
            </td>
            
        </tr>

    </table>
</template>

<style lang="scss">
.dokki0-text-block-with-line-numbers
{
    width: 100%;
    white-space: pre;
    border-collapse: collapse;
    line-height: var(--dokkiCSS-content-line-height);

    .line
    {
        height: 1em;
        font-size: var(--dokkiCSS-monospace-font-size);
        font-family: var(--dokkiCSS-monospace-font-family);
        font-variant-ligatures: none;

        .number
        {
            color: var(--dokkiCSS-page-secondary-fg-color);
            user-select: none;
            width: 1ch; /* Shrink to minimum width required by the widest line number <td>.*/
            padding: 0;
            white-space: normal;
            padding-right: 1.75ch;
            text-align: right;
        }
    }
}
</style>

<script>
export default {
    props: {
        text: {},
        syntax: {default: undefined},
    },
    mounted()
    {
        this.$nextTick(()=>
        {
            if (this.is_syntax_highlighting_enabled())
            {
                const codeElements = this.$el.querySelectorAll(".line code");

                for (const element of codeElements)
                {
                    hljs.highlightElement(element);
                }
            }
        });
    },
    computed: {
        formattedText()
        {
            if (!this.text) {
                return "";
            }

            let lines = this.text.split("\n");

            // Remove empty lines off the front.
            while (lines.length && !lines[0].trim().length)
            {
                lines.shift();
            }

            if (!lines.length)
            {
                return [];
            }

            const numPreSpaces = Math.max(0, lines[0].search(/\S/));
            for (let i = 0; i < lines.length; i++)
            {
                lines[i] = lines[i].slice(numPreSpaces);
                lines[i] = lines[i].replace(/``/g, "\"");
                lines[i] = lines[i].replace(/\\\\/g, "\\");
            }

            // Remove empty lines off the back.
            while (lines.length && !lines[lines.length-1].trim().length)
            {
                lines.pop();
            }

            return lines;
        }
    },
    methods: {
        // Returns true if the highlight.js syntax-highlighting library is
        // available for use; false otherwise.
        is_highlight_js_available()
        {
            return ((typeof hljs == "object") &&
                    (typeof hljs.highlightElement == "function"));
        },
        is_syntax_highlighting_enabled()
        {
            return ((this.$props.syntax !== undefined) &&
                    this.is_highlight_js_available());
        },
    },
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
