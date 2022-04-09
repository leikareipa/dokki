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
    props: {
        title: {required: true, type: String},
    },
    data() {
        return {
            globalTopicIdx: {default: -1},
        }
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
    /// TODO: Remove the topic from the store on deletion.
}
</script>
