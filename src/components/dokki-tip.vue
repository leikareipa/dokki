/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokki-tip">

    <header>
        <i class="fas fa-info-circle"/>
        &nbsp;Tip
    </header>

    <footer class="dokkiCSS-vertical-collapse">
        <slot/>
    </footer>

</p>
</template>

<style lang="scss">
.dokki-tip
{
    display: flex;
    align-items: stretch;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);
    border: none;
    border-radius: var(--dokkiCSS-embedded-border-radius);

    footer,
    header
    {
        padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    }
    
    footer
    {
        line-height: var(--dokkiCSS-content-line-height);
    }

    header
    {
        line-height: var(--dokkiCSS-content-line-height);
        display: flex;
        align-items: baseline;
        font-weight: var(--dokkiCSS-bold-text-weight);
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        flex-direction: column;
        align-items: stretch;

        header
        {
            border: none;
            line-height: normal;
            padding-bottom: 0;
        }
    }
}
</style>
