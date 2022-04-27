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
       'has-content': hasContent,
       'groupbox': ((headerWidget == 'groupbox') && !isPlain),
       'expands-to-dropdown': (expandsTo == 'dropdown'),
       'headerless': isHeaderless,
       'plain': isPlain,
       'has-after': hasAfter,
       'dokkiCSS-expanded': isExpanded,
       'dokkiCSS-transitioning': isTransitioning,
   }">

    <header v-if="!isHeaderless"
            @click="hasContent? this.$refs['expander'].toggle_expansion() : 0">

        <span v-if="headerWidget == 'groupbox'" class="title blocker">
            <i :class="icon" class="fa-sm"/>
            {{title}}
        </span>

        <span v-if="headerWidget == 'groupbox'" class="title">
            <i :class="icon"/>
            {{title}}
        </span>

        <span class="caption">

                <span class="icon" v-if="(icon !== undefined) && (isPlain || (headerWidget !== 'groupbox'))" :title="title">
                    <i :class="icon"/>&nbsp;
                </span>

                <span class="label">
                    <slot v-if="hasCaption" name="caption"/>
                    <span v-else>
                        {{title}}
                    </span>
                </span>

        </span>

        <dokki0-expansion-indicator v-if="hasContent" :isExpanded="isExpanded" :isTransitioning="isTransitioning"/>

    </header>

    <dokki0-animated-expander v-if="hasContent"
                              ref="expander"
                              :start-expanded="isExpanded"
                              @transitioning="isTransitioning = true"
                              @expanded="isExpanded = true, isTransitioning = false"
                              @minimized="isExpanded = false, isTransitioning = false">

        <div class="content dokkiCSS-container">

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

    &.plain
    {
        background-color: var(--dokkiCSS-embedded-auxiliary-color);
        border: none;

        .title,
        .title-blocker
        {
            display: none;
        }
    }

    &:not(.plain).headerless,
    &:not(.plain).expands-to-dropdown
    {
        border: none;
        background-color: var(--dokkiCSS-embedded-auxiliary-color);
    }

    &:not(.plain).expands-to-dropdown
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

    &:not(.has-content) header
    {
        cursor: default;
    }

    header
    {
        cursor: pointer;
        user-select: none;
        font-weight: normal;
        padding: var(--dokkiCSS-embedded-header-padding);
        display: flex;
        align-items: baseline;
        box-sizing: border-box;

        & .dokki0-expansion-indicator
        {
            margin-left: auto;
        }
    }

    .dokki0-expansion-indicator
    {
        padding-left: 10px;
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
    .dokkiCSS-container /* 'dokkikCSS-container' is an obsolete class name and will be removed in the future.*/
    {
        border-bottom-left-radius: calc(var(--dokkiCSS-embedded-border-radius) - 1px);
        border-bottom-right-radius: calc(var(--dokkiCSS-embedded-border-radius) - 1px);
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
            top: 0;
            left: calc(var(--dokkiCSS-embedded-horizontal-padding) - 3px);
            font-size: 80%;
            text-transform: uppercase;
            transform: translateY(-50%);
            padding: 3px;

            &.blocker
            {
                padding: 3px 5px;
                left: calc(var(--dokkiCSS-embedded-horizontal-padding) - 5px);
                top: -1px;
                background-color: var(--dokkiCSS-embedded-footer-bg-color);
                color: transparent;
                height: 0;
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
        hasContent: {type: Boolean, default: true},
        icon: {type: String, default: undefined},
        title: {required: true, type: String},
        plain: {default: undefined},
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
            this.expand_content();
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
        isPlain() {
            return (this.$props.plain !== undefined);
        },
    },
    methods: {
        expand_content() {
            if (this.hasContent && (typeof this.$refs["expander"] === 'object'))
            {
                this.$refs["expander"].expand({animate: false});
            }
        }
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

<api-reference lang="md">
TODO
</api-reference>
