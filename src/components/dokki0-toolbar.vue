/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<aside class="dokki-toolbar" :class="{'skeletonized': !areTopicsReady}">

    <dokki0-table-of-contents v-if="areTopicsReady"/>

</aside>
</template>

<style lang="scss">
.dokki-toolbar
{
    box-sizing: border-box;
    text-align: left;
    overflow-y: auto;
    height: 100vh;
    background-color: var(--dokkiCSS-page-secondary-bg-color);
    color: var(--dokkiCSS-page-secondary-fg-color);
    flex-basis: var(--dokkiCSS-side-panel-width);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;

    &.skeletonized
    {
        height: 0;
    }

    body[data-dokki-layout="horizontal-wide"] &
    {
        left: calc(50% - var(--dokkiCSS-topics-container-max-width)*0.5 - var(--dokkiCSS-side-panel-width));
    }

    body[data-dokki-layout^="vertical"] &
    {
        width: 100%;
        height: unset;
        position: relative;
        box-sizing: border-box;
        border: none;
        z-index: 0;

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
    methods: {
        update_height() {
            const headerEl = document.querySelector(".dokki-document > .dokki-header");
            const headerHeight = Math.max(0, headerEl.getBoundingClientRect().bottom);
            const viewportHeight = window.innerHeight;
            if (this.$el) {
                this.$el.style.height = `${viewportHeight - headerHeight}px`;
            }
        },
    },
    created() {
        ["dokki-topics-ready", "scroll", "resize"].forEach(event=>{
            window.addEventListener(event, this.update_height);
        });
    },
    mounted() {
        this.update_height();
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
