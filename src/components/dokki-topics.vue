/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-hash-router/>

<main class="dokki-topics" :class="{'hidden': !areTopicsReady}">

    <slot/>

</main>
</template>

<style lang="scss">
.dokki-topics
{
    padding-bottom: calc(100vh - var(--dokkiCSS-header-height));
    width: var(--dokkiCSS-topics-container-width);
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    position: relative;
    left: calc(var(--dokkiCSS-document-horizontal-left-start) + var(--dokkiCSS-side-panel-width));
    top: var(--dokkiCSS-header-height);
    z-index: 1;
    box-sizing: border-box;

    &.hidden
    {
        opacity: 0;
        pointer-events: none;
    }

    body[data-dokki-layout^="vertical"] &
    {
        left: var(--dokkiCSS-document-horizontal-left-start);
        padding-left: var(--dokkiCSS-header-bottom-margin);
        padding-right: var(--dokkiCSS-header-bottom-margin);
        padding-bottom: 16px;
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        left: var(--dokkiCSS-document-horizontal-left-start);
        border: none;
        border-radius: 0;

        h1
        {
            font-size: 155%;
            font-weight: normal;
        }

        h2
        {
            font-size: 130%;
            font-weight: normal;
        }
    }
}
</style>

<script>
export default {
    computed: {
        areTopicsReady() {
            return this.$store.state.areTopicsReady;
        }
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
