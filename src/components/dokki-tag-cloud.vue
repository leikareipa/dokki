/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<span v-if="isMounted && isInline" class="dokki-tag-cloud inline">
    <span v-for="tag of tagsInDocument">
        <a class="dokkiCSS-item" @click="on_tag_click(tag)">
            {{tag.name}}
        </a><!--
        -->{{(tag == tagsInDocument.at(-1))? "" : ", "}}
    </span>
</span>
<p v-else-if="isMounted && !isInline" class="dokki-tag-cloud">
    <a v-for="tag of tagsInDocument"
       class="dokkiCSS-item"
       :style="{fontSize: tag_font_size_px(tag)}"
       @click="on_tag_click(tag)"
    >
        {{tag.name}}
    </a>
</p>
</template>

<script>
export default {
    props: {
        inline: {default: undefined},
        minimumFontSize: {type: Number, default: 95},
        maximumFontSize: {type: Number, default: 220},
    },
    data() {
        return {
            isMounted: false,
            isInline: ((this.$props.inline === undefined)? false : true),
        }
    },
    mounted() {
        this.isMounted = true;
    },
    methods: {
        on_tag_click(tag) {
            window.dispatchEvent(
                new CustomEvent("dokki-tag-clicked", {
                    detail: tag.name,
                })
            );
        },
        tag_font_size_px(tag) {
            const [minCount, maxCount] = this.minMaxTagCount;
            const ratio = ((tag.count - minCount) / Math.max(1, (maxCount - minCount)));
            const fontSize = Math.ceil(this.minimumFontSize + (this.maximumFontSize - this.minimumFontSize) * ratio);
            return `${Math.max(this.minimumFontSize, Math.min(this.maximumFontSize, fontSize))}%`;
        },
    },
    computed: {
        tagsInDocument() {
            const tagEls = Array.from(document.querySelectorAll(".dokki-topic .dokki-tag"));
            const tagTexts = tagEls.map(el=>el.textContent.toLowerCase());
            const uniqueTags = Array.from(new Set(tagTexts)).sort();
            return uniqueTags.map(tag=>({
                name: tag,
                count: tagTexts.filter(t=>t==tag).length,
            }));
        },
        minMaxTagCount() {
            if (!this.tagsInDocument.length) {
                return [0, 0];
            }
            return [
                this.tagsInDocument.reduce((minCount, tag)=>(tag.count < minCount? tag.count : minCount), Infinity),
                this.tagsInDocument.reduce((maxCount, tag)=>(tag.count > maxCount? tag.count : maxCount), -Infinity)
            ];
        },
    },
}
</script>
