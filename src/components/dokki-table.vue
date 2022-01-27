/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-table dokkiCSS-expandable">

        <header @click="this.$refs['table-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-table" title="Table"/>
                <span>
                    {{title}}
                </span>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="table-expander"
                                  :start-expanded="isExpanded"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">
                                  
            <div class="dokkiCSS-container">
                <slot name="table"/>
            </div>

        </dokki0-animated-expander>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [expandedPropMixin],
    computed: {
        title()
        {
            const caption = (typeof this.$slots.caption == "function")
                ? this.$slots.caption()
                : undefined;

            if (Array.isArray(caption) && (typeof caption[0].children == "string")) {
                return caption[0].children;
            }

            /// TODO: Don't prefix the thing with a space; use CSS spacing instead.
            return " Table";
        }
    },
}
</script>
