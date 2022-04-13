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

<style lang="scss">
.dokki0-expansion-indicator
{
    color: var(--dokkiCSS-page-link-color);
    display: inline-block;
    margin-left: auto;
    font-weight: var(--dokkiCSS-bold-text-weight);
    font-size: 80%;
    text-transform: uppercase;
    white-space: nowrap;

    :first-child
    {
        margin-left: 1ch;
    }
} 
</style>

<script>
export default {
    props: {
        isExpanded: {required: true, type: Boolean},
    },
}
</script>
