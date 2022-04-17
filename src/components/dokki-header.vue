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
    border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    top: 0;
    left: 0;
    z-index: 2;
    box-sizing: border-box;
    text-align: left;
    font-weight: normal;
    font-size: 100%;
    height: var(--dokkiCSS-header-height);
    position: fixed;
    width: 100%;
    background-color: var(--dokkiCSS-page-inert-bg-color);

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
        font-weight: 500;
        height: var(--dokkiCSS-header-height);
        line-height: var(--dokkiCSS-header-height);
    }

    body[data-dokki-layout^="vertical"] &
    {
        position: absolute;
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
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
        productName: {default: undefined},
        productVersion: {default: undefined},
    },
    beforeCreate()
    {
        document.title = this.title;
        this.$store.commit("set_product_name", this.productName);
        this.$store.commit("set_product_version", this.productVersion);
    },
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
