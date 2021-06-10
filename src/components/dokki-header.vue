/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <header class="dokki-header">

        <div class="dokkiCSS-header-container">

            <span class="dokkiCSS-header-title"
                    :title="title">

                <i :class="icon"/>
                {{title}}

            </span>

            <dokki-theme-selector/>

        </div>

    </header>
</template>

<script>
export default {
    props: {
        icon: {default: "fas fa-book"},
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
