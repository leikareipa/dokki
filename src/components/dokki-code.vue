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
