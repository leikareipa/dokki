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
    padding: 1.5rem;
    padding-top: 0.5rem;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);
    border-radius: var(--dokkiCSS-embedded-border-radius);
    flex-wrap: wrap;
    overflow: auto;

    @media only screen and (max-width: 1500px)
    {
        border-bottom: none;
        background-color: var(--dokkiCSS-page-primary-bg-color);
        border-radius: 0;
    }
    
    body[data-dokki-layout^="vertical"] &
    {
        padding: 2rem;
        padding-top: 1rem;
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
        color: var(--dokkiCSS-page-link-color);

        body[data-dokki-layout^="vertical"] &
        {
            font-size: 90%;
        }

        .dokki-user-widget
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

            .widget-icon
            {
                margin-right: 0.5em;
            }

            &.clickable
            {
                cursor: pointer;
                
                &:hover
                {
                    color: var(--dokkiCSS-page-secondary-fg-color) !important;
                }
            }
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
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
