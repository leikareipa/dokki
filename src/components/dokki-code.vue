/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-code"
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

    <template #after>

        <slot v-if="this.$slots['output']" name="output"/>
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
    computed: {
        hasOutput()
        {
            return !!this.$slots.default;
        },
    },
}
</script>

<api-reference>
<p>
    Displays a source code listing, with optional syntax highlighting.
</p>

<h2>Attributes</h2>

<h3>code</h3>
<p>
    The source code can be given either inside a <i>template #code</i> element or
    via this attribute (see examples, below).
</p>

<p>
    Note: Inside this attribute, double quotes (") must be replaced with two
    backticks (``). They'll be converted automatically back into double quotes for display.
</p>

<h3>expanded</h3>
<p>
    If present, the code listing will be visible by default rather than requiring
    the user to reveal it manually.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>headerless</h3>
<p>
    If present, causes the <i>dokki-code</i> element's header to not be displayed.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>title</h3>
<p>
    The title to be shown in the header of the <i>dokki-code</i> element.
</p>

<h2>Examples</h2>

<p>
    The source code can be entered inside a <i>template #code</i> element:
</p>

<dokki-code headerless
            code="
            <dokki-code title='C'>
                <template #code>
                    <pre>
                        int main(void)
                        {
                            printf(``Hello there.\n``);
                            return 0;
                        }
                    </pre>
                </template>
            </dokki-code>
            ">

    <dokki-output>
        <dokki-code title='C'>
            <template #code>
                <pre>
                    int main(void)
                    {
                        printf("Hello there.\n");
                        return 0;
                    }
                </pre>
            </template>
        </dokki-code>
    </dokki-output>

</dokki-code>

<p>
    Notice that the above sample nests the code inside a <i>pre</i> element.
    This isn't required, but whitespace won't be preserved without it:
</p>

<dokki-code headerless
            code="
            <dokki-code title='C'>
                <template #code>
                    int main(void)
                    {
                        printf(``Hello there.\n``);
                        return 0;
                    }
                </template>
            </dokki-code>
            ">

    <dokki-output>
        <dokki-code title='C'>
            <template #code>
                int main(void)
                {
                    printf("Hello there.\n");
                    return 0;
                }
            </template>
        </dokki-code>
    </dokki-output>

</dokki-code>

<p>
    Embedding a <i>dokki-output</i> element lets you document the code's
    expected output:
</p>

<dokki-code headerless
            code="
            <dokki-code title='C'>
                <template #code>
                    <pre>
                        int main(void)
                        {
                            printf(``Hello there.\n``);
                            return 0;
                        }
                    </pre>
                </template>

                <dokki-output>
                    <samp>Hello there.</samp>
                </dokki-output>
            </dokki-code>
            ">

    <dokki-output>
        <dokki-code title='C'>
            <template #code>
                <pre>
                    int main(void)
                    {
                        printf(``Hello there.\n``);
                        return 0;
                    }
                </pre>
            </template>

            <dokki-output>
                <samp>Hello there.</samp>
            </dokki-output>
        </dokki-code>
    </dokki-output>

</dokki-code>

<p>
    Optionally, the code can be given as a string via the <b>output</b> attribute:
</p>

<dokki-code headerless
            code="
            <dokki-code title=``HTML``
                        code=``
                            <i class='fas fa-fw fa-hammer'></i>
                            <i class='fas fa-fw fa-screwdriver'></i>
                            <i class='fas fa-fw fa-wrench'></i>
                        ``>

                <dokki-output>
                    <i class='fas fa-fw fa-hammer'></i>
                    <i class='fas fa-fw fa-screwdriver'></i>
                    <i class='fas fa-fw fa-wrench'></i>
                </dokki-output>

            </dokki-code>
            ">

    <dokki-output>
        <dokki-code headerless
                    code="
                        <i class='fas fa-fw fa-hammer'></i>
                        <i class='fas fa-fw fa-screwdriver'></i>
                        <i class='fas fa-fw fa-wrench'></i>
                    ">

            <dokki-output>
                <i class='fas fa-fw fa-hammer'></i>
                <i class='fas fa-fw fa-screwdriver'></i>
                <i class='fas fa-fw fa-wrench'></i>
            </dokki-output>
            
        </dokki-code>
    </dokki-output>

</dokki-code>
</api-reference>
