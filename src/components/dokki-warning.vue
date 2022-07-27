/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-interjection
    class-name="dokki-warning"
    icon="fas fa-exclamation-triangle"
    title="Warning"
    :inline-class="inlineClass"
>
 
    <slot/>

</dokki0-interjection>
</template>

<style lang="scss">
.dokki0-interjection.dokki-warning
{
    color: firebrick;
    background-color: rgba(178, 34, 34, 0.1);

    body[data-dokki-theme="dark"] &
    {
        color: salmon;
        background-color: var(--dokkiCSS-embedded-auxiliary-color);
    }
}
</style>

<script>
export default {
    props: {
        inlineClass: {type: String, default: ""},
    },
}
</script>

<api-reference lang="md">
Displays its contents in a cautionary tone.

## Sample

<dokki-warning>
    This isn't recommended.
</dokki-warning>

## HTML syntax

    <dokki-warning inline-class>
    </dokki-warning>

## HTML attributes

### inline-class

The class name(s) given in this string will be appended to the \<dokki-warning\>
element's class list.
</api-reference>
