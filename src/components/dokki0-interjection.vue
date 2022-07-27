/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokki0-interjection dokkiCSS-embedded"
   :class="{
       [inlineClass]: true,
       [className]: true,
   }"
>

    <header>

        <i :class="icon"/>

        &nbsp;{{title}}

    </header>

    <footer>

        <slot/>

    </footer>

</p>
</template>

<style lang="scss">
.dokki0-interjection
{
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);
    border: none;
    border-radius: var(--dokkiCSS-embedded-border-radius);
    margin: 20px 0;
    box-shadow: -10px 0px 0px currentColor;

    /* Any element placed directly to the left of the interjection (e.g. a table's border
       when the interjection is inside a table cell, or a bullet when the interjection is
       part of a list) may cause visual inconsistencies with the interjection's left
       box-shadow border, so let's use a regular border in those cases.*/
    table &,
    ul &,
    ol &
    {
        box-shadow: none;
        border-left: 10px solid
    }

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
        title: {required: true, type: String},
        icon: {required: true, type: String},
        className: {required: true, type: String},
        inlineClass: {type: String, default: ""},
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
