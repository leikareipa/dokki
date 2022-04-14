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

<api-reference>
<p>
    Displays an image, much like the standard <i>img</i>.
</p>

<h2>Attributes</h2>

<h3>src</h3> <strong>required</strong>
<p>
    Corresponds to the <b>src</b> attribute of the standard <i>img</i> element. 
</p>

<h3>width</h3>
<p>
    Corresponds to the <b>width</b> attribute of the standard <i>img</i> element. 
</p>

<h3>height</h3>
<p>
    Corresponds to the <b>height</b> attribute of the standard <i>img</i> element. 
</p>

<h3>expanded</h3>
<p>
    If present, the image will be visible by default rather than requiring the user
    to reveal it manually.
</p>

<h3>upscale-to-fit</h3>
<p>
    If present, images that are smaller than the image container will be upscaled
    to fit the size of the container.
</p>

<h3>pixelated-scale</h3>
<p>
    If present, images whose <b>width</b> and/or <b>height</b> differs from the image
    file's native resolution will be scaled using nearest-neighbor interpolation.
</p>

<h2>Examples</h2>
<dokki-code headerless
            code="
            <dokki-image expanded src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
            </dokki-image>
            ">

    <dokki-output>
        <dokki-image expanded src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
        </dokki-image>
    </dokki-output>

</dokki-code>

<dokki-code headerless
            code="
            <dokki-image src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
                <template #caption>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </template>
            </dokki-image>
            ">

    <dokki-output>
        <dokki-image src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
            <template #caption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </template>
        </dokki-image>
    </dokki-output>

</dokki-code>

<dokki-code headerless
            code="
            <dokki-image
                expanded
                pixelated-scale
                width='1024'
                height='576'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'
            ></dokki-image>
            ">

    <dokki-output>
        <dokki-image
            expanded
            pixelated-scale
            width="1024"
            height="576"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'>
        </dokki-image>
    </dokki-output>

</dokki-code>
</api-reference>
