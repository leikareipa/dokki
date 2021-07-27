/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-video dokkiCSS-expandable"
       :class="platform">

        <header @click="this.$refs['video-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i :class="headerIcon" title="Video"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="video-expander"
                                  @expanded="isExpanded = true, isTransitioning = false"
                                  @minimized="isExpanded = false, isTransitioning = false"
                                  @transitioning="isTransitioning = true">
            <iframe :src="videoUrl"
                    allow="fullscreen; autoplay;">
            </iframe>
        </dokki0-animated-expander>

        <hr v-if="hasFooter">

        <footer v-if="hasFooter" class="dokkiCSS-italic">
            <slot name="caption"/>
        </footer>

    </p>
</template>

<script>
export default {
    data()
    {
        return {
            isExpanded: false,
            isTransitioning: false,
        }
    },
    props: {
        src: {},
        platform: {default: "youtube"},
        expanded: {default: undefined},
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.$refs['video-expander'].toggle_expansion();
        }
    },
    computed: {
        hasFooter()
        {
            return !!this.$slots.caption;
        },
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
