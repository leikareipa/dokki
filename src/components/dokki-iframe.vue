/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-iframe dokkiCSS-expandable dokkiCSS-groupbox"
       :class="{
           'dokkiCSS-headerless': isHeaderless,
       }">

        <header v-if="!isHeaderless"
                @click="this.$refs['frame-expander'].toggle_expansion()">

            <span class="dokkiCSS-groupbox-title">
                <i class="fas fa-sm fa-crop-alt"/>
                Inline frame
            </span>

            <span class="dokkiCSS-title">
                {{title}}
            </span>

            <dokki0-expansion-indicator :isExpanded="isExpanded"/>

        </header>

        <dokki0-animated-expander ref="frame-expander"
                                  :start-expanded="isExpanded"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">

            <footer :style="{height: height}">

                <iframe class="dokki-iframe"
                        :src="src"
                        :srcdoc="srcdoc"
                        ref="iframe">
                </iframe>
                
            </footer>

        </dokki0-animated-expander>

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
        src: {default: undefined},
        srcdoc: {default: undefined},
        height: {default: "500px"},
        title: {default: "Inline frame"},
        autofocus: {default: undefined},
    },
    computed: {
        hasAutofocus()
        {
            return (this.$props.autofocus !== undefined);
        },
    },
    mounted()
    {
        if (this.isHeaderless)
        {
            this.$refs["frame-expander"].expand({animate: false});
        }
    },
    watch: {
        isExpanded()
        {
            if (this.isExpanded && this.hasAutofocus)
            {
                this.$nextTick(()=>this.$refs["iframe"].focus());
            }
        },
    },
}
</script>
