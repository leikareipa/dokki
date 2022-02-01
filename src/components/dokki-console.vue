/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-console"
       :class="{'dokkiCSS-headerless': isHeaderless}"
       v-if="hasFooter || !isHeaderless">

        <header v-if="!isHeaderless">

            <span class="dokkiCSS-title">
                <i :class="headerIcon" title="Terminal command"/>
            </span>

            <code>
                {{command}}
            </code>

        </header>

        <hr v-if="!isHeaderless && hasFooter">

        <footer v-if="hasFooter">
            <dokki0-text-block-with-line-numbers :text="outputFromSlot || output">
            </dokki0-text-block-with-line-numbers>
        </footer>
    </p>
</template>

<script>
import {headerlessPropMixin} from "../component-mixins.js";

export default {
    mixins: [headerlessPropMixin],
    props: {
        command: {default: "undefined command"},
        output: {default: undefined},
        platform: {default: "unix"}
    },
    data() {
        return {
            outputFromSlot: undefined,
        }
    },
    mounted()
    {
        if (!this.$slots.output ||
            (typeof this.$slots.output !== "function"))
        {
            return;
        }

        const outputElement = this.$slots.output()[0];

        if (outputElement)
        {
            this.outputFromSlot = outputElement.children;
        }
    },
    computed: {
        headerIcon()
        {
            switch (this.platform)
            {
                case "windows": return "fas fa-terminal";
                case "unix": return "fas fa-dollar-sign";
                default: return "fas fa-dollar-sign";
            }
        },
        hasFooter()
        {
            return ((this.output !== undefined) ||
                    (this.outputFromSlot !== undefined));
        },
    },
}
</script>
