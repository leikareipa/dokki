/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<p class="dokki0-embedded-expandable dokkiCSS-embedded"
   :class="{
       [inlineClass]: true,
       [className]: true,
       'groupbox': (headerWidget == 'groupbox'),
       'expands-to-dropdown': (expandsTo == 'dropdown'),
       'headerless': isHeaderless,
       'has-after': hasAfter,
       'dokkiCSS-expanded': isExpanded,
       'dokkiCSS-transitioning': isTransitioning,
   }">

    <header v-if="!isHeaderless"
            @click="this.$refs['expander'].toggle_expansion()">

        <span v-if="headerWidget == 'groupbox'" class="title blocker">
            <i :class="icon" class="fa-sm"/>
            {{title}}
        </span>

        <span v-if="headerWidget == 'groupbox'" class="title">
            <i :class="icon" class="fa-sm"/>
            {{title}}
        </span>

        <span class="caption">

                <span v-if="headerWidget != 'groupbox'">
                    <i class="fa" :class="icon" style="margin-right: 0.35em;"/>
                </span>

                <slot v-if="hasCaption" name="caption"/>
                <span v-else>
                    {{title}}
                </span>

        </span>

        <dokki0-expansion-indicator :isExpanded="isExpanded"/>

    </header>

    <dokki0-animated-expander ref="expander"
                              :start-expanded="isExpanded"
                              @transitioning="isTransitioning = true"
                              @expanded="isExpanded = true, isTransitioning = false"
                              @minimized="isExpanded = false, isTransitioning = false">

        <div class="content dokkiCSS-vertical-collapse dokkiCSS-container">

            <slot name="content"/>

        </div>

    </dokki0-animated-expander>

    <slot name="after"/>

</p>
</template>

<style lang="scss">
.dokki0-embedded-expandable
{
    width: 100%;
    margin: var(--dokkiCSS-embedded-vertical-margin) 0;
    box-sizing: border-box;
    border: 1px solid var(--dokkiCSS-page-primary-line-color);
    border-radius: var(--dokkiCSS-embedded-border-radius);
    background-color: var(--dokkiCSS-page-inert-bg-color);

    &.headerless,
    &.expands-to-dropdown
    {
        border: none;
        background-color: var(--dokkiCSS-embedded-auxiliary-color);
    }

    &.expands-to-dropdown
    {
        & > header
        {
            border-radius: var(--dokkiCSS-embedded-border-radius);
            border: 1px solid var(--dokkiCSS-page-primary-line-color);
            background-color: var(--dokkiCSS-page-inert-bg-color);
        }

        &.dokkiCSS-expanded > header,
        &.dokkiCSS-transitioning > header
        {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    header
    {
        cursor: pointer;
        user-select: none;
        font-weight: normal;
        padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
        display: flex;
        align-items: baseline;
        box-sizing: border-box;
    }

    hr
    {
        padding: 0;
        margin: 0;
        border: none;
        border-top: 1px solid var(--dokkiCSS-page-primary-line-color);
        width: 100%;

        & + &
        {
            display: none;
        }
    }

    & > .content,
    .dokkiCSS-container
    {
        border-bottom-left-radius: calc(var(--dokkiCSS-embedded-border-radius) - 1px);
        border-bottom-right-radius: calc(var(--dokkiCSS-embedded-border-radius) - 1px);
        line-height: normal;
        overflow: hidden;
        padding: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    }

    &:not(.headerless).groupbox
    {
        margin-top: calc(var(--dokkiCSS-embedded-vertical-margin) + 0.475em);

        & + &
        {
            margin-top: calc(var(--dokkiCSS-embedded-vertical-margin) + 0.75em);
        }
    }

    &.groupbox
    {
        position: relative;

        .title
        {
            position: absolute;
            top: -1px;
            left: calc(var(--dokkiCSS-embedded-horizontal-padding) - 3px);
            font-size: 95%;
            font-variant: small-caps;
            text-transform: lowercase;
            transform: translateY(-50%);
            padding: 3px;
            color: var(--dokkiCSS-page-secondary-fg-color);

            &.blocker
            {
                top: 0;
                background-color: var(--dokkiCSS-embedded-footer-bg-color);
                color: transparent;
                height: 1px;
                transform: none;
            }
        }
    }
}
</style>

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
        expandsTo: {type: String, default: "inline"},
        className: {required: true, type: String},
        inlineClass: {type: String, default: ""},
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
                (typeof this.$slots.after === "function")
            );
        },
    },
    watch: {
        isExpanded() {
            this.$emit(this.isExpanded? "expanded" : "minimized");
        },
        isTransitioning(is) {
            if (is)
            {
                this.$emit("transitioning");
            }
        },
    },
}
</script>

<api-reference>
<p>TODO</p>
</api-reference>
