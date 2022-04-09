<template>
    <div
        class="dokki0-page-load-progress-bar"
        :class="{progressing: (!hasFinishedLoading && (progressPercent > 0))}"
        :style="{
            width: `${hasFinishedLoading? 100 : progressPercent}%`,
        }">
    </div>
</template>

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
