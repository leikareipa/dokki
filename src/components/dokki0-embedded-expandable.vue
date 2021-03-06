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
       'groupbox': (headerWidget == 'groupbox'),
       'headerless': isHeaderless,
       'unpadded': isUnpadded,
       'has-after': hasAfter,
       'dokkiCSS-expanded': isExpanded,
       'dokkiCSS-transitioning': isTransitioning,
   }"
>

    <header v-if="!isHeaderless"
            @click="hasContent? this.$refs['expander'].toggle_expansion() : 0">

        <span class="caption">
        
            <span class="type">

                <span class="icon" v-if="icon !== undefined" :title="title">
                
                    <i :class="icon"/>
                
                </span>

                <span class="text">

                    {{title}}
                    
                </span>

            </span>

            <span class="label" v-if="hasCaption">

                <slot name="caption"/>

            </span>

        </span>

        <dokki0-expansion-indicator v-if="hasContent" :isExpanded="isExpanded" :isTransitioning="isTransitioning"/>

    </header>

    <dokki0-animated-expander
        v-if="hasContent"
        ref="expander"
        :start-expanded="isExpanded"
        @transitioning="isTransitioning = true"
        @expanded="isExpanded = true, isTransitioning = false"
        @minimized="isExpanded = false, isTransitioning = false"
    >

        <div class="content dokkiCSS-container first-level">

            <slot name="content"/>

        </div>

    </dokki0-animated-expander>

    <footer v-if="hasAfter">

        <slot name="after"/>
    
    </footer>

    <p v-if="isHeaderless && hasCaption" class="aside-caption">

        {{title}}:

        <slot name="caption"/>

    </p>

</p>
</template>

<style lang="scss">
.dokki0-embedded-expandable
{
    width: 100%;
    box-sizing: border-box;
    border-radius: var(--dokkiCSS-embedded-border-radius);
    background-color: var(--dokkiCSS-page-secondary-bg-color);
    overflow: hidden;
    margin: 22px 0;

    &:not(.headerless),
    &.has-after
    {
        border: 1px solid var(--dokkiCSS-page-primary-line-color);

        &:hover
        {
            border: 1px solid var(--dokkiCSS-page-secondary-fg-color);
        }
    }

    &.headerless
    {
        border-radius: 0;
    }

    &.unpadded
    {
        .content.first-level
        {
            padding: 0 !important;
            margin-top: var(--dokkiCSS-embedded-vertical-margin);
        }

        .dokki0-embedded-expandable
        {
            margin: 0 !important;
            border: none !important;
        }
    }

    &.has-content footer .dokki0-embedded-expandable
    {
        border-left: none;
        border-right: none;
        border-bottom: none;
        margin-top: 0;
        box-shadow: none;
    }

    &:not(.has-content) header
    {
        cursor: default;
    }

    .dokki0-expansion-indicator
    {
        margin-left: auto;
        padding-left: 10px;
    }

    header
    {
        cursor: pointer;
        user-select: none;
        font-weight: normal;
        padding: var(--dokkiCSS-embedded-header-padding);
        display: flex;
        align-items: center;
        box-sizing: border-box;

        .caption
        {
            .type
            {
                color: var(--dokkiCSS-page-link-color);
            
                .icon
                {
                    margin-right: 0.25em;
                }
            }

            .label
            {
                display: block;
                margin-top: 3px;
            }
        }

        &:hover
        {
            .caption
            {
                .type
                {
                    color: var(--dokkiCSS-page-secondary-fg-color);
                }
            }
        }
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

    .content.first-level,
    .dokkiCSS-container /* 'dokkikCSS-container' is an obsolete class name and will be removed in the future.*/
    {
        overflow: hidden;
        margin: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);

        & + &
        {
            padding: 0 !important;
        }

        & > .dokki-area
        {
            overflow: auto;
        }
    }

    &:not(.headerless) > .dokki0-animated-expander > .content.first-level
    {
        margin-top: calc(0.5 * var(--dokkiCSS-embedded-vertical-padding));
    }

    &.headerless > .dokki0-animated-expander > .content.first-level
    {
        margin: 0;
        border: none;
    }
    
    &.groupbox
    {
        position: relative;

        .title
        {
            position: absolute;
            top: 0;
            left: calc(var(--dokkiCSS-embedded-horizontal-padding) - 3px);
            text-transform: uppercase;
            transform: translateY(-50%);
            padding: 3px;
        }
    }

    .aside-caption
    {
        font-size: 0.875em;
        margin-top: 1ex;
        color: var(--dokkiCSS-page-inert-fg-color);
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
        className: {required: true, type: String},
        inlineClass: {type: String, default: ""},
        hasContent: {type: Boolean, default: true},
        icon: {type: String, default: undefined},
        title: {required: true, type: String},
        unpadded: {default: undefined},
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
        isUnpadded() {
            return (this.$props.unpadded !== undefined);
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
