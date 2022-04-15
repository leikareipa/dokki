/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<span v-if="isInline" class="dokki-tag-cloud inline">
    <span v-for="(tagName, idx) of tagNames">
        <a class="tag" @click="on_tag_click(tagName)">
            {{tagName}}
        </a><!--
        -->{{(idx == (tagNames.length - 1))? "" : ", "}}
    </span>
</span>

<dokki0-embedded-expandable v-else
    class-name="dokki-tag-cloud"
    icon="fas fa-tags"
    title="Tag cloud">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <a v-for="tagName of tagNames"
           class="tag"
           :style="{
               fontSize: tag_css_font_size_percent(tagName),
               lineHeight: `${this.maxSize / 100}rem`
           }"
           @click="on_tag_click(tagName)">

            {{tagName}}

        </a>

    </template>

</dokki0-embedded-expandable>
</template>

<style scoped lang="scss">
.tag
{
    cursor: pointer;
}
</style>

<style lang="scss">
.dokki0-embedded-expandable.dokki-tag-cloud
{
    border: none;
    background-color: var(--dokkiCSS-embedded-auxiliary-color);

    &:not(.inline) .tag
    {
        margin: 0 0.8rem;
        margin-left: 0;
    }

    .dokkiCSS-container
    {
        display: flex;
        flex-wrap: wrap;
    }

    header
    {
        border-radius: var(--dokkiCSS-embedded-border-radius);
        border: 1px solid var(--dokkiCSS-page-primary-line-color);
        background-color: var(--dokkiCSS-page-primary-bg-color);
    }

    &.dokkiCSS-expanded header,
    &.dokkiCSS-transitioning:not(.dokkiCSS-expanded) header
    {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
    }
}
</style>

<script>
export default {
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

<api-reference>
<p>TODO</p>
</api-reference>
