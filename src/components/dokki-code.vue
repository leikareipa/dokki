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
