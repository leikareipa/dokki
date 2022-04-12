/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-image"
    icon="fas fa-image"
    title="Image"
    :headerless="headerless">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <img
            :src="src"
            ref="image-element"
            :class="{
                'dokkiCSS-upscale-to-fit': hasUpscaleToFit,
                'dokkiCSS-pixelated-scale': hasPixelated,
            }"
            :width="scaledWidth"
            :height="scaledHeight"
        >

    </template>
    
</dokki0-embedded-expandable>
</template>

<script>
export default {
    props: {
        src: {default: "//about:blank"},
        upscaleToFit: {default: undefined},
        pixelatedScale: {default: undefined},
        width: {default: undefined},
        height: {default: undefined},
        headerless: {default: undefined},
    },
    data()
    {
        return {
            scaledWidth: undefined,
            scaledHeight: undefined,
        }
    },
    mounted()
    {
        this.calculate_scaled_size();
        window.addEventListener("resize", this.calculate_scaled_size);
    },
    computed: {
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
            const containerBorderWidth = ((this.$props.headerless === undefined)? 1 : 0);
            const imageWidth = this.$props.width;
            const imageHeight = this.$props.height;
            let containerWidth = this.$el.offsetWidth;

            if (!imageWidth || !imageHeight || !containerWidth)
            {
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
