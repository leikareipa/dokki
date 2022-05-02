/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    title="Output"
    header-widget="frame"
>

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot v-if="this.$slots['output']" name="output"/>
        <slot v-else/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-output
{
    &.unpadded .content
    {
        border: none !important;
    }
}
</style>

<api-reference lang="md">
TODO

## Samples

<dokki-output>
    <template #output>
        Hello there.
    </template>
</dokki-output>
</api-reference>
