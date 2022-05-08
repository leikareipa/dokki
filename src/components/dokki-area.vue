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
A visually emphasized region for highlighting content.

## Samples

<dokki-area>
    <p>Fortune favours the bold.</p>
    <p>&ndash; Virgil</p>
</dokki-area>

<dokki-area>
    <dokki-area>
        <dokki-area>
            <p>Nested 2x</p>
        </dokki-area>
        <p>Nested 1x</p>
    </dokki-area>
    <p>No nesting</p>
</dokki-area>

## Markdown syntax

You can produce a \<dokki-area\> element in Markdown by prefixing its intended content
with the > symbol, as shown below:

<x-example>
    <dokki-code headerless>
        <template #code>
            <pre>
                > Lorem ipsum dolor sit amet,
                > consectetur
                >> ...
            </pre>
        </template>
    </dokki-code>
    <dokki-area>
        Lorem ipsum dolor sit amet,<br/>
        consectetur ...
        <dokki-area>
            ...
        </dokki-area>
    </dokki-area>
</x-example>

Text prefixed with the > symbol directly preceding a dokki element (defined using
either HTML or Markdown syntax) will be shown as the element's caption:

<x-example>
    <dokki-code headerless code="
        > Secret information
        <dokki-spoiler>
        </dokki-spoiler>
    ">
    </dokki-code>
    <dokki-spoiler>
        <template #caption>
            Secret information
        </template>
    </dokki-spoiler>
</x-example>

## HTML syntax

    <dokki-area>
    </dokki-area>
</api-reference>
