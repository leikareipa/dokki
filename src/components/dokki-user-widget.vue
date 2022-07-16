/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<span class="dokki-user-widget" :class="{'clickable': isClickable}">

    <slot/>

</span>
</template>

<script>
export default {
    props: {
        clickable: {default: undefined},
    },
    computed: {
        isClickable() {
            return (this.$props.clickable !== undefined);
        },
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
