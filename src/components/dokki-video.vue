/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-video"
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
        src: {},
        platform: {default: "youtube"},
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
