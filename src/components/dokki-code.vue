/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-code dokkiCSS-expandable dokkiCSS-groupbox"
       :class="{
           'dokkiCSS-has-output': hasOutput,
           'dokkiCSS-headerless': isHeaderless,
           'dokkiCSS-expanded': isExpanded,
           'dokkiCSS-transitioning': isTransitioning,
       }">

        <header v-if="!isHeaderless"
                @click="this.$refs['code-expander'].toggle_expansion()">

            <span class="dokkiCSS-groupbox-title">
                <i class="fas fa-sm fa-code"/>
                Code
            </span>

            <span class="dokkiCSS-title">
                {{title}}
            </span>

            <dokki0-expansion-indicator :isExpanded="isExpanded"/>

        </header>

        <dokki0-animated-expander ref="code-expander"
                                  :start-expanded="isExpanded"
                                  @transitioning="isTransitioning = true"
                                  @expanded="isExpanded = true, isTransitioning = false"
                                  @minimized="isExpanded = false, isTransitioning = false">

            <div class="dokkiCSS-container">
                <dokki0-text-block-with-line-numbers :syntax="syntax" :text="codeFromSlot || code">
                </dokki0-text-block-with-line-numbers>
            </div>

        </dokki0-animated-expander>

    </p>

    <slot/>
</template>

<script>
import {headerlessPropMixin} from "../component-mixins.js";
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [
        headerlessPropMixin,
        expandedPropMixin,
    ],
    props: {
        title: {default: "Code"},
        code: {default: undefined},
        syntax: {default: undefined},
    },
    data() {
        return {
            codeFromSlot: undefined,
            isTransitioning: false,
        }
    },
    mounted()
    {
        if (this.isHeaderless)
        {
            this.$refs["code-expander"].expand({animate: false});
        }
        
        if ((typeof this.$slots.code == "function"))
        {
            const codeElement = this.$slots.code()[0];
            if (codeElement)
            {
                this.codeFromSlot = codeElement.children;
            }
        }
    },
    computed: {
        hasOutput()
        {
            return !!this.$slots.default;
        },
    },
}
</script>
