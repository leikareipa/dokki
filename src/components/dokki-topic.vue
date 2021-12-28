/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokkiCSS-anchor dokkiCSS-anchor-topic"
          :id="anchor_id">
    </span>

    <section class="dokki-topic">
    
        <h1 class="dokkiCSS-topic-title">
            {{this.title}}
        </h1>

        <dokki-hr/>

        <slot/>

    </section>
</template>

<script>
import {simplified_topic_title} from "../misc.js";
import {topicAnchorIdMixin} from "../component-mixins.js";

export default {
    mixins: [topicAnchorIdMixin],
    props: ["title"],
    data() {
        return {
            globalTopicIdx: {default: -1},
        }
    },
    computed: {
        simplifiedTitle()
        {
            return (this.globalTopicIdx < 1)
                   ? ""
                   : this.$store.state.topics[this.globalTopicIdx-1].simplifiedTitle;
        },
    },
    created()
    {
        this.anchorableId = simplified_topic_title(this.title);

        this.$store.commit("add_topic", {
            title: this.title,
            anchorId: this.anchor_id,
        });

        this.globalTopicIdx = this.$store.state.topics.length;
    },
}
</script>
