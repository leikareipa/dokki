/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
   <p class="dokkiCSS-embedded dokki-iframe dokkiCSS-expandable">

        <header @click="isExpanded = !isExpanded">

            <span class="dokkiCSS-title">
                <i class="fas fa-external-link-alt"/>
                {{title}}
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Close frame" : "Expand frame"}}
            </aside>

        </header>

        <hr v-if="isExpanded">

        <footer v-if="isExpanded"
                :style="{height: height}">

            <iframe class="dokki-iframe"
                    :src="src"
                    ref="iframe">
            </iframe>
            
        </footer>

    </p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    props: {
        src: {default: ""},
        height: {default: "500px"},
        title: {default: "Inline frame"},
        autofocus: {default: undefined},
    },
    mixins: [expandedPropMixin],
    watch: {
        isExpanded()
        {
            if (this.isExpanded && (this.$props.autofocus !== undefined))
            {
                this.$nextTick(()=>
                {
                    this.$refs["iframe"].onload = ()=>{
                        this.$refs["iframe"].focus();
                    };
                });
            }
        }
    },
}
</script>
