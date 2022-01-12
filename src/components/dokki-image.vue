/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-image dokkiCSS-expandable"
       :class="{expanded: isExpanded}">

        <header @click="this.calculate_scaled_size(),
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
                                  :start-expanded="expanded !== undefined"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">
            
            <div class="dokkiCSS-container">
                <img :src="src"
                     ref="image-element"
                     :class="{
                         'dokkiCSS-upscale-to-fit': hasUpscaleToFit,
                         'dokkiCSS-pixelated-scale': hasPixelated,
                     }"
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
        pixelatedScale: {default: undefined},
        expanded: {default: undefined},
        width: {default: undefined},
        height: {default: undefined},
    },
    data()
    {
        return {
            isExpanded: false,
            scaledWidth: undefined,
            scaledHeight: undefined,
        }
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.calculate_scaled_size();
            this.$refs["image-expander"].toggle_expansion({startExpanded: true});
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
        },
        hasPixelated()
        {
            return (this.$props.pixelatedScale !== undefined);
        }
    },
    methods: {
        // Calculates a resolution representing the size of the image when scaled
        // to fit the container, being equal to CSS's "object-fit: scale-down".
        calculate_scaled_size()
        {
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
