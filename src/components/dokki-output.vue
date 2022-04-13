/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    icon="fas fa-chevron-right"
    title="Output"
    header-widget="frame"
    :class="{'unpadded': isUnpadded}">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-output
{
    &.unpadded
    {
        .dokkiCSS-container
        {
            padding: 0;

            & > .dokkiCSS-embedded.groupbox:not(.headerless):only-child
            {
                margin-top: 0.475em !important;
            }
        }
    }
}
</style>

<style scoped lang="scss">
.dokki-output.unpadded .wrapper
{
    padding: 0;
}
</style>

<script>
export default {
    props: {
        unpadded: {default: undefined},
    },
    data() {
        return {
            isUnpadded: (this.$props.unpadded !== undefined),
        }
    }
}
</script>
