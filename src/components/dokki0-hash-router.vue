<template>
</template>

<script>
export default {
    mounted() {
        ["hashchange", "dokki-topics-ready"].forEach(event=>{
            window.addEventListener(event, ()=>{
                // We want the tag filter (if it exists in the document) to first inspect the hash
                // and update topic visibilities. We then want the page to be navigated to the
                // proper position in case the hash is a topic id and not a tag.
                window.dispatchEvent(new CustomEvent("dokki0-hash-router-updated-tag-hash"));
                window.dispatchEvent(new CustomEvent("dokki0-hash-router-updated-navi-hash"));
            });
        });

        window.addEventListener("dokki0-hash-router-updated-navi-hash", ()=>{
            const hash = window.location.hash;
            if ((hash.length > 1) && !hash.startsWith(this.tagMarker)) {
                const targetEl = document.querySelector(hash);
                if (targetEl) {
                    targetEl.scrollIntoView({behavior: "smooth"});
                }
            }
        });
    },
    computed: {
        tagMarker() {
            return this.$store.state.tagHashMarker;
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
