/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<span v-if="isInline" class="dokki-tag-cloud inline">
    <span v-for="(tagName, idx) of tagNames">
        <a class="dokkiCSS-item" @click="on_tag_click(tagName)">
            {{tagName}}
        </a><!--
        -->{{(idx == (tagNames.length - 1))? "" : ", "}}
    </span>
</span>
<p v-else
   class="dokkiCSS-embedded dokki-tag-cloud dokkiCSS-expandable dokkiCSS-groupbox"
   :class="{
        'dokkiCSS-expanded': isExpanded,
        'dokkiCSS-transitioning': isTransitioning,
    }">

    <header @click="this.$refs['tag-cloud-expander'].toggle_expansion()">

        <span class="dokkiCSS-groupbox-title">
            <i class="fas fa-sm fa-tags"/>
            Tag cloud
        </span>

        <span class="dokkiCSS-title">
            <span>
                <slot v-if="hasCaption" name="caption"/>
                <span v-else>Tag cloud</span>
            </span>
        </span>

        <dokki0-expansion-indicator :isExpanded="isExpanded"/>

    </header>
    
    <dokki0-animated-expander ref="tag-cloud-expander"
                              :start-expanded="isExpanded"
                              @transitioning="isTransitioning = true"
                              @expanded="isExpanded = true, isTransitioning = false"
                              @minimized="isExpanded = false, isTransitioning = false">

        <div class="dokkiCSS-container">

            <a v-for="tagName of tagNames"
               class="dokkiCSS-item"
               :style="{
                   fontSize: tag_css_font_size_percent(tagName),
                   lineHeight: `${this.maxSize / 100}rem`
               }"
               @click="on_tag_click(tagName)">

                {{tagName}}

            </a>

        </div>

    </dokki0-animated-expander>
    
</p>
</template>

<script>
import {expandedPropMixin} from "../component-mixins.js";

export default {
    mixins: [
        expandedPropMixin,
    ],
    props: {
        inline: {default: undefined},

        // The CSS font size of the least common (minimum) and most common (maximum) tag, given
        // as a number representing percentages (e.g. "font-size: XXX%"). The rest of the tags'
        // font sizes will be along this range.
        minSize: {type: [Number, String], default: 95},
        maxSize: {type: [Number, String], default: 220},
    },
    data() {
        return {
            isInline: ((this.$props.inline === undefined)? false : true),
            isTransitioning: false,
        }
    },
    methods: {
        on_tag_click(tagName) {
            window.dispatchEvent(
                new CustomEvent("dokki-tag-clicked", {
                    detail: tagName,
                })
            );
        },
        tag_css_font_size_percent(tagName) {
            if (!this.tags.hasOwnProperty(tagName)) {
                console.warn("Unknown tag", tagName);
                return "100%";
            }

            // The prop sizes may be strings or numbers, depending on how they were passed into the
            // component as props, so let's convert to make sure we know what we're working with.
            const minSize = Number(this.$props.minSize);
            const maxSize = Number(this.$props.maxSize);

            const tagCount = this.tags[tagName];
            const [minCount, maxCount] = this.minMaxTagCount;
            const ratio = ((tagCount - minCount) / Math.max(1, (maxCount - minCount)));
            const fontSize = Math.ceil(minSize + (maxSize - minSize) * ratio);
            return `${Math.max(minSize, Math.min(maxSize, fontSize))}%`;
        },
    },
    computed: {
        hasCaption()
        {
            return !!this.$slots.caption;
        },
        tags() {
            return this.$store.state.tags;
        },
        tagNames() {
            return Object.keys(this.$store.state.tags).sort();
        },
        minMaxTagCount() {
            return [
                Object.values(this.tags).reduce((minCount, count)=>(count < minCount? count : minCount), Infinity),
                Object.values(this.tags).reduce((maxCount, count)=>(count > maxCount? count : maxCount), -Infinity)
            ];
        },
    },
}
</script>
