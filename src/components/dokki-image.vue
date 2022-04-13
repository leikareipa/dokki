/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-image"
    expands-to="dropdown"
    icon="fas fa-image"
    title="Image"
    @transitioning="calculate_scaled_size()">

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

<style lang="scss">
.dokki0-embedded-expandable.dokki-image
{
    display: flex;
    flex-direction: column;

    &:not(.headerless)
    {
        .content
        {
            background-color: var(--dokkiCSS-embedded-auxiliary-color);
            padding: 0;
        }
    }

    .content
    {
        min-height: 20px;
        display: flex;
        overflow: auto;

        & > img
        {
            max-width: 100%;

            &.dokkiCSS-upscale-to-fit
            {
                width: 100%;
                height: 100%;
            }

            &.dokkiCSS-pixelated-scale
            {
                image-rendering: pixelated;
            }
        }
    }
}
</style>

<script>
export default {
    props: {
        src: {default: "//about:blank"},
        upscaleToFit: {default: undefined},
        pixelatedScale: {default: undefined},
        width: {default: undefined},
        height: {default: undefined},
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
            const containerBorderWidth = 0;
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
