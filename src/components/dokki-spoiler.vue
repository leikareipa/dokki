/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <dokki-output :title="title">
        <slot/>
    </dokki-output>
</template>

<script>
export default {
    props: {
        title: {default: "Spoiler"},
    },
}
</script>
