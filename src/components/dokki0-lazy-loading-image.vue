/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<img
    ref="image"
    class="dokki0-lazy-loading-image"
    :style="{'aspect-ratio': `${width} / ${height}`}"
    :width="width"
    :height="height"
    :src="hasThumbnailSrc? thumbnailSrc : src"
>
</template>

<style lang="scss">
</style>

<script>
export default {
    props: {
        src: {default: "//about:blank"},
        thumbnailSrc: {default: "//about:blank"},
        width: {default: undefined},
        height: {default: undefined},
    },
    computed: {
        hasSrc()
        {
            return (this.$props.src !== "//about:blank");
        },
        hasThumbnailSrc()
        {
            return (this.$props.thumbnailSrc !== "//about:blank");
        },
    },
    beforeMount() {
        this.$nextTick(()=>{
            const imageEl = this.$el;

            if (imageEl && (imageEl.src === this.thumbnailSrc))
            {
                const intersectionObserver = new IntersectionObserver(([target])=>
                {
                    if (target.isIntersecting)
                    {
                        imageEl.src = this.src;
                        intersectionObserver.disconnect();
                    }
                });

                intersectionObserver.observe(imageEl);
            }
        });
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
