/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <aside class="dokki0-expansion-indicator" :class="{
        'maximized': isExpanded,
        'minimized': !isExpanded,
        'transitioning': isTransitioning,
    }">

        <i class="icon fas fa-chevron-down"/>

    </aside>
</template>

<style lang="scss">
.dokki0-expansion-indicator
{
    color: var(--dokkiCSS-page-link-color);
    display: inline-block;
    font-weight: var(--dokkiCSS-bold-text-weight);
    text-transform: uppercase;
    white-space: nowrap;

    .icon
    {
        transition: transform 0.15s ease-out;
    }

    &.minimized .icon,
    &.maximized.transitioning .icon
    {
        transform: rotateX(0deg);
    }

    &.maximized .icon,
    &.minimized.transitioning .icon
    {
        transform: rotateX(180deg);
    }
} 
</style>

<script>
export default {
    props: {
        isExpanded: {required: true, type: Boolean},
        isTransitioning: {required: true, type: Boolean},
    },
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
