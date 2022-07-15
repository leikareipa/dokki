/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<section class="dokki-subtopic" :id="anchor_id">

    <h2>

        <span class="idx">

            {{parentIdx}}.{{idx}}

        </span>

        {{this.title}}

    </h2>

    <slot/>

</section>
</template>

<style lang="scss">
.dokkiCSS-anchor.subtopic
{
    top: calc(-2 * var(--dokkiCSS-topic-vertical-padding));
}

.dokki-subtopic
{
    .idx
    {
        display: none;
        color: var(--dokkiCSS-page-inert-fg-color);
    }
}
</style>

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
            idx: {type: Number},
            parentIdx: {type: Number},
        }
    },
    created()
    {
        // We assume that this subtopic belongs to the most recently created topic;
        // and as such that topics are appended to the store's list of topics in the
        // order - and at the time - of their creation.
        const parentTopic = this.$store.state.topics[this.$store.state.topics.length - 1];
        console.assert(parentTopic, "Detected an orphaned subtopic.");

        this.anchorableId = simplified_topic_title(`${parentTopic.title} ${this.title}`);

        this.$store.commit("add_topic", {
            parentTopic,
            title: this.title,
            anchorId: this.anchor_id,
        });

        this.idx = parentTopic.subtopics.length;
        this.parentIdx = parentTopic.idx;
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
