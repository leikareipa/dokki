/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
   <p class="dokkiCSS-embedded dokki-iframe dokkiCSS-expandable">

        <header @click="this.$refs['frame-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-crop-alt"/>
                {{title}}
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Close frame" : "Expand frame"}}
            </aside>

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
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [expandedPropMixin],
    props: {
        src: {default: undefined},
        srcdoc: {default: undefined},
        height: {default: "500px"},
        title: {default: "Inline frame"},
        autofocus: {default: undefined},
    },
    computed: {
        hasAutofocus() {
            return (this.$props.autofocus !== undefined);
        },
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
