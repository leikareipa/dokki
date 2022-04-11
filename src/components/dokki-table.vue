/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-table dokkiCSS-expandable dokkiCSS-groupbox"
       :class="{
           'dokkiCSS-headerless': isHeaderless,
       }">

        <header v-if="!isHeaderless"
                @click="this.$refs['table-expander'].toggle_expansion()">

            <span v-if="hasCaption" class="dokkiCSS-groupbox-title">
                <i class="fas fa-sm fa-table"/>
                Table
            </span>

            <span class="dokkiCSS-title">
                <span>
                    <slot v-if="hasCaption" name="caption"/>
                    <span v-else>Table</span>
                </span>
            </span>

            <dokki0-expansion-indicator :isExpanded="isExpanded"/>

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
    computed: {
        hasCaption()
        {
            return !!this.$slots.caption;
        },
    },
    mounted()
    {
        if (this.isHeaderless)
        {
            this.$refs["table-expander"].expand({animate: false});
        }
    },
}
</script>
