/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-output dokkiCSS-expandable">

        <header @click="this.$refs.output.toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-chevron-right"/>
                {{title}}
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="output"
                                  :start-expanded="isExpanded"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">
            <footer>
                <slot/>
            </footer>
        </dokki0-animated-expander>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [expandedPropMixin],
    props: {
        title: {default: "Output"},
    },
}
</script>
