/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-image dokkiCSS-expandable"
       :class="{expanded: isExpanded}">

        <header @click="this.$refs['image-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-image" title="Image"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <hr v-if="isTransitioning || isExpanded">

        <dokki0-animated-expander ref="image-expander"
                                  class="dokkiCSS-checker-background"
                                  @expanded="isExpanded = true, isTransitioning = false"
                                  @minimized="isExpanded = false, isTransitioning = false"
                                  @transitioning="isTransitioning = true">
            
            <div class="dokkiCSS-container">
                <img :src="src"
                     :class="{'dokkiCSS-upscale-to-fit': hasUpscaleToFit}">
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
    },
    data()
    {
        return {
            isExpanded: false,
            isTransitioning: false,
        }
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.$refs['image-expander'].toggle_expansion();
        }
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
}
</script>
