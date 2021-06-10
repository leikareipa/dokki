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
    props: ["title"],
}
</script>
