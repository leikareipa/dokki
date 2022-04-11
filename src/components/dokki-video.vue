/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-video dokkiCSS-expandable dokkiCSS-groupbox"
       :class="platform">

        <header @click="this.$refs['video-expander'].toggle_expansion()">

            <span v-if="hasCaption" class="dokkiCSS-groupbox-title">
                <i class="fa-sm" :class="headerIcon"/>
                Video
            </span>

            <span class="dokkiCSS-title">
                <span>
                    <slot v-if="this.$slots.caption" name="caption"/>
                    <span v-else>&nbsp;Video</span>
                </span>
            </span>

            <dokki0-expansion-indicator :isExpanded="isExpanded"/>

        </header>

        <dokki0-animated-expander ref="video-expander"
                                  :start-expanded="isExpanded"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">
            <iframe :src="videoUrl"
                    allow="fullscreen; autoplay;">
            </iframe>
        </dokki0-animated-expander>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [expandedPropMixin],
    props: {
        src: {},
        platform: {default: "youtube"},
    },
    computed: {
        hasCaption()
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
