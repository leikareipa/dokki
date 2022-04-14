/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokki-warning">

    <header>
        <i class="fas fa-exclamation-triangle"/>
        &nbsp;Warning
    </header>
    
    <footer class="dokkiCSS-vertical-collapse">
        <slot/>
    </footer>

</p>
</template>

<style lang="scss">
.dokki-warning
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

<api-reference>
<p>
    Displays its child contents alongside a cautionary label.
</p>

<h2>Attributes</h2>

<p>
    None.
</p>

<h2>Examples</h2>
<dokki-code headerless
            code="
            <dokki-warning>
                <dokki-lorem></dokki-lorem>
                <dokki-lorem></dokki-lorem>
            </dokki-warning>
            ">

    <dokki-output>
        <dokki-warning>
            <dokki-lorem></dokki-lorem>
            <dokki-lorem></dokki-lorem>
        </dokki-warning>
    </dokki-output>

</dokki-code>

<dokki-code headerless
            code="
            <dokki-warning>
                <p style='filter: blur(4px);'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </dokki-warning>
            ">

    <dokki-output>
        <dokki-warning>
            <p style='filter: blur(4px);'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </dokki-warning>
    </dokki-output>

</dokki-code>
</api-reference>
