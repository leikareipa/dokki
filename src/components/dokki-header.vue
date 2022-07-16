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
    gap: 0 1.85rem;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: var(--dokkiCSS-bold-text-weight);
    padding: 1rem;
    border-bottom: 1px solid var(--dokkiCSS-page-primary-line-color);
    background-color: var(--dokkiCSS-page-secondary-bg-color);
    flex-wrap: wrap;
    margin-top: -1rem !important;
    overflow: auto;

    @media only screen and (max-width: 1500px)
    {
        border-bottom: none;
    }
    
    body[data-dokki-layout^="vertical"] &
    {
        padding: 2rem;
    }

    .title
    {
        margin-top: 1rem;
        padding-right: 1.85rem;
        margin-right: auto;
        font-size: 105%;
    }

    .widgets
    {
        gap: 1rem 1.5rem;
        margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        font-weight: normal;
        color: var(--dokkiCSS-page-inert-fg-color);
        font-size: 95%;

        body[data-dokki-layout^="vertical"] &
        {
            font-size: 90%;
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
            align-items: baseline;
            white-space: nowrap;
        }

        .dokki-user-element > i
        {
            font-size: 0.875em;
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
