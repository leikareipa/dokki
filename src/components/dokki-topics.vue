/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <dokki0-hash-router/>
    <main class="dokki-topics" :class="{'dokkiCSS-hidden': !areTopicsReady}">
        <slot/>
    </main>
</template>

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
                Vue.nextTick(()=>window.dispatchEvent(new CustomEvent("dokki-topics-ready")));
            }
        }
    },
}
</script>
