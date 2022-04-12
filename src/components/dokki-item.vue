/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <h3>{{this.title}}</h3>
    <slot/>
</template>

<script>
export default {
    props: {
        title: {required: true, type: String},
    }
}
</script>
