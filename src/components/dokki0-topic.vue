/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<section
    class="dokki-topic"
    :class="{
       [inlineClass]: true,
    }"
    :style="{
        zIndex: this.idx,
    }"
    :id="anchor_id"
>

    <h1 class="dokkiCSS-topic-title">

        <span v-if="faIcon" class="icon">

            <i :class="faIcon"/>&nbsp;

        </span>

        <span class="idx">

            {{this.idx}}

        </span>
        
        {{this.title}}

    </h1>

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
    width: 100%;
    border-radius: 0;

    .idx
    {
        display: none;
        color: var(--dokkiCSS-page-inert-fg-color);
    }

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
        margin: var(--dokkiCSS-topic-heading-vertical-margin) 0 !important;
        color: var(--dokkiCSS-page-primary-fg-color);
    }

    h1
    {
        font-size: 180%;

        &.dokkiCSS-topic-title
        {
            margin-top: 0 !important;
            padding: 0;
        }
    }

    h2
    {
        font-size: 150%;
    }

    h3
    {
        font-size: 105%;
        font-weight: var(--dokkiCSS-bold-text-weight);
    }

    h4
    {
        font-size: 100%;
        font-weight: normal;
        font-style: italic;
    }

    body[data-dokki-layout="horizontal-narrow"] &,
    body[data-dokki-layout^="vertical"] &
    {
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
        border-bottom: none;
    }

    body[data-dokki-layout="vertical-narrow"] &
    {
        border-radius: 0;
        margin-bottom: 0;

        .dokkiCSS-topic-title
        {
            margin-bottom: 0;
        }

        h1,
        h2,
        h3,
        h4
        {
            hyphens: auto;
            overflow-wrap: break-word;
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
        idx: {required: true, type: Number},
        inlineClass: {type: String, default: ""},
        faIcon: {type: String, default: undefined},
    },
    created()
    {
        console.assert(this.idx < window.getComputedStyle(document.body).getPropertyValue("--dokkiCSS-maximum-z-index"));

        this.anchorableId = simplified_topic_title(this.title);

        this.$store.commit("add_topic", {
            title: this.title,
            anchorId: this.anchor_id,
        });
    },
    /// TODO: Remove the topic from the store on deletion.
}
</script>

<api-reference lang="md">
TODO
</api-reference>
