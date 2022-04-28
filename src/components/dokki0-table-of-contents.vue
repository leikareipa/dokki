/*
 * 2022 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<nav class="dokki0-table-of-contents">

    <ul class="contents" ref="toc">

        <li v-for="(topic, topicIdx) in topics">

            <a :href="topic.url"
                class="navi-link topic">
                
                <span class="label">
                    {{topic.title}}
                </span>

            </a>

            <a v-for="(subtopic, subtopicIdx) in topic.subtopics"
            :href="subtopic.url"
            class="navi-link subtopic">

                <span class="label">
                    {{subtopic.title}}
                </span>
                
            </a>

        </li>

    </ul>

</nav>
</template>

<style lang="scss">
.dokki0-table-of-contents
{
    .contents
    {
        list-style-type: none;
        padding: 15px 0;
        margin: 0;

        li
        {
            padding: 0;
        }

        .label
        {
            display: flex;
            align-items: center;
        }

        .navi-link
        {
            display: block;
            padding: var(--dokkiCSS-navibar-item-padding-vertical) var(--dokkiCSS-navibar-item-padding-horizontal);
            white-space: normal;
            text-decoration: none;
            color: var(--dokkiCSS-page-secondary-fg-color);
            display: flex;
            position: relative;

            &:hover
            {
                text-decoration: underline;
            }

            &.viewing,
            &.subtopic.viewing
            {
                background-color: var(--dokkiCSS-navi-clickable-hover-bg-color);
            }

            &.subtopic
            {
                padding-left: calc(1.5 * var(--dokkiCSS-navibar-item-padding-horizontal) + 1.25ch);;
                color: var(--dokkiCSS-page-inert-fg-color);
            }
        }
    }
}
</style>

<script>
export default {
    computed: {
        topics()
        {
            return this.$store.state.topics;
        },
    },
    created() {
        // Have the table of contents highlight the topics that are currently inside the viewport.
        window.addEventListener("dokki-topics-ready", ()=>{
            window.addEventListener("scroll", ()=>{
                const observer = new IntersectionObserver(entries=>{
                    for (const entry of entries) {
                        const id = entry.target.getAttribute("id");
                        const tocEl = this.$refs["toc"].querySelector(`a[href="#${id}"]`);
                        tocEl?.classList[entry.intersectionRatio? "add" : "remove"]("viewing");
                    }
                });
                
                const targetEls = document.querySelectorAll(".dokki-topic, .dokki-subtopic");
                targetEls.forEach(el=>observer.observe(el));
            }, {once: true});
        });
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
