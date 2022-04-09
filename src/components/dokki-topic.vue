<template>
    <dokki0-topic v-if="reveal" :title="title">
        <slot/>
    </dokki0-topic>
</template>

<script>
export default {
    props: {
        title: {required: true, type: String},
    },
    data() {
        return {
            reveal: false,
        }
    },
    mounted()
    {
        this.$store.commit("queue_topic_reveal", ()=>{
            this.reveal = true;
        });
    },
}
</script>
