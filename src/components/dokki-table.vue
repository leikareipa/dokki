/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-table dokkiCSS-expandable">

        <header @click="isExpanded = !isExpanded">

            <span class="dokkiCSS-title">
                <i class="fas fa-table" title="Table"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <div v-if="isExpanded" class="table-container">
            <slot name="table"/>
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
    mixins: [expandedPropMixin],
    computed: {
        hasFooter()
        {
            return !!this.$slots.caption;
        }
    },
}
</script>
