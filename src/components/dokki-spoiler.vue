/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    expands-to="dropdown"
    icon="fas fa-comment-dots"
    title="Spoiler"
    :class="{'dokkiCSS-unpadded': isUnpadded}">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
</style>

<script>
export default {
    props: {
        unpadded: {default: undefined},
    },
    data() {
        return {
            isUnpadded: (this.$props.unpadded !== undefined),
        }
    }
}
</script>

<api-reference>
<p>
    Displays its child contents when the user clicks on the element.
</p>

<h2>Attributes</h2>

<h3>title</h3>

<p>
    The title to be shown in the header of the <i>dokki-spoiler</i> element.
</p>

<h2>Examples</h2>
<dokki-code headerless
            code="
            <dokki-spoiler>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </dokki-spoiler>
            ">

    <dokki-output>
        <dokki-spoiler>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </dokki-spoiler>
    </dokki-output>

</dokki-code>
</api-reference>
