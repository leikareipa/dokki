<template>
<aside
    class="dokki0-page-load-progress-bar"
    :class="{
        'progressing': (!hasFinishedLoading && (progressPercent > 0)),
    }"
    :style="{
        width: `${hasFinishedLoading? 100 : progressPercent}%`,
    }">
</aside>
</template>

<style lang="scss">
.dokki0-page-load-progress-bar
{
    position: absolute;
    z-index: 9999999;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: var(--dokkiCSS-page-link-color);
    border-bottom: 1px solid black;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s ease-out, width 0.1s linear;
     
    &.progressing
    {
        opacity: 1;
    }
}
</style>

<script>
export default {
    computed: {
        hasFinishedLoading() {
            return this.$store.state.areTopicsReady;
        },
        progressPercent() {
            return Math.floor(100 * ((this.$store.state.dokkiTopic.lifetimeCount - this.$store.state.dokkiTopic.revealQueue.length) / (this.$store.state.dokkiTopic.lifetimeCount || Infinity)));
        }
    }
}
</script>

<api-reference lang="md">
TODO
</api-reference>
