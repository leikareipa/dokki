/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<section class="dokki-topic" :id="anchor_id">

    <h1 class="dokkiCSS-topic-title">
        {{this.title}}
    </h1>

    <dokki-hr/>

    <slot/>

</section>
</template>

<style lang="scss">
.dokki-topic
{
    background-color: var(--dokkiCSS-page-primary-bg-color);
    padding: var(--dokkiCSS-topic-vertical-padding) var(--dokkiCSS-topic-horizontal-padding);
    box-sizing: border-box;
    margin: 0;
    margin-bottom: var(--dokkiCSS-topic-bottom-margin);
    width: 100%;
    border: 1px solid var(--dokkiCSS-page-secondary-line-color);
    border-radius: 0;

    p
    {
        line-height: var(--dokkiCSS-content-line-height);
    }

    a,
    a:visited
    {
        text-decoration: none;
        color: var(--dokkiCSS-page-link-color);
    }

    a:hover,
    a:visited:hover
    {
        text-decoration: underline;
    }

    &:last-of-type,
    & > :last-child
    {
        margin-bottom: 0;
    }

    ul
    {
        padding-inline-start: calc(1em + var(--dokkiCSS-embedded-horizontal-padding));
    }

    li
    {
        margin-top: 10px;
        line-height: 1.4;
    }

    h1,
    h2,
    h3,
    h4
    {
        font-size: 100%;
        font-weight: normal;
        padding: 0;
        margin: 0;
        margin-bottom: var(--dokkiCSS-topic-bottom-margin);
        color: var(--dokkiCSS-page-primary-fg-color);
    }

    h1
    {
        font-size: 170%;
        font-weight: var(--dokkiCSS-bold-text-weight);
        margin-top: var(--dokkiCSS-topic-header-top-margin);

        &.dokkiCSS-topic-title
        {
            margin-top: 0;
            margin-bottom: 0;
            padding: 0;
        }
    }

    h2
    {
        margin-top: var(--dokkiCSS-topic-header-top-margin) !important;
        font-size: 135%;
    }

    h3
    {
        font-size: 110%;
        font-weight: var(--dokkiCSS-bold-text-weight);
        margin-top: 25px;
        margin-bottom: 16px;
    }

    h4
    {
        font-size: 100%;
        display: inline;
        font-weight: normal;
        font-style: italic;
    }

    & > .dokki-hr
    {
        border: none;
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
        width: calc(100% + calc(2 * var(--dokkiCSS-topic-horizontal-padding)));
        transform: translateX(calc(-1 * var(--dokkiCSS-topic-horizontal-padding)));
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        border-radius: 0;
        margin-bottom: 0;

        .dokkiCSS-topic-title
        {
            hyphens: auto;
            margin-bottom: 0;

            & + .dokki-hr
            {
                display: none;
            }
        }
    }
}
</style>

<script>
import {simplified_topic_title} from "../misc.js";
import {topicAnchorIdMixin} from "../component-mixins.js";

export default {
    mixins: [topicAnchorIdMixin],
    props: {
        title: {required: true, type: String},
    },
    data() {
        return {
            globalTopicIdx: {default: -1},
        }
    },
    created()
    {
        this.anchorableId = simplified_topic_title(this.title);

        this.$store.commit("add_topic", {
            title: this.title,
            anchorId: this.anchor_id,
        });

        this.globalTopicIdx = this.$store.state.topics.length;
    },
    /// TODO: Remove the topic from the store on deletion.
}
</script>

<api-reference lang="md">
TODO
</api-reference>
