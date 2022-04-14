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
            background-color: var(--dokkiCSS-embedded-header-bg-color);
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
    A wapper for the standard <i>table</i>.
</p>

<p>
    The table's contents will be hidden until the user clicks the header of the
    <i>dokki-table</i> element.
</p>

<h2>Attributes</h2>

<h3>expanded</h3>
<p>
    If present, the table's contents will be visible by default rather than requiring
    the user to reveal it manually.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>headerless</h3>
<p>
    If present, causes the <i>dokki-table</i> element's header to not be displayed.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h2>Examples</h2>

<dokki-code headerless
            code="
            <dokki-table>
                <template #caption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit 
                </template>

                <template #table>
                    <table>
                        <tr>
                            <th>One</th>
                            <th>Two</th>
                            <th>Three</th>
                        </tr>
                        <tr>
                            <td>1st</td>
                            <td>2nd</td>
                            <td>3rd</td>
                        </tr>
                        <tr>
                            <td>1nd</td>
                            <td>2rd</td>
                            <td>3st</td>
                        </tr>
                    </table>
                </template>
            </dokki-table>
            ">

    <dokki-output>
        <dokki-table>
            <template #caption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit 
            </template>

            <template #table>
                <table>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                        <th>Three</th>
                    </tr>
                    <tr>
                        <td>1st</td>
                        <td>2nd</td>
                        <td>3rd</td>
                    </tr>
                    <tr>
                        <td>1nd</td>
                        <td>2rd</td>
                        <td>3st</td>
                    </tr>
                </table>
            </template>
        </dokki-table>
    </dokki-output>

</dokki-code>
</api-reference>
