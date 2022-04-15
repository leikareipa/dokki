/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokki-area dokkiCSS-vertical-collapse"
   :class="inlineClass">
    <slot/>
</p>
</template>

<style lang="scss">
.dokki-area
{
    width: 100%;
    box-sizing: border-box;
    padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    background-color: var(--dokkiCSS-embedded-auxiliary-color);
    border-radius: var(--dokkiCSS-embedded-border-radius);
}
</style>

<script>
export default {
    props: {
        inlineClass: {type: String, default: ""}
    }
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
