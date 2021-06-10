/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokki-product-name">
        {{productName}}
    </span>
    <slot/>
</template>

<script>
export default {
    computed: {
        productName()
        {
            return this.$store.state.productName;
        }
    },
}
</script>
