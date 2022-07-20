/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-image"
    :has-content="(hasSrc || hasContent)"
    icon="fas fa-image"
    title="Image"
>

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <img v-if="hasSrc"
            :width="width"
            :height="height"
            :src="src"
            :class="{
                'dokkiCSS-upscale-to-fit': hasUpscaleToFit,
                'dokkiCSS-pixelated-scale': hasPixelated,
            }"
        >

        <slot v-else-if="hasContent" name="content"/>

    </template>
    
</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-image
{
    display: flex;
    flex-direction: column;

    .content.first-level
    {
        padding: 0;
        min-height: 20px;
        display: flex;
        overflow: auto;

        & > img
        {
            max-width: 100%;
            max-height: 70vh;
            height: auto;

            object-fit: contain;
            object-position: left;

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
    computed: {
        hasUpscaleToFit()
        {
            return (this.$props.upscaleToFit !== undefined);
        },
        hasPixelated()
        {
            return (this.$props.pixelatedScale !== undefined);
        },
        hasSrc()
        {
            return (this.$props.src !== "//about:blank");
        },
        hasContent() {
            return (
                (typeof this.$slots["content"] === "function") &&
                this.$slots["content"]().some(c=>c.children.length)
            );
        },
    },
}
</script>

<api-reference lang="md">
Provides the general functionality of a standard \<img\>, with some dokki-specific
extensions. 

## Samples

<dokki-image width="1280" height="720" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
    <template #caption>
        Eublepharis macularius
    </template>
</dokki-image>

<dokki-image headerless width="1280" height="720" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
    <template #caption>
        Eublepharis macularius
    </template>
</dokki-image>

## HTML syntax

    <dokki-image expanded headerless height inline-class pixelated-scale src upscale-to-fit width>

        <template #caption>
        </template>

    </dokki-image>

</dokki-code>

## HTML templates

### #caption

The template's children will be displayed as the \<dokki-image\> element's caption.

<x-example>
    <dokki-code headerless code="
        <dokki-image>
            <template #caption>
                Hello there
            </template>
        </dokki-image>
        ">
    </dokki-code>
    <dokki-image>
        <template #caption>
            Hello there
        </template>
    </dokki-image>
</x-example>

## HTML attributes

### expanded

If present, the \<dokki-image\> element's image container will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-image\> element to be displayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-example>
    <dokki-code headerless code="
        <dokki-image headerless src='...'>
        </dokki-image>
        ">
    </dokki-code>
    <dokki-image headerless width="1280" height="720" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Eublepharis_macularius_2009_G6.jpg/1280px-Eublepharis_macularius_2009_G6.jpg'>
    </dokki-image>
</x-example>

### height

Corresponds to the **height** attribute of the standard \<img\> element. 

### inline-class

The class name(s) given in this string will be appended to the \<dokki-image\>
element's class list.

### pixelated-scale

If the **width** and/or **height** attributes are set higher than the image's native
resolution, or if the image is smaller than the \<dokki-image\> element's image
container and the **upscale-to-fit** attribute is set, the image will be upscaled
using nearest-neighbor interpolation (rather than e.g. bilinear sampling).

<x-example>
    <dokki-code headerless code="
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

### src <x-required></x-required>

Corresponds to the **src** attribute of the standard \<img\> element. 

### upscale-to-fit

If present, images that are smaller than the \<dokki-image\> element's image container
will be upscaled to fit the container. 

### width

Corresponds to the **width** attribute of the standard \<img\> element. 
</api-reference>
