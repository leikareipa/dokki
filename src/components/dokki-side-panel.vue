/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<nav class="dokki-side-panel">

    <slot/>

    <ul class="vertical-navi">

        <li v-for="(topic, topicIdx) in topics">

            <a :href="topic.url"
                class="navi-link topic">

                <span class="icon">
                    {{topicIdx + 1}}
                </span>
                
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
.dokki-side-panel
{
    box-sizing: border-box;
    position: fixed;
    z-index: 3;
    top: var(--dokkiCSS-header-height);
    left: 0;
    width: var(--dokkiCSS-side-panel-width);
    text-align: left;
    overflow-y: auto;
    height: calc(100% - var(--dokkiCSS-header-height));
    padding-top: 13px;

    .dokkiCSS-user-element
    {
        min-height: var(--dokkiCSS-header-height);
        align-items: center;
        margin: 0;
        padding: var(--dokkiCSS-navibar-item-padding-vertical) var(--dokkiCSS-navibar-item-padding-horizontal);
        background-color: var(--dokkiCSS-page-inert-bg-color);
        text-align: left;
        position: relative;
        top: 0;
        text-overflow: ellipsis;
        color: var(--dokkiCSS-page-secondary-fg-color);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        margin-left: calc(0.5 * var(--dokkiCSS-navibar-item-padding-horizontal));
        margin-right: calc(0.5 * var(--dokkiCSS-navibar-item-padding-horizontal));
        border-radius: 4px;
    }

    .dokkiCSS-user-element:last-of-type
    {
        margin-bottom: 10px;
    }

    h2
    {
        font-size: 100%;
        font-weight: normal;
        padding: 0;
        margin: 0;
        margin-bottom: var(--dokkiCSS-topic-bottom-margin);
        color: var(--dokkiCSS-page-primary-fg-color);
    }

    li
    {
        padding: 0;
    }

    .vertical-navi
    {
        list-style-type: none;
        padding: 0;
        margin: 0;
        padding-left: calc(0.5 * var(--dokkiCSS-navibar-item-padding-horizontal));
        padding-right: calc(0.5 * var(--dokkiCSS-navibar-item-padding-horizontal));

        .icon
        {
            background-color: var(--dokkiCSS-page-primary-bg-color);
            border: 1px solid var(--dokkiCSS-page-primary-line-color);
            border-radius: var(--dokkiCSS-embedded-border-radius);
            padding: 2px 5px;
            display: flex;
            margin-right: 0.75ch;
            z-index: 1;
            justify-content: center;
            color: var(--dokkiCSS-page-inert-fg-color);
            font-size: 95%;
            min-width: 2ch;
        }

        a:hover .icon
        {
            color: var(--dokkiCSS-page-secondary-fg-color);
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
            border-radius: 4px;

            &:hover
            {
                color: var(--dokkiCSS-page-primary-fg-color);
                background-color: var(--dokkiCSS-embedded-auxiliary-color);
                text-decoration: none;
            }
        }

        .subtopic
        {
            border-left: 1px solid transparent;
            margin-left: calc(var(--dokkiCSS-navibar-item-padding-horizontal) + 9px + 0.5ch);
            padding-left: 1.25ch;
            color: var(--dokkiCSS-page-inert-fg-color);
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            &:not(:last-child)
            {
                border-left: 1px solid var(--dokkiCSS-page-primary-line-color);
            }

            &:last-child
            {
                border-bottom-left-radius: 4px;
            }

            &::before
            {
                content: "";
                position: absolute;
                left: -1px;
                top: -13px;
                border-left: 1px solid var(--dokkiCSS-page-primary-line-color);
                height: 25px;
            }

            &::after
            {
                background-color: var(--dokkiCSS-page-primary-bg-color);
                border: 1px solid var(--dokkiCSS-page-primary-line-color);
                border-radius: 100%;
                content: "";
                left: -6px;
                padding: 4.5px;
                position: absolute;
                top: 9px;
                z-index: 1;
            }
        }
    }

    body[data-dokki-layout^="vertical"] &
    {
        display: none;
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
        productName()
        {
            const name = (this.$store.state.productName !== undefined)
                            ? this.$store.state.productName
                            : "";

            const version = (this.$store.state.productVersion !== undefined)
                            ? this.$store.state.productVersion
                            : "";

            if (name.length && !version.length) {
                return name;
            }

            if (!name.length && version.length) {
                return version;
            }

            if (name.length && version.length) {
                return `${name} ${version}`;
            }

            return undefined;
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
