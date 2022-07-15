/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<header class="dokki-header">

    <dokki0-page-load-progress-bar/>

    <div class="title">

        <slot name="caption"/>
    
    </div>

    <div class="widgets" ref="widgets">

        <dokki0-theme-selector/>

        <slot name="widgets"/>

    </div>

</header>
</template>

<style lang="scss">
.dokki-header
{
    gap: 0 1.85em;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: var(--dokkiCSS-bold-text-weight);
    padding: 1em;
    border-bottom: 1px solid var(--dokkiCSS-page-primary-line-color);
    background-color: var(--dokkiCSS-page-secondary-bg-color);
    flex-wrap: wrap;
    margin-top: -1em !important;

    @media only screen and (max-width: 1500px)
    {
        border-bottom: none;
    }

    .title
    {
        margin-top: 1em;
        padding-right: 1.85em;
        margin-right: auto;
        font-size: 105%;
    }

    .widgets
    {
        gap: 1em 1.85em;
        margin-top: 1em;
        display: flex;
        flex-wrap: wrap;
        font-weight: normal;
        color: var(--dokkiCSS-page-inert-fg-color);

        body[data-dokki-layout="vertical-narrow"] &
        {
            margin-bottom: 0.5em;
        }

        .dokki-user-element
        {
            align-items: center;
            margin: 0;
            text-align: left;
            position: relative;
            text-overflow: ellipsis;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            white-space: nowrap;
        }

        *:first-letter
        {
            text-transform: uppercase;
        }

        .dokki-user-element.clickable
        {
            cursor: pointer;
        }

        .dokki-user-element.clickable:hover
        {
            color: var(--dokkiCSS-page-primary-fg-color) !important;
        }
    }

    .hamburger-icon
    {
        margin-left: auto;
    }
}
</style>

<script>
export default {
    computed: {
        caption() {
            return (
                this.$slots["caption"]?.()[0]?.children ||
                "Untitled document"
            );
        },
    },
    mounted() {
        document.title = this.caption;

        const widgetEls = (this.$refs["widgets"]?.children || []);
        for (let i = 0; i < widgetEls.length; i++)
        {
            const el = widgetEls[i];
            el.style.zIndex = `${widgetEls.length-i}`;
            el.classList.add("dokki-user-element");
            if (el.tagName === "A") {
                el.classList.add("clickable");
            }
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
