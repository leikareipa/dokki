/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokkiCSS-anchor subtopic"
          :id="anchor_id">
    </span>

    <h2>{{this.title}}</h2>
    
    <slot/>
</template>

<style lang="scss">
.dokkiCSS-anchor.subtopic
{
    top: calc(-1*var(--dokkiCSS-header-height) - var(--dokkiCSS-topic-vertical-padding));
}
</style>

<script>
import {simplified_topic_title} from "../misc.js";
import {topicAnchorIdMixin} from "../component-mixins.js";

export default {
    mixins: [topicAnchorIdMixin],
    props: ["title"],
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
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
