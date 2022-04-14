<template>
    <div
        class="dokki0-page-load-progress-bar"
        :class="{progressing: (!hasFinishedLoading && (progressPercent > 0))}"
        :style="{
            width: `${hasFinishedLoading? 100 : progressPercent}%`,
        }">
    </div>
</template>

<style lang="scss">
.dokki0-page-load-progress-bar
{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--dokkiCSS-page-link-color);
    opacity: 0;
    pointer-events: none;
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

<api-reference>
<p>TODO</p>
</api-reference>
