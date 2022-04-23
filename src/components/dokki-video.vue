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

<api-reference lang="md">
Displays a video from YouTube.

## Samples

<dokki-video src="Pjx1B7Kt9xs">
    <template #caption>
        Shitty MS-DOS Games
    </template>
</dokki-video>

<dokki-video plain src="Pjx1B7Kt9xs">
    <template #caption>
        Shitty MS-DOS Games
    </template>
</dokki-video>

## Markup

    <dokki-video expanded headerless inline-class src>

        <template #caption>
        </template>

    </dokki-video>

## Templates

### #caption

The template's children will be displayed as the \<dokki-video\> element's caption.

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

## Attributes

### expanded

If present, the \<dokki-video\> element's video container will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-video\> element to be displayed without its caption.

Setting this attribute will implicitly set the **expanded** attributeas well.

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

### inline-class

The class name(s) given in this string will be appended to the \<dokki-video\>
element's class list.

### src <x-required></x-required>

The video's YouTube ID.

For example, if the video's URL is "youtube.com/watch?v=Pjx1B7Kt9xs", the ID would
be "Pjx1B7Kt9xs".
</api-reference>
