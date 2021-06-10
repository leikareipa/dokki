/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-code"
       :class="{'has-output': hasOutput}">

        <header v-if="!isHeaderless">

            <span class="dokkiCSS-title">
                <i class="fas fa-code" title="Code"/>
                {{title}}
            </span>

        </header>

        <hr v-if="!isHeaderless">

        <footer>
            <dokki0-text-block-with-line-numbers :text="codeFromSlot || code">
            </dokki0-text-block-with-line-numbers>
        </footer>

    </p>

    <slot/>
</template>

<script>
import {headerlessPropMixin} from "../component-mixins.js";

export default {
    mixins: [headerlessPropMixin],
    props: {
        title: {default: "Code"},
        code: {default: undefined},
    },
    data() {
        return {
            codeFromSlot: undefined,
        }
    },
    mounted()
    {
        if (!this.$slots.code ||
            (typeof this.$slots.code !== "function"))
        {
            return;
        }

        const codeElement = this.$slots.code()[0];

        if (codeElement)
        {
            this.codeFromSlot = codeElement.children;
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
