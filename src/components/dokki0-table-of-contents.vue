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
                    {{topicIdx+1}}&nbsp; {{topic.title}}
                </span>

            </a>

            <a v-for="(subtopic, subtopicIdx) in topic.subtopics"
            :href="subtopic.url"
            class="navi-link subtopic">

                <span class="label">
                    {{topicIdx+1}}.{{subtopicIdx+1}}&nbsp; {{subtopic.title}}
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


            &.subtopic
            {
                padding-left: calc(var(--dokkiCSS-navibar-item-padding-horizontal) + 1em);
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
}
</script>

<api-reference lang="md">
TODO
</api-reference>
