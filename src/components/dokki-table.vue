/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-table"
    :has-content="hasContent"
    icon="fas fa-table"
    title="Table">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content v-if="hasContent">

        <table>

            <slot name="table"/>

        </table>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-table
{
    & > .dokki0-animated-expander > .content
    {
        overflow: auto;
        padding: 0;
    }

    &.headerless,
    &:not(.headerless) > .dokki0-animated-expander > .content
    {
        border: 1px solid var(--dokkiCSS-page-primary-line-color);
    }

    .aside-caption
    {
        display: none;
    }

    table
    {
        width: 100%;
        padding: 0;
        border-style: hidden;
        border-collapse: collapse;

        td,
        th
        {
            padding: 9px;
            border: none;
            white-space: nowrap;
            text-align: left;
            vertical-align: baseline;
            border: 1px solid var(--dokkiCSS-page-primary-line-color);

            &:last-child
            {
                width: 100%;
                white-space: normal;
            }
        }

        th
        {
            font-weight: var(--dokkiCSS-bold-text-weight);
        }
    }
}
</style>

<script>
export default {
    computed: {
        hasContent()
        {
            return (typeof this.$slots["table"] === "function");
        },
    },
}
</script>

<api-reference lang="md">
A dokki wapper for the standard \<table\> element, providing the features of \<table\>
with certain dokki-specific extensions.

## Samples

<dokki-table>
    <template #caption>
        Releases
    </template>
    <template #table>
        <tr>
            <th>Name</th>
            <th>Year</th>
        </tr>
        <tr>
            <td>Кров у наших криницях</td>
            <td>2006<sup>*</sup></td>
        </tr>
        <tr>
            <td>Відчуженість</td>
            <td>2007</td>
        </tr>
        <tr>
            <td colspan="2">
                <sup>*</sup>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
        </tr>
    </template>
</dokki-table>

<dokki-table headerless>
    <template #caption>
        Releases
    </template>
    <template #table>
        <tr>
            <th>Name</th>
            <th>Year</th>
        </tr>
        <tr>
            <td>Кров у наших криницях</td>
            <td>2006<sup>*</sup></td>
        </tr>
        <tr>
            <td>Відчуженість</td>
            <td>2007</td>
        </tr>
        <tr>
            <td colspan="2">
                <sup>*</sup>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </td>
        </tr>
    </template>
</dokki-table>

## HTML syntax

    <dokki-table expanded headerless inline-class>

        <template #caption>
        </template>

        <template #table>
        </template>

    </dokki-table>

</dokki-code>

## HTML templates

### #caption

The template's children will be displayed as the \<dokki-table\> element's caption.

<x-example>
    <dokki-code headerless code="
        <dokki-table>
            <template #caption>
                Hello there
            </template>
        </dokki-table>
        ">
    </dokki-code>
    <dokki-table>
        <template #caption>
            Hello there
        </template>
    </dokki-table>
</x-example>

### #table <x-required></x-required>

The template's children will be placed inside \<table\>\</table\> tags and displayed
as the \<dokki-table\> element's table.

<x-example>
    <dokki-code headerless code="
        <dokki-table>
            <template #table>
                <tr>
                    <th>First</th>
                    <th>Second</th>
                </tr>
                <tr>
                    <td>Hello</td>
                    <td>there</td>
                </tr>
            </template>
        </dokki-table>
        ">
    </dokki-code>
    <dokki-table>
        <template #table>
            <tr>
                <th>First</th>
                <th>Second</th>
            </tr>
            <tr>
                <td>Hello</td>
                <td>there</td>
            </tr>
        </template>
    </dokki-table>
</x-example>

## HTML attributes

### expanded

If present, the \<dokki-table\> element's code listing will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-table\> element to be dispayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-example>
    <dokki-code headerless
        code="
        <dokki-table headerless>
            <template #table>
                <tr>
                    <td>Hello</td>
                    <td>there</td>
                </tr>
            </template>
        </dokki-table>
        ">
    </dokki-code>
    <dokki-table headerless>
        <template #table>
            <tr>
                <td>Hello</td>
                <td>there</td>
            </tr>
        </template>
    </dokki-table>
</x-example>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-table\>
element's class list.
</api-reference>
