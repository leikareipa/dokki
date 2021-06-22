/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-image dokkiCSS-expandable"
       :class="{expanded: isExpanded}">

        <header @click="isExpanded = !isExpanded">

            <span class="dokkiCSS-title">
                <i class="fas fa-image" title="Image"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <hr v-if="isExpanded">

        <div v-if="isExpanded"
             class="dokkiCSS-container dokkiCSS-checker-background">

            <img :src="src"
                 :class="{'dokkiCSS-upscale-to-fit': hasUpscaleToFit}">

        </div>

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
        src: {default: "//about:blank"},
        upscaleToFit: {default: undefined},
    },
    mixins: [expandedPropMixin],
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
