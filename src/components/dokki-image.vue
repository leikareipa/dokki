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

        <img v-if="isExpanded"
             class="dokkiCSS-checker-background"
             :src="src">

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
        src: {},
    },
    mixins: [expandedPropMixin],
    computed: {
        hasFooter()
        {
            return !!this.$slots.caption;
        }
    },
}
</script>
