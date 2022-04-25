/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<header class="dokki-header">

    <span class="title" :title="title">
        {{title}}
    </span>

</header>
</template>

<style lang="scss">
.dokki-header
{
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    font-weight: var(--dokkiCSS-bold-text-weight);
    line-height: var(--dokkiCSS-content-line-height);
    border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
}

</style>

<script>
export default {
    props: {
        icon: {default: "fas fa-atlas"},
        title: {default: "Untitled"},
    },
    beforeCreate()
    {
        document.title = this.title;
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
