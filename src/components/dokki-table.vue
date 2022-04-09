/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-table dokkiCSS-expandable"
       :class="{
           'dokkiCSS-headerless': isHeaderless,
       }">

        <header v-if="!isHeaderless"
                @click="this.$refs['table-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-table" title="Table"/>
                <span>
                    <slot v-if="this.$slots.caption" name="caption"/>
                    <span v-else>&nbsp;Table</span>
                </span>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide table" : "Expand table"}}
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
import {headerlessPropMixin} from "../component-mixins.js";

export default {
    mixins: [
        expandedPropMixin,
        headerlessPropMixin,
    ],
    mounted()
    {
        if (this.isHeaderless)
        {
            this.$refs["table-expander"].expand({animate: false});
        }
    },
}
</script>
