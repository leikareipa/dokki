/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<aside class="dokki-tag-filter" v-if="showHeader" ref="container">
    <div class="dokkiCSS-label">
        Showing all ({{numResults}}) {{entityName}} tagged
    </div>
    <div class="dokkiCSS-button"
         v-for="tagName of activeTags"
         @click="remove_tag(tagName)">
        {{tagName}}
    </div>
</aside>
</template>

<script>
// If the window.location.hash string starts with this string, the following characters
// in the hash string are tags.
const tagMarker = "#/";

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
        window.addEventListener("hashchange", this.hash_change_monitor);
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
            // tags to make sure all topics become visible and the desired topic scrolls
            // into view.
            if (!this.is_valid_tag_hash(hash)) {
                this.activeTags.length = 0; // Avoid triggering the watcher.
                this.showHeader = false;
                this.unhide_all_topic_elements();
                if (hash.length) {
                    const targetEl = document.querySelector(hash);
                    if (targetEl) {
                        targetEl.scrollIntoView();
                    }
                }
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
            this.$nextTick(()=>{
                const tagHeaderEl = this.$refs["container"];
                const style = getComputedStyle(document.body);
                const dokkiHeaderHeight = Number(style.getPropertyValue("--dokkiCSS-header-height").match(/\d+/)[0]);
                const dokkiElementVerticalSpacing = Number(style.getPropertyValue("--dokkiCSS-topic-bottom-margin").match(/\d+/)[0]);
                const topMargin = (dokkiHeaderHeight + dokkiElementVerticalSpacing);

                if (tagHeaderEl && (tagHeaderEl.getBoundingClientRect().bottom < topMargin)) {
                    tagHeaderEl.scrollIntoView(true);
                    window.scrollBy(0, -topMargin);
                }
                else if (!tagHeaderEl) {
                    window.scrollTo(0, 0);
                }

                update_topic_visibility();
            });
            
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
                .substring(tagMarker.length)
                .toLowerCase()
                .trim()
                .replaceAll("%20", " ");
        },
        is_valid_tag_hash(hash = "") {
            if (typeof hash !== "string") {
                console.warn("Expected tag hash to be a string", hash);
                return false;
            }

            return hash.startsWith(tagMarker);
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
                ? `${tagMarker}${tags.join(",")}`
                : " ";

            history.replaceState(null, null, newHash);
        },
    },
}
</script>
