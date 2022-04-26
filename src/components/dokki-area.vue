/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokki-area"
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

<api-reference lang="md">
A visually emphasized region for embedding content (e.g. a quote).

## Samples

<dokki-area>
    <p>Fortune favours the bold.</p>
    <p>&ndash; Virgil</p>
</dokki-area>

<dokki-area>
    <p>Area not nested</p>
    <dokki-area>
        Area nested 1x
    </dokki-area>
    <dokki-area>
        <dokki-area>
            Area nested 2x
        </dokki-area>
    </dokki-area>
</dokki-area>

## Markdown

    <dokki-area>
    </dokki-area>
</api-reference>
