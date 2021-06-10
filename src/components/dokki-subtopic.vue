/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokkiCSS-anchor dokkiCSS-anchor-subtopic"
          :id=this.selfMeta.simplifiedTitle>
    </span>

    <h2>{{this.title}}</h2>
    
    <slot/>
</template>

<script>
import {simplified_topic_title} from "../misc.js";

export default {
    props: ["title"],
    data() {
        return {
            selfMeta: undefined,
        }
    },
    created()
    {
        // We assume that this subtopic belongs to the most recently created topic;
        // and as such that topics are appended to the store's list of topics in the
        // order - and at the time - of their creation.
        const parentTopic = this.$store.state.topics[this.$store.state.topics.length - 1];
        console.assert(parentTopic, "Detected an orphaned subtopic.");

        const combinedTitle = `${parentTopic.title} ${this.title}`;

        this.selfMeta = {
            title: this.title,
            parentTopic: parentTopic,
            simplifiedTitle: simplified_topic_title(combinedTitle),
            url: `#${simplified_topic_title(combinedTitle)}`,
        };

        this.$store.commit("add_subtopic", this.selfMeta);
    },
}
</script>
