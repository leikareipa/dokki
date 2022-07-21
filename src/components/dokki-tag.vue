/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<a class="dokki-tag" @click="on_tag_clicked">

    <span class="name">

        <slot/>

    </span>

    <span class="count" v-if="globalCount">

        {{globalCount}}

    </span>

    <i v-else class="count fas fa-spin fa-spinner"></i>
</a>
</template>

<style lang="scss">
.dokki-tag
{
    text-transform: lowercase;
    cursor: pointer;
    margin: 6px 6px 0 0 !important;
    padding: 4px 10px;
    border-radius: var(--dokkiCSS-embedded-border-radius);
    font-size: 90%;
    white-space: nowrap;

    body[data-dokki-theme="light"] &
    {
        background-color: rgba(0, 100, 255, 0.09);
    }

    body[data-dokki-theme="dark"] &
    {
        background-color: rgba(255, 255, 255, 0.04);
    }

    .count
    {
        margin-left: 0.4em;
        opacity: 0.35;
        display: inline-block; /* Prevent underline on hover.*/
    }

    &:hover
    {
        text-decoration: none !important;
        color: inherit;
    }
}
</style>

<script>
export default {
    data() {
        return {
            // The number of tags by this name in the entire document.
            globalCount: 0,
        }
    },
    props: {
        // Whether to add this tag to the document's master list of tags.
        register: {default: true},
    },
    methods: {
        tag_name() {
            return this.$el?.querySelector?.(".name")?.textContent.toLowerCase();
        },
        on_tag_clicked() {
            window.dispatchEvent(new CustomEvent("dokki-tag-clicked", {detail: this.tag_name()}));
        },
    },
    computed: {
        hasRegister() {
            return ((this.register === "true") || (this.register == true));
        },
    },
    created() {
        window.addEventListener("dokki-topics-ready", ()=>{
            this.globalCount = (this.$store.state.tags[this.tag_name()] || 0);
        }, {once: true});
    },
    mounted() {
        if (this.hasRegister)
        {
            this.$store.commit("add_tag", this.tag_name());
        }
    },
    unmounted() {
        if (this.hasRegister)
        {
            this.$store.commit("remove_tag", this.tag_name());
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
