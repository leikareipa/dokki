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
<p v-else class="dokki-tag-cloud">
    <a v-for="tagName of tagNames"
       class="dokkiCSS-item"
       :style="{fontSize: tag_css_font_size(tagName)}"
       @click="on_tag_click(tagName)"
    >
        {{tagName}}
    </a>
</p>
</template>

<script>
export default {
    props: {
        inline: {default: undefined},
        minSize: {type: Number, default: 95},
        maxSize: {type: Number, default: 220},
    },
    data() {
        return {
            isInline: ((this.$props.inline === undefined)? false : true),
        }
    },
    created() {
        this.$props.minSize = Number(this.$props.minSize);
        this.$props.maxSize = Number(this.$props.maxSize);
    },
    methods: {
        on_tag_click(tagName) {
            window.dispatchEvent(
                new CustomEvent("dokki-tag-clicked", {
                    detail: tagName,
                })
            );
        },
        tag_css_font_size(tagName) {
            if (!this.tags.hasOwnProperty(tagName)) {
                console.warn("Unknown tag", tagName);
                return "100%";
            }

            const tagCount = this.tags[tagName];
            const [minCount, maxCount] = this.minMaxTagCount;
            const ratio = ((tagCount - minCount) / Math.max(1, (maxCount - minCount)));
            const fontSize = Math.ceil(this.minSize + (this.maxSize - this.minSize) * ratio);
            return `${Math.max(this.minSize, Math.min(this.maxSize, fontSize))}%`;
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
