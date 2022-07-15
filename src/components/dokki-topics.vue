/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-hash-router/>

<div class="container">

    <dokki0-toolbar/>

    <main class="dokki-topics" :class="{'skeletonized': !areTopicsReady}">

        <slot/>

    </main>

</div>
</template>

<style scoped lang="scss">
.container
{
    display: flex;
    position: relative;
    flex: 1;
}
</style>

<style lang="scss">
.dokki-topics
{
    top: 0;
    padding-bottom: 100vh;
    width: calc(100% - var(--dokkiCSS-side-panel-width));
    max-width: var(--dokkiCSS-topics-container-max-width);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    flex: 1;

    &.skeletonized
    {
        padding-bottom: var(--dokkiCSS-topic-bottom-margin);

        .dokki-topic:not(.skeleton)
        {
            display: none;
            pointer-events: none;
        }

        .dokki-tag-filter
        {
            display: none;
        }
    }

    &:not(.skeletonized)
    {
        .dokki-topic.skeleton
        {
            display: none !important;
        }
    }

    body[data-dokki-layout^="vertical"] &
    {
        padding-left: var(--dokkiCSS-header-bottom-margin);
        padding-right: var(--dokkiCSS-header-bottom-margin);
        padding-bottom: 16px;
        position: unset;
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        border: none;
        border-radius: 0;
    }
}
</style>

<script>
export default {
    computed: {
        areTopicsReady() {
            return this.$store.state.areTopicsReady;
        },
    },
    watch: {
        areTopicsReady(are) {
            if (are) {
                this.$nextTick(()=>window.dispatchEvent(new CustomEvent("dokki-topics-ready")));
            }
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
