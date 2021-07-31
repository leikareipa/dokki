/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokkiCSS-anchor dokkiCSS-anchor-topic"
          :id="simplifiedTitle">
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
export default {
    props: ["title"],
    data() {
        return {
            globalTopicIdx: -1,
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
        this.$store.commit("add_topic", this.title);
        this.globalTopicIdx = this.$store.state.topics.length;
    },
}
</script>
