/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-interjection
    class-name="dokki-tip"
    icon="fas fa-info-circle"
    title="Tip"
    :inline-class="inlineClass"
>
 
    <slot/>

</dokki0-interjection>
</template>

<script>
export default {
    props: {
        inlineClass: {type: String, default: ""},
    },
}
</script>

<api-reference lang="md">
Displays its contents as a tip to the reader.

## Samples

<dokki-tip>
    Keep that in mind.
</dokki-tip>

## HTML syntax

    <dokki-tip inline-class>
    </dokki-tip>

## HTML attributes

### inline-class

The class name(s) given in this string will be appended to the \<dokki-tip\> element's
class list.
</api-reference>
