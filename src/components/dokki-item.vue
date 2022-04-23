/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <h3 :id="id"><slot/></h3>
</template>

<script>
export default {
    props: {
        id: {type: String, default: undefined}
    }
}
</script>

<api-reference lang="md">
TODO
</api-reference>
