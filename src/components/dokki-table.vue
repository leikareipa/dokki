/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-table"
    icon="fas fa-table"
    title="Table">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot name="table"/>

    </template>

</dokki0-embedded-expandable>
</template>
