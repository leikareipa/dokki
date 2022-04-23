/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-table"
    :has-content="(typeof this.$slots['table'] === 'function')"
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

<style lang="scss">
.dokki0-embedded-expandable.dokki-table
{
    &:not(.plain).headerless
    {
        background-color: var(--dokkiCSS-page-inert-bg-color);
        border: 1px solid var(--dokkiCSS-page-primary-line-color);

        .dokkiCSS-container
        {
            border-top: none;
        }
    }

    .dokkiCSS-container
    {
        padding: 0;
        overflow: auto;
        border-top: 1px solid var(--dokkiCSS-page-primary-line-color);
    }

    table
    {
        width: 100%;
        border-spacing: 0;
        border-bottom: none;
        padding: 0;
        border-collapse: collapse;

        td,
        th
        {
            padding: 9px;
            border: none;
            white-space: nowrap;
            text-align: left;
            vertical-align: baseline;

            &:last-child
            {
                width: 100%;
            }

            &:not(:last-child)
            {
                border-right: 1px solid var(--dokkiCSS-page-primary-line-color);
            }
        }

        th
        {
            font-weight: var(--dokkiCSS-bold-text-weight);
        }

        tr
        {
            border-top: 1px solid var(--dokkiCSS-page-primary-line-color);
            border-bottom: 1px solid var(--dokkiCSS-page-primary-line-color);

            &:first-child
            {
                border-top: none;
            }

            &:last-child
            {
                border-bottom: none;
            }
        }
    }
}
</style>

<api-reference lang="md">
A dokki wapper for the standard \<table\> element, providing the features of \<table\>
with certain dokki-specific extensions.

## Samples

<dokki-table>
    <template #caption>
        Releases
    </template>
    <template #table>
        <table>
            <tr>
                <th>Name</th>
                <th>Year</th>
            </tr>
            <tr>
                <td>Кров у наших криницях</td>
                <td>2006</td>
            </tr>
            <tr>
                <td>Відчуженість</td>
                <td>2007</td>
            </tr>
        </table>
    </template>
</dokki-table>

<dokki-table plain>
    <template #caption>
        Releases
    </template>
    <template #table>
        <table>
            <tr>
                <th>Name</th>
                <th>Year</th>
            </tr>
            <tr>
                <td>Кров у наших криницях</td>
                <td>2006</td>
            </tr>
            <tr>
                <td>Відчуженість</td>
                <td>2007</td>
            </tr>
        </table>
    </template>
</dokki-table>

## Markup

    <dokki-table expanded headerless inline-class>

        <template #caption>
        </template>

        <template #table>
        </template>

    </dokki-table>

</dokki-code>

## Templates

### #caption

The template's children will be displayed as the \<dokki-table\> element's caption.

<x-examples>
    <x-example>
        <dokki-code headerless code="
            <template #caption>
                Hello there
            </template>
            ">
        </dokki-code>
        <dokki-table>
            <template #caption>
                Hello there
            </template>
        </dokki-table>
    </x-example>
    <x-example>
        <dokki-code headerless code="
            <template #caption>
                <span style='filter: blur(2px);'>Hello there</span>
            </template>
            ">
        </dokki-code>
        <dokki-table>
            <template #caption>
                <span style='filter: blur(2px);'>Hello there</span>
            </template>
        </dokki-table>
    </x-example>
</x-examples>

### #table <x-required></x-required>

The template's children will be displayed as the \<dokki-table\> element's table.
Generally, the template should have one child: a standard \<table\> element, whose
children define the table's contents.

<x-examples>
    <x-example>
        <dokki-code headerless code="
            <template #table>
                <table>
                    <tr>
                        <th>First</th>
                        <th>Second</th>
                    </tr>
                    <tr>
                        <td>Hello</td>
                        <td>there</td>
                    </tr>
                </table>
            </template>
            ">
        </dokki-code>
        <dokki-table>
            <template #table>
                <table>
                    <tr>
                        <th>First</th>
                        <th>Second</th>
                    </tr>
                    <tr>
                        <td>Hello</td>
                        <td>there</td>
                    </tr>
                </table>
            </template>
        </dokki-table>
    </x-example>
</x-examples>

## Attributes

### expanded

If present, the \<dokki-table\> element's code listing will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-table\> element to be dispayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-examples>
    <x-example>
        <dokki-code headerless
            code="
            <dokki-table headerless>
                <template #table>
                    <table>
                        <tr>
                            <td>Hello</td>
                            <td>there</td>
                        </tr>
                    </table>
                </template>
            </dokki-table>
            ">
        </dokki-code>
        <dokki-table headerless>
            <template #table>
                <table>
                    <tr>
                        <td>Hello</td>
                        <td>there</td>
                    </tr>
                </table>
            </template>
        </dokki-table>
    </x-example>
</x-examples>

### inline-class

The class name(s) given in this string will be appended to the \<dokki-table\>
element's class list.
</api-reference>
