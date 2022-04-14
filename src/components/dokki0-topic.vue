/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokkiCSS-anchor topic"
          :id="anchor_id">
    </span>

    <section class="dokki-topic">
    
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
    border: 1px solid var(--dokkiCSS-page-primary-line-color);
    border-radius: 4px;

    body[data-dokki-layout="vertical-narrow"] &
    {
        border: none;
        border-radius: 0;

        .dokkiCSS-topic-title
        {
            hyphens: auto;

            & + .dokki-hr
            {
                visibility: hidden;
                margin-top: 0;
                margin-bottom: var(--dokkiCSS-topic-bottom-margin);
            }
        }
    }
}

.dokkiCSS-anchor.topic
{
    top: calc(-1*var(--dokkiCSS-header-height) - 16px);
}
</style>

<style lang="scss">
.dokki-topic
{
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
        margin-top: var(--dokkiCSS-topic-header-top-margin);
        font-size: 135%;
    }

    h3
    {
        font-size: 100%;
        display: inline;
        font-weight: var(--dokkiCSS-bold-text-weight);
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
        border-bottom: 1px solid var(--dokkiCSS-page-primary-line-color);
        width: calc(100% + calc(2 * var(--dokkiCSS-topic-horizontal-padding)));
        transform: translateX(calc(-1 * var(--dokkiCSS-topic-horizontal-padding)));
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

<api-reference>
<p>TODO</p>
</api-reference>
