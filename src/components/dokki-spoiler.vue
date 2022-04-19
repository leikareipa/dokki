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
    :has-content="(typeof this.$slots['default'] === 'function')"
    icon="fas fa-asterisk"
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
        Displays its contents when the user expands the element.
    </p>

    <h2>Samples</h2>

        <dokki-spoiler>
            <template #caption>
                Secret information
            </template>

            <dokki-output unpadded>
                <template #caption>
                    Surveillance photo
                </template>
                
                <dokki-image
                    headerless
                    width="80"
                    height="45"
                    upscale-to-fit
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'>
                </dokki-image>
                
            </dokki-output>
        </dokki-spoiler>

        <dokki-spoiler plain>
            <template #caption>
                Secret information
            </template>

            <dokki-output unpadded>
                <template #caption>
                    Surveillance photo
                </template>
                
                <dokki-image
                    headerless
                    width="80"
                    height="45"
                    upscale-to-fit
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'>
                </dokki-image>
                
            </dokki-output>
        </dokki-spoiler>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-spoiler expanded headerless inline-class>

                <template #caption>
                </template>

            </dokki-spoiler>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-spoiler</x-tag>
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

                    <dokki-spoiler height="2em">
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-spoiler>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-spoiler height="2em">
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-spoiler>

                </x-example>
            </x-examples>
                
    <h2>Attributes</h2>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-spoiler</x-tag> element's content container will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-spoiler</x-tag> element to be displayed without its
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
                        <dokki-spoiler headerless>
                            Hello there.
                        </dokki-spoiler>
                        ">
                    </dokki-code>

                    <dokki-spoiler headerless>
                        Hello there.
                    </dokki-spoiler>

                </x-example>
            </x-examples>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-spoiler</x-tag> element's class list.
            </p>
</api-reference>
