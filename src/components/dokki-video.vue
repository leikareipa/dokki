/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-video"
    :has-content="Boolean(src)"
    :icon="headerIcon"
    title="Video"
    :class="platform">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <iframe :src="videoUrl" allow="fullscreen; autoplay;">
        </iframe>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-video
{
    display: flex;
    flex-direction: column;

    .dokkiCSS-container
    {
        padding: 0;
        min-height: 20px;
        display: flex;
        overflow: auto;
    }

    &.youtube
    {
        iframe
        {
            min-width: 100%;
            max-width: 100%;
            height: 450px;
            border: none;
        }

        .dokki0-animated-expander
        {
            max-height: 450px;
        }
    }
}
</style>

<script>
export default {
    props: {
        src: {type: String, default: undefined},
        platform: {type: String, default: "youtube"},
    },
    computed: {
        videoUrl()
        {
            switch (this.platform)
            {
                // Note: Only YouTube is supported at this time.
                default: return `https://www.youtube-nocookie.com/embed/${this.src}`;
            }
        },
        headerIcon()
        {
            switch (this.platform)
            {
                case "youtube": return "fab fa-youtube";
                default: return "fas fa-film";
            }
        }
    }
}
</script>

<api-reference>
    <p>
        Displays a video from YouTube.
    </p>

    <h2>Sample</h2>

        <dokki-video src="Pjx1B7Kt9xs">
            <template #caption>
                Shitty MS-DOS Games
            </template>
        </dokki-video>

   <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-video expanded headerless inline-class src>

                <template #caption>
                </template>

            </dokki-video>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-video</x-tag>
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

                    <dokki-video>
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-video>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-video>
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-video>

                </x-example>
            </x-examples>

    <h2>Attributes</h2>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-video</x-tag> element's video container will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-video</x-tag> element to be displayed without its
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
                        <dokki-video headerless src='...'>
                        </dokki-video>
                        ">
                    </dokki-code>

                    <dokki-video headerless src="Pjx1B7Kt9xs">
                    </dokki-video>

                </x-example>
            </x-examples>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-video</x-tag> element's class list.
            </p>

        <x-attr>src</x-attr>
        <x-required></x-required>

            <p>
                The video's YouTube ID.
            </p>
</api-reference>
