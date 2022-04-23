/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    expands-to="dropdown"
    :has-content="(typeof this.$slots['default'] === 'function')"
    icon="fas fa-asterisk"
    title="Spoiler"
    :class="{'dokkiCSS-unpadded': isUnpadded}">

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

<api-reference lang="md">
Displays its contents when the user expands the element.

## Samples

<dokki-spoiler>
    <template #caption>
        Secret information
    </template>
    <dokki-output unpadded>
        <template #caption>
            Surveillance photo
        </template>
        <dokki-image
            headerless
            width="80"
            height="45"
            upscale-to-fit
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'>
        </dokki-image>
    </dokki-output>
</dokki-spoiler>

<dokki-spoiler plain>
    <template #caption>
        Secret information
    </template>
    <dokki-output unpadded>
        <template #caption>
            Surveillance photo
        </template>
        <dokki-image
            headerless
            width="80"
            height="45"
            upscale-to-fit
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'>
        </dokki-image>
    </dokki-output>
</dokki-spoiler>

## Markup

    <dokki-spoiler expanded headerless inline-class>

        <template #caption>
        </template>

    </dokki-spoiler>

## Templates

### #caption

The template's children will be displayed as the \<dokki-spoiler\> element's caption.

<x-examples>
    <x-example>
        <dokki-code headerless
            code="
            <template #caption>
                Hello there
            </template>
            ">
        </dokki-code>
        <dokki-spoiler height="2em">
            <template #caption>
                Hello there
            </template>
        </dokki-spoiler>
    </x-example>
    <x-example>
        <dokki-code headerless
            code="
            <template #caption>
                <span style='filter: blur(2px);'>Hello there</span>
            </template>
            ">
        </dokki-code>
        <dokki-spoiler height="2em">
            <template #caption>
                <span style='filter: blur(2px);'>Hello there</span>
            </template>
        </dokki-spoiler>
    </x-example>
</x-examples>
    
## Attributes

### expanded

If present, the \<dokki-spoiler\> element's content container will be visible
initially, rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-spoiler\> element to be displayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-examples>
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
</x-examples>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-spoiler\>
element's class list.
</api-reference>
