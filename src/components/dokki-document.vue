/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<article class="dokki-document">

    <slot/>

</article>
</template>

<style lang="scss">
.dokki-document
{
    width: calc(var(--dokkiCSS-topics-container-max-width) + var(--dokkiCSS-side-panel-width));
    max-width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    body[data-dokki-layout="horizontal-wide"] &
    {
        left: calc(50% - var(--dokkiCSS-side-panel-width)*0.5);
        transform: translateX(-50%);
    }

    body[data-dokki-layout="horizontal"] &
    {
        left: 0;
        transform: none;
    }
}
</style>

<api-reference lang="md">
TODO
</api-reference>
