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
    &.headerless 
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
            padding: 8px;
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

<api-reference>
    <p>
        A dokki wapper for the standard <x-tag>table</x-tag> element.
    </p>

    <h2>Sample</h2>

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

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-table expanded headerless inline-class>

                <template #caption>
                </template>

                <template #table>
                </template>

            </dokki-table>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-table</x-tag>
                element's caption.
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
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

                    <dokki-code headerless
                        code="
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

        <x-templ>table</x-templ>
        <x-required></x-required>

            <p>
                The template's children will be displayed as the <x-tag>dokki-table</x-tag> element's
                table. Generally, the template should have one child: a standard <x-tag>table</x-tag>
                element, whose children define the table's contents.
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
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

    <h2>Attributes</h2>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-table</x-tag> element's code listing will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-table</x-tag> element to be dispayed without its
                caption.
            </p>

            <p>
                Setting this attribute will implicitly set the <x-attr>expanded</x-attr> attribute
                as well. 
            </p>

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

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-table</x-tag> element's class list.
            </p>
</api-reference>
