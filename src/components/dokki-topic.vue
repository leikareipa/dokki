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
    
        <h1>{{this.title}}</h1>

        <slot/>

    </section>
</template>

<script>
export default {
    props: ["title"],
    data() {
        return {
            idx: -1,
        }
    },
    computed: {
        simplifiedTitle()
        {
            return (this.idx < 1)
                   ? ""
                   : this.$store.state.topics[this.idx-1].simplifiedTitle;
        },
    },
    created()
    {
        this.$store.commit("add_topic", this.title);
        this.idx = this.$store.state.topics.length;
    },
}
</script>
