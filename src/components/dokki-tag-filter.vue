/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki-area inline-class="dokki-tag-filter" v-if="showHeader">

    <div class="container">

        <div class="label">

            Showing all ({{numResults}}) {{entityName}} tagged
            
        </div>

        <div class="button"
            v-for="tagName of activeTags"
            @click="remove_tag(tagName)">

            {{tagName}}

        </div>

    </div>

</dokki-area>
</template>

<style lang="scss">
.dokki-tag-filter
{
    margin: var(--dokkiCSS-topic-bottom-margin) 0;
    position: sticky;
    top: 0;
    z-index: 1;
}
</style>

<style lang="scss" scoped>
.container
{
    display: flex;
    align-items: center;
    padding: 15px;
    width: 100%;
    justify-content: left;
    font-weight: 500;
    flex-wrap: wrap;
    box-sizing: border-box;
    background-color: var(--dokkiCSS-page-inert-bg-color); 
    border-radius: 4px;
    box-shadow: 0 0px 8px -2px rgba(0, 0, 0, 0.5);

    .label
    {
        margin-right: 8px;
    }

    .button
    {
        cursor: pointer;
        background: linear-gradient(#256eff, #1d59d1);
        color: white;
        padding: 4px 6px;
        border-radius: 4px;
        border: 1px solid #2264e8;
        display: inline-flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 90%;
        margin: 4px 0px;

        &:not(:last-of-type)
        {
            margin-right: 8px;
        }

        &::after
        {
            font-family: "Font Awesome 5 Free";
            font-weight: bold;
            content: "\f55a";
            margin-left: 6px;
            font-size: 95%;
            opacity: 0.8;
        }

        &:hover::after
        {
            opacity: 1;
        }
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        border-radius: 0;
        display: block;

        header
        {
            border: none;
            border-bottom: 1px solid var(--dokkiCSS-page-primary-line-color);
            line-height: normal;
        }

        .label
        {
            margin-right: 0;
            margin-bottom: 6px;
        }
    }
}
</style>

<script>
// E.g. "c++,javascript,python".split(tagSeparator) -> ["c++", "javascript", "python"].
const tagSeparator = ",";

export default {
    props: {
        entityName: {type: String, default: "topics"},
    },
    data() {
        return {
            activeTags: [],
            showHeader: false,
            numResults: 0,
        }
    },
    mounted() {
        window.addEventListener("dokki0-hash-router-updated-tag-hash", this.hash_change_monitor);
        window.addEventListener("dokki-tag-clicked", (event)=>this.add_tag(event.detail));
        this.$nextTick(this.hash_change_monitor);
    },
    watch: {
        activeTags() {
            this.apply_tags_to_topic_visibility(this.activeTags);
            return;
        }
    },
    methods: {
        hash_change_monitor() {
            const hash = window.location.hash;

            // If this isn't a valid tag hash, assume the user is trying to navigate to a
            // particular topic via the navi bar. In that case, we want to clear the active
            // tags to make sure all topics become visible, so that the page can scroll to
            // the desired one.
            if (!this.is_valid_tag_hash(hash)) {
                this.activeTags.length = 0; // Avoid triggering the watcher.
                this.showHeader = false;
                this.unhide_all_topic_elements();
                return;
            }

            this.activeTags = this.tags_from_hash(hash);
        },
        find_all_topic_elements() {
            return Array.from(document.querySelectorAll(".dokki-topics > .dokki-topic"));
        },
        unhide_all_topic_elements() {
            const els = this.find_all_topic_elements();
            els.forEach(el=>el.style.display="initial");
            return els;
        },
        apply_tags_to_topic_visibility(tags = []) {
            console.assert(Array.isArray(tags));

            // Hides any topics that don't match all of the given tags.
            const update_topic_visibility = ()=>{
                this.update_hash(tags);
                    
                const topicEls = this.unhide_all_topic_elements();
                this.numResults = topicEls.length;

                if (this.activeTags.length) {
                    for (const topic of topicEls) {
                        const topicTags = Array.from(topic.querySelectorAll(".dokki-topic .dokki-tag")).map(el=>el.textContent.toLowerCase());
                        if (!this.activeTags.every(tag=>topicTags.includes(tag))) {
                            topic.style.display = "none";
                        }
                    }
                }

                this.showHeader = Boolean(this.activeTags.length);
                this.numResults = topicEls.reduce((count, el)=>(count + ~~(el.style.display !== "none")), 0);
            }

            this.showHeader = true;
            update_topic_visibility();
            
            return;
        },
        // E.g. "c++,javascript,thing" -> ["c++", "javascript", "thing"].
        tags_from_hash(hash = "") {
            console.assert(this.is_valid_tag_hash(hash));

            let tagString = this.tag_string_from_hash(hash);

            if (!this.is_valid_tag_string(tagString)) {
                return this.activeTags;
            }

            /// TODO: Use an actual HTML entity decoder.
            tagString = tagString.replaceAll("%20", " ");
            
            const tags = Array.from(new Set(tagString.trim().split(tagSeparator).filter(tag=>tag.length)));

            if (!this.are_valid_tags(tags)) {
                this.update_hash(this.activeTags);
                return this.activeTags;
            }
            
            return tags;
        },
        // E.g. "#/c++,two%20words" -> "c++,two words".
        tag_string_from_hash(string = "") {
            console.assert(typeof string == "string");

            return string
                .substring(this.tagMarker.length)
                .toLowerCase()
                .trim()
                .replaceAll("%20", " ");
        },
        is_valid_tag_hash(hash = "") {
            if (typeof hash !== "string") {
                console.warn("Expected tag hash to be a string", hash);
                return false;
            }

            return hash.startsWith(this.tagMarker);
        },
        is_valid_tag_string(string = "") {
            if (typeof string !== "string") {
                console.warn("Expected tag to be a string", string);
                return false;
            }

            if (!string.length) {
                console.warn("Empty tag", string);
                return false;
            }

            return true;
        },
        are_valid_tags(tags = []) {
            if (!Array.isArray(tags)) {
                console.warn("Invalid tags", tags);
                return false;
            }

            if (tags.length > 999) {
                console.warn("Too many tags", tags.length);
                return false;
            }

            if (tags.join("").match(/[^a-zA-Z0-9+-\s#\.]/)) {
                console.warn("Illegal characters in one or more tags", tags);
                return false;
            }

            return true;
        },
        remove_tag(tag = "") {
            this.activeTags = this.activeTags.filter(existingTag=>existingTag != tag);
        },
        add_tag(tag = "") {
            console.assert(typeof tag === "string");

            tag = tag.toLowerCase();

            if (this.activeTags.some(existingTag=>existingTag.toLowerCase() == tag.toLowerCase())) {
                return;
            }

            this.activeTags = [...this.activeTags, tag];
        },
        update_hash(tags = []) {
            console.assert(Array.isArray(tags));

            const newHash = tags.length
                ? `${this.tagMarker}${tags.join(",")}`
                : " ";

            history.replaceState(null, null, newHash);
        },
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
