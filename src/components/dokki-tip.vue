/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokki-tip"
   :class="{
       [inlineClass]: true,
   }">

    <header>
        <i class="fas fa-info-circle"/>
        &nbsp;Tip
    </header>

    <footer>
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
        padding: var(--dokkiCSS-embedded-header-padding);
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

<script>
export default {
    props: {
        inlineClass: {type: String, default: ""},
    },
}
</script>

<api-reference>
    <p>
        Displays its contents as a tip to the reader.
    </p>
    
    <h2>Sample</h2>

        <dokki-tip>
            Keep that in mind.
        </dokki-tip>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-tip inline-class>
            </dokki-tip>
            ">
        </dokki-code>

    <h2>Attributes</h2>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-tip</x-tag> element's class list.
            </p>
</api-reference>
