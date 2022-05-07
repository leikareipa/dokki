/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    :has-content="(typeof this.$slots['default'] === 'function')"
    icon="fas fa-asterisk"
    title="Spoiler"
>

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
</style>

<script>
export default {
    data() {
        return {
            isUnpadded: (this.$props.unpadded !== undefined),
        }
    }
}
</script>

<api-reference lang="md">
Displays its contents when the user expands the element.

## Samples

<dokki-spoiler>
    <template #caption>
        Secret information
    </template>
    Hello there.
</dokki-spoiler>

## HTML syntax

    <dokki-spoiler expanded headerless inline-class>

        <template #caption>
        </template>

    </dokki-spoiler>

## HTML templates

### #caption

The template's children will be displayed as the \<dokki-spoiler\> element's caption.

<x-example>
    <dokki-code headerless
        code="
        <dokki-spoiler>
            <template #caption>
                Hello there
            </template>
        </dokki-spoiler>
        ">
    </dokki-code>
    <dokki-spoiler>
        <template #caption>
            Hello there
        </template>
    </dokki-spoiler>
</x-example>
    
## HTML attributes

### expanded

If present, the \<dokki-spoiler\> element's content container will be visible
initially, rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-spoiler\> element to be displayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-example>
    <dokki-code headerless
        code="
        <dokki-spoiler headerless>
            Hello there.
        </dokki-spoiler>
        ">
    </dokki-code>
    <dokki-spoiler headerless>
        Hello there.
    </dokki-spoiler>
</x-example>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-spoiler\>
element's class list.
</api-reference>
