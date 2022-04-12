/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokkiCSS-embedded dokkiCSS-expandable"
   :class="{
       [className]: true,
       'dokkiCSS-groupbox': (headerWidget == 'groupbox'),
       'dokkiCSS-has-after': hasAfter,
       'dokkiCSS-headerless': isHeaderless,
       'dokkiCSS-expanded': isExpanded,
       'dokkiCSS-transitioning': isTransitioning,
   }">

    <header v-if="!isHeaderless"
            @click="this.$refs['expander'].toggle_expansion()">

        <span v-if="headerWidget == 'groupbox'" class="dokkiCSS-groupbox-title">
            <i :class="icon" class="fa-sm"/>
            {{title}}
        </span>

        <span class="dokkiCSS-title">
            <span>

                <span v-if="headerWidget != 'groupbox'">
                    <i class="fa" :class="icon" style="margin-right: 0.35em;"/>
                </span>

                <slot v-if="hasCaption" name="caption"/>
                <span v-else>
                    {{title}}
                </span>

            </span>
        </span>

        <dokki0-expansion-indicator :isExpanded="isExpanded"/>

    </header>

    <dokki0-animated-expander ref="expander"
                              :start-expanded="isExpanded"
                              @expanded="isExpanded = true"
                              @minimized="isExpanded = false">

    <div class="dokkiCSS-container" style="overflow: hidden;">

        <slot name="content"/>

    </div>

    </dokki0-animated-expander>

    <slot name="after"/>

</p>
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
        headerWidget: {type: String, default: "groupbox"},
        className: {required: true, type: String},
        icon: {required: true, type: String},
        title: {required: true, type: String},
    },
    data() {
        return {
            isTransitioning: false,
        }
    },
    mounted()
    {
        if (this.isHeaderless || this.isExpanded)
        {
            this.$refs["expander"].expand({animate: false});
        }
    },
    computed: {
        hasCaption() {
            return (
                (typeof this.$slots.caption === "function") &&
                this.$slots["caption"]().some(c=>c.children.length)
            );
        },
        hasAfter() {
            return (
                (typeof this.$slots.after === "function") &&
                this.$slots["after"]().some(c=>c.children.length)
            );
        },
    },
    watch: {
        isExpanded() {
            this.$emit(this.isExpanded? "expanded" : "minimized");
        },
    },
}
</script>
