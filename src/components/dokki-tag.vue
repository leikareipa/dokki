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

<script>
export default {
    methods: {
        on_tag_clicked() {
            const tagName = String(this.$el?.textContent || "Undefined");
            window.dispatchEvent(new CustomEvent("dokki-tag-clicked", {detail: tagName}));
        },
    }
}
</script>
