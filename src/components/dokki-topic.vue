<template>
<transition name="vue-fade" appear>
    <dokki0-topic-skeleton v-if="!areTopicsReady"/>
</transition>
<dokki0-topic v-if="reveal" :title="title" :id="id" :idx="idx">
    <slot/>
</dokki0-topic>
</template>

<script>
export default {
    props: {
        title: {required: true, type: String},
        id: {type: String, default: undefined},
    },
    data() {
        return {
            idx: 0,
            reveal: false,
        }
    },
    computed: {
        areTopicsReady() {
            return this.$store.state.areTopicsReady;
        },
    },
    mounted()
    {
        this.$store.commit("queue_topic_reveal", ()=>{
            this.reveal = true;
        });
        
        this.idx = this.$store.state.dokkiTopic.lifetimeCount;
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
