/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-video dokkiCSS-expandable"
       :class="platform">

        <header @click="isExpanded = !isExpanded">

            <span class="dokkiCSS-title">
                <i :class="headerIcon" title="Video"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <hr v-if="isExpanded">

        <iframe v-if="isExpanded"
                class="dokkiCSS-checker-background"
                :src="videoUrl"
                allow="fullscreen; autoplay;">
        </iframe>

        <hr v-if="hasFooter">

        <footer v-if="hasFooter" class="dokkiCSS-italic">
            <slot name="caption"/>
        </footer>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    props: {
        src: {},
        platform: {default: "youtube"},
    },
    mixins: [expandedPropMixin],
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
