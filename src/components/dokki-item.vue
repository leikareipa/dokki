/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <h3 :id="id">{{this.title}}</h3>
    <slot/>
</template>

<script>
export default {
    props: {
        title: {required: true, type: String},
        id: {type: String, default: undefined}
    }
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
