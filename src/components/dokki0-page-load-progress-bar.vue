<template>
    <div
        class="dokki0-page-load-progress-bar"
        :class="{
            'progressing': (!hasFinishedLoading && (progressPercent > 0)),
            'finished': hasFinishedLoading,
        }"
        :style="{
            width: `${hasFinishedLoading? 100 : progressPercent}%`,
        }">
    </div>
</template>

<style lang="scss">
.dokki0-page-load-progress-bar
{
    position: fixed;
    z-index: 9999999;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--dokkiCSS-page-link-color);
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease-out, width 0.1s linear;
     
    &.finished
    {
        opacity: 0;
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
