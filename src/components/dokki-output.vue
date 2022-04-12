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
    :class="{'dokkiCSS-unpadded': isUnpadded}">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <div class="dokkiCSS-wrapper">

            <slot/>

        </div>

    </template>

</dokki0-embedded-expandable>
</template>

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
