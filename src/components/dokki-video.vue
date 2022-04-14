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

<api-reference>
<p>
    Displays a video from a given source.
</p>

<p>
    Right now, only YouTube embeds are supported.
</p>

<h2>Attributes</h2>

<h3>platform</h3> <strong>required</strong>
<p>
    Identifies the platform on which the video is hosted. Currently, only <em>"youtube"</em>
    is supported.
</p>

<h3>src</h3> <strong>required</strong>
<p>
    Identifies the video on the given platform.
</p>

<h3>expanded</h3>
<p>
    If present, the video will be visible by default rather than requiring
    the user to reveal it manually.
</p>

<h2>Examples</h2>

<dokki-code headerless
            code="
            <dokki-video platform='youtube' src='ZgWGmggi5Xo'>
                <template #caption>
                    Sriracha Mayoo + Curly Fries
                </template>
            </dokki-video>
            ">

    <dokki-output>
        <dokki-video platform='youtube' src='ZgWGmggi5Xo'>
            <template #caption>
                Sriracha Mayoo + Curly Fries
            </template>
        </dokki-video>
    </dokki-output>

</dokki-code>
</api-reference>
