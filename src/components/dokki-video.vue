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
