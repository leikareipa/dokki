/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <aside class="dokki0-expansion-indicator">
        <i class="fas" :class="{
            'fa-chevron-up': isExpanded,
            'fa-chevron-down': !isExpanded
            }"
        />
    </aside>
</template>

<script>
export default {
    props: {
        isExpanded: {required: true, type: Boolean},
    },
}
</script>
