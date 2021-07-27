/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-image dokkiCSS-expandable"
       :class="{expanded: isExpanded}">

        <header @click="this.isTransitioning = true,
                        this.calculate_scaled_size(),
                        this.$refs['image-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-image" title="Image"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="image-expander"
                                  class="dokkiCSS-checker-background"
                                  @expanded="isExpanded = true, isTransitioning = false"
                                  @minimized="isExpanded = false, isTransitioning = false">
            
            <div class="dokkiCSS-container">
                <img :src="src"
                     ref="image-element"
                     :class="{'dokkiCSS-upscale-to-fit': hasUpscaleToFit}"
                     :width="scaledWidth"
                     :height="scaledHeight">
            </div>

        </dokki0-animated-expander>

        <hr v-if="hasFooter">

        <footer v-if="hasFooter" class="dokkiCSS-italic">
            <slot name="caption"/>
        </footer>
    </p>
</template>

<script>
export default {
    props: {
        src: {default: "//about:blank"},
        upscaleToFit: {default: undefined},
        expanded: {default: undefined},
        width: {default: undefined},
        height: {default: undefined},
    },
    data()
    {
        return {
            isExpanded: false,
            isTransitioning: false,

            scaledWidth: undefined,
            scaledHeight: undefined,
        }
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.$refs['image-expander'].toggle_expansion();
        }

        window.addEventListener("resize", this.calculate_scaled_size);
    },
    computed: {
        hasFooter()
        {
            return !!this.$slots.caption;
        },
        hasUpscaleToFit()
        {
            return (this.$props.upscaleToFit !== undefined);
        }
    },
    methods: {
        is_hidden()
        {
            return (!this.isExpanded && !this.isTransitioning);
        },
        // Calculates a resolution representing the size of the image when scaled
        // to fit the container, being equal to CSS's "object-fit: scale-down".
        calculate_scaled_size()
        {
            if (this.is_hidden()) {
                return;
            }

            const containerBorderWidth = 1;
            const imageWidth = this.$props.width;
            const imageHeight = this.$props.height;
            let containerWidth = this.$el.offsetWidth;

            if (!imageWidth || !imageHeight || !containerWidth) {
                return;
            }

            containerWidth -= (containerBorderWidth * 2);

            const ratio = Math.min((this.upscaleToFit? Infinity : 1), (containerWidth / imageWidth));

            this.scaledWidth = Math.round(imageWidth * ratio);
            this.scaledHeight = Math.round(imageHeight * ratio);
        }
    }
}
</script>
