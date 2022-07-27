/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokki-tip"
   :class="{
       [inlineClass]: true,
   }">

    <header>

        <i class="fas fa-info-circle"/>

        &nbsp;Tip

    </header>

    <footer>

        <slot/>

    </footer>

</p>
</template>

<style lang="scss">
.dokki-tip
{
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);
    border: none;
    border-radius: var(--dokkiCSS-embedded-border-radius);
    margin: 20px 0;
    box-shadow: -10px 0px 0px currentColor;

    footer,
    header
    {
        padding: 1em;
    }
    
    footer
    {
        line-height: var(--dokkiCSS-content-line-height);
    }

    header
    {
        line-height: var(--dokkiCSS-content-line-height);
        display: flex;
        align-items: baseline;
        font-weight: var(--dokkiCSS-bold-text-weight);
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        box-shadow: calc(-1 * var(--dokkiCSS-topic-vertical-padding)) 0px 0px currentColor;
        flex-direction: column;
        align-items: stretch;

        header
        {
            border: none;
            line-height: normal;
            padding-bottom: 0;
        }
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
