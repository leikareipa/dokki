/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<aside class="dokki-toolbar">

    <header>
            
        {{caption}}

    </header>

    <div class="widgets" ref="widgets">

        <dokki0-theme-selector/>

        <slot name="widgets"/>

    </div>

    <dokki0-table-of-contents v-if="areTopicsReady"/>

</aside>
</template>

<style lang="scss">
.dokki-toolbar
{
    box-sizing: border-box;
    position: fixed;
    z-index: 3;
    left: 0;
    width: var(--dokkiCSS-side-panel-width);
    text-align: left;
    overflow-y: auto;
    height: 100%;
    border-right: 1px solid var(--dokkiCSS-page-secondary-line-color);
    background-color: var(--dokkiCSS-page-inert-bg-color);
    color: var(--dokkiCSS-page-secondary-fg-color);

    header
    {
        position: relative;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        line-height: var(--dokkiCSS-content-line-height);
        font-weight: var(--dokkiCSS-bold-text-weight);
    }

    .widgets
    {
        border-top: 1px solid var(--dokkiCSS-page-secondary-line-color);
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
        padding: 10px 0;

        .dokki-user-element
        {
            align-items: center;
            margin: 0;
            padding: 12px 20px;
            text-align: left;
            position: relative;
            text-overflow: ellipsis;
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }

        .dokki-user-element.clickable
        {
            cursor: pointer;
        }

        .dokki-user-element.clickable:hover
        {
            background-color: var(--dokkiCSS-embedded-auxiliary-color);
        }
    }

    body[data-dokki-layout^="vertical"] &
    {
        width: 100%;
        height: unset;
        position: relative;
        box-sizing: border-box;
        border: none;
        z-index: 0;

        .widgets,
        .dokki0-table-of-contents
        {
            display: none;
        }
    }
}
</style>

<script>
export default {
    computed: {
        areTopicsReady() {
            return this.$store.state.areTopicsReady;
        },
        caption() {
            return (
                this.$slots["caption"]?.()[0]?.children ||
                "Untitled document"
            );
        },
    },
    created() {
        document.title = this.caption;
    },
    mounted() {
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
