/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<a class="dokki-tag" @click="on_tag_clicked">
    <slot/>
</a>
</template>

<style lang="scss">
.dokki-tag
{
    display: inline-block;
    white-space: pre;
    cursor: pointer;
}
</style>

<script>
export default {
    methods: {
        tag_string() {
            return String(this.$el?.textContent || "Undefined");
        },
        on_tag_clicked() {
            window.dispatchEvent(new CustomEvent("dokki-tag-clicked", {detail: this.tag_string()}));
        },
    },
    mounted() {
        this.$store.commit("add_tag", this.tag_string());
    },
    unmounted() {
        this.$store.commit("remove_tag", this.tag_string());
    },
}
</script>
