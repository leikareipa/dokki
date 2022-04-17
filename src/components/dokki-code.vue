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

        <dokki0-text-block-with-line-numbers
            :syntax="syntax"
            :text="codeFromSlot || code">
        </dokki0-text-block-with-line-numbers>

    </template>

    <template #after v-if="this.$slots['output'] || this.$slots['default']">

        <dokki-output v-if="this.$slots['output']">
            <slot name="output"/>
        </dokki-output>
        <slot v-else/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-code
{
    border: none;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);

    header
    {
        border-radius: var(--dokkiCSS-embedded-border-radius);
        border: 1px solid var(--dokkiCSS-page-primary-line-color);
        background-color: var(--dokkiCSS-page-primary-bg-color);
    }

    .dokki0-text-block-with-line-numbers > .line > .number
    {
        display: none;
    }

    &  > .dokki0-animated-expander > .dokkiCSS-container
    {
        overflow: auto;
        padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    }

    &.has-after
    {
        header
        {
            border-bottom: none;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        &:not(.headerless)
        {
            & > .dokki0-animated-expander > .dokkiCSS-container
            {
                box-shadow: inset 0 1px 0 var(--dokkiCSS-page-primary-line-color);
            }
        }

        & > .dokki-output
        {
            margin-top: 0;
            background: var(--dokkiCSS-page-inert-bg-color);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            overflow: hidden;

            header
            {
                border: none;
            }
        }
    }

    &.dokkiCSS-has-output
    {
        margin-bottom: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;

        header
        {
            border-bottom: none;
        }

        & + .dokki-output
        {
            margin-top: 0;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }

    &.dokkiCSS-has-output,
    &.dokkiCSS-expanded,
    &.dokkiCSS-transitioning
    {
        header
        {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
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
    data() {
        return {
            codeFromSlot: undefined,
        }
    },
    mounted()
    {
        if ((typeof this.$slots.code == "function"))
        {
            const codeElement = this.$slots.code()[0];
            if (codeElement)
            {
                this.codeFromSlot = codeElement.children;
            }
        }
    },
}
</script>

<api-reference>
    <p>
        Displays a source code snippet, with optional syntax highlighting and sample output.
    </p>

    <h2>Sample</h2>

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

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-code code expanded headerless inline-class syntax>

                <template #caption>
                </template>

                <template #code>
                </template>

                <template #output>
                </template>

            </dokki-code>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-code</x-tag>
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

                    <dokki-code>
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-code>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-code>
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-code>

                </x-example>
            </x-examples>

        <x-templ>code</x-templ>
        <x-required></x-required>

            <p>
                The textual contents of the template's children will be displayed as the
                <x-tag>dokki-code</x-tag> element's code.
            </p>

            <dokki-tip>
                <ul>
                    <li>
                        To preserve whitespace, wrap the children in a <x-tag>pre</x-tag> element.
                    </li>

                    <li>
                        If the code includes characters that clash with HTML parsers (e.g. &lt;&gt;
                        braces), pass it in via the <x-tag>dokki-code</x-tag> element's
                        <x-attr>code</x-attr> attribute instead.
                    </li>
                </ul>
            </dokki-tip>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <template #code>
                            <pre>
                                void main(void) {
                                    printf(``Hello there.\n``);
                                }
                            </pre>
                        </template>
                        ">
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
            </x-examples>

        <x-templ>output</x-templ>

            <p>
                The template's children will be displayed as the output of the <x-tag>dokki-code</x-tag>
                element's code, using <x-tag>dokki-output</x-tag> as a container.
            </p>

            <dokki-tip>
                If you want to customize the container element, replace the <x-templ>output</x-templ>
                template with a <x-tag>dokki-output</x-tag> element.
            </dokki-tip>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <template #output>
                            Hello there.
                        </template>
                        ">
                    </dokki-code>

                    <dokki-code>
                        <template #output>
                            Hello there.
                        </template>
                    </dokki-code>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-output>
                            <template #caption>Run it</template>
                            <template #output>Hello there.</template>
                        </dokki-output>
                        ">
                    </dokki-code>

                    <dokki-code>
                        <dokki-output>
                            <template #caption>Run it</template>
                            <template #output>Hello there.</template>
                        </dokki-output>
                    </dokki-code>

                </x-example>
            </x-examples>

    <h2>Attributes</h2>

        <x-attr>code</x-attr>

            <p>
                If the <x-templ>code</x-templ> template isn't provided, the value of this attribute
                (a string) will be used in place of the template to populate the <x-tag>dokki-code</x-tag>
                element's code listing.
            </p>

            <p>
                You might generally use this attribute instead of the <x-templ>code</x-templ> template
                if your code string includes characters that cause problems with HTML parses, like
                &lt;&gt; braces.
            </p>

            <dokki-warning>
                If you want to include double quote characters (") in your code string, you must
                represent them using two backticks (``). Dokki will convert double backticks into
                double quotes for display.
            </dokki-warning>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-code code=``console.log('Hello there')``>
                        </dokki-code>
                        ">
                    </dokki-code>

                    <dokki-code code="console.log('Hello there')">
                    </dokki-code>

                </x-example>
            </x-examples>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-code</x-tag> element's code listing will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-code</x-tag> element to be dispayed without its
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
            </x-examples>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-code</x-tag> element's class list.
            </p>

        <x-attr>syntax</x-attr>

            <p>
                Identifies the language of the <x-tag>dokki-code</x-tag> element's code, using the
                syntax types of <a href="https://highlightjs.org/">highlight.js</a> (e.g. "javascript"
                for JavaScript, "x86asm" for x86 assembly).
            </p>
            
            <p>
                If this attribute is set and the HTML document includes highlight.js, the
                <x-tag>dokki-code</x-tag> element's code will be parsed and segmented by syntax,
                and you can apply custom CSS to the various syntactic classes (e.g. "hljs-string").
            </p>
</api-reference>
