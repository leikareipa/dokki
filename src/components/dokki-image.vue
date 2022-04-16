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
        Provides the general functionality of a standard <x-tag>img</x-tag>, with some
        dokki-specific extensions. 
    </p>

    <h2>Sample</h2>

        <dokki-image width="1280" height="720" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
            <template #caption>
                Eublepharis macularius
            </template>
        </dokki-image>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-image expanded headerless height inline-class pixelated-scale src upscaled-to-fit width>

                <template #caption>
                </template>

            </dokki-image>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-image</x-tag>
                element's caption.
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            Hello there
                        </template>
                        ">
                    </dokki-code>

                    <dokki-image>
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-image>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-image>
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-image>

                </x-example>
            </x-examples>

    <h2>Attributes</h2>

        <x-attr>expanded</x-attr>

            <p>
                If present, the <x-tag>dokki-image</x-tag> element's image container will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-image</x-tag> element to be displayed without its
                caption.
            </p>

            <p>
                Setting this attribute will implicitly set the <x-attr>expanded</x-attr> attribute
                as well. 
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-image headerless src='...'>
                        </dokki-image>
                        ">
                    </dokki-code>

                    <dokki-image headerless width="1280" height="720" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
                    </dokki-image>

                </x-example>
            </x-examples>

        <x-attr>height</x-attr>

            <p>
                Corresponds to the <x-attr>height</x-attr> attribute of the standard <x-tag>img</x-tag>
                element. 
            </p>

        <x-attr>inline-class</x-attr>

            <p>
                The class name(s) given in this string will be appended to the
                <x-tag>dokki-image</x-tag> element's class list.
            </p>

        <x-attr>pixelated-scale</x-attr>

            <p>
                If the <x-attr>width</x-attr> and/or <x-attr>height</x-attr> attributes are set
                higher than the image's native resolution, or if the image is smaller than the
                <x-tag>dokki-image</x-tag> element's image container and the <x-attr>upscale-to-fit</x-attr>
                attribute is set, the image will be upscaled using nearest-neighbor interpolation
                (rather than e.g. bilinear sampling).
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-image pixelated-scale width='...' height='...' src='...'>
                        </dokki-image>
                        ">
                    </dokki-code>

                    <dokki-image
                        expanded
                        pixelated-scale
                        width='1024'
                        height='576'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/80px-Eublepharis_macularius_2009_G6.jpg'
                    ></dokki-image>

                </x-example>
            </x-examples>

        <x-attr>src</x-attr>
        <x-required></x-required>

            <p>
                Corresponds to the <x-attr>src</x-attr> attribute of the standard <x-tag>img</x-tag>
                element. 
            </p>

        <x-attr>upscale-to-fit</x-attr>

            <p>
                If present, images that are smaller than the <x-tag>dokki-image</x-tag> element's
                image container will be upscaled to fit the container. 
            </p>

        <x-attr>width</x-attr>

            <p>
                Corresponds to the <x-attr>width</x-attr> attribute of the standard <x-tag>img</x-tag>
                element. 
            </p>

</api-reference>
