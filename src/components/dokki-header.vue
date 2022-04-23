/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <header class="dokki-header">

        <div class="container">

            <span class="title" :title="title">

                {{title}}

            </span>

            <dokki-theme-selector/>

        </div>

        <dokki0-page-load-progress-bar>
        </dokki0-page-load-progress-bar>

    </header>
</template>

<style lang="scss">
.dokki-header
{
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    top: 0;
    left: 0;
    z-index: 4;
    box-sizing: border-box;
    text-align: left;
    font-weight: normal;
    font-size: 100%;
    height: var(--dokkiCSS-header-height);
    position: fixed;
    width: 100%;
    background-color: var(--dokkiCSS-page-inert-bg-color);
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

    .container
    {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0px 10px;
        box-sizing: border-box;

        & > * + *
        {
            margin-left: 10px;
        }
    }

    .title
    {
        flex: 1;
        overflow: auto;
        overflow-y: hidden;
        height: var(--dokkiCSS-header-height);
        line-height: var(--dokkiCSS-header-height);
    }

    body[data-dokki-layout^="vertical"] &
    {
        position: absolute;
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        box-shadow: none;

        .title
        {
            margin-left: 0;
        }

        .container
        {
            padding: 0px var(--dokkiCSS-topic-horizontal-padding);
        }
    }
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
