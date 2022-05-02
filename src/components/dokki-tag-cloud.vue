/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
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
    .tag
    {
        margin: 0 0.8rem;
        margin-left: 0;
    }

    .content.first-level
    {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>

<script>
export default {
    props: {
        // The CSS font size of the least common (minimum) and most common (maximum) tag, given
        // as a number representing percentages (e.g. "font-size: XXX%"). The rest of the tags'
        // font sizes will be along this range.
        minSize: {type: [Number, String], default: 95},
        maxSize: {type: [Number, String], default: 220},
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

<api-reference lang="md">
TODO
</api-reference>
