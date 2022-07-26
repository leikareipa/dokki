/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokki-warning"
   :class="{
       [inlineClass]: true,
   }">

    <header>

        <i class="fas fa-exclamation-triangle"/>

        &nbsp;Warning

    </header>
    
    <footer>

        <slot/>

    </footer>

</p>
</template>

<style lang="scss">
.dokki-warning
{
    color: firebrick;
    background-color: rgba(178, 34, 34, 0.1);
    display: flex;
    align-items: stretch;
    border: none;
    border-radius: var(--dokkiCSS-embedded-border-radius);
    margin: 20px 0;
    box-shadow: -10px 0px 0px currentColor;

    body[data-dokki-theme="dark"] &
    {
        color: salmon;
        background-color: var(--dokkiCSS-embedded-auxiliary-color);
    }

    footer,
    header
    {
        padding: 16px;
    }

    footer
    {
        line-height: var(--dokkiCSS-content-line-height);
    }

    header
    {
        position: relative;
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
