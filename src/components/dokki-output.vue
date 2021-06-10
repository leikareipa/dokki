/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-output dokkiCSS-expandable">

        <header @click="isExpanded = !isExpanded">

            <span class="dokkiCSS-title">
                <i class="fas fa-chevron-right"/>
                {{title}}
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <footer v-if="isExpanded">

            <slot/>
            
        </footer>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    props: {
        title: {default: "Output"},
    },
    mixins: [expandedPropMixin],
}
</script>
