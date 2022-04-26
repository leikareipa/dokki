/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<nav class="dokki-navi">

    <header>

        <span class="title">
            
            {{caption}}

        </span>

    </header>

    <span class="widgets" ref="widgets">

        <slot name="widgets"/>

    </span>

    <ul class="vertical-navi">

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
.dokki-navi
{
    box-sizing: border-box;
    position: fixed;
    z-index: 3;
    left: 0;
    width: var(--dokkiCSS-side-panel-width);
    text-align: left;
    overflow-y: auto;
    height: 100%;
    border-right: 1px solid var(--dokkiCSS-page-secondary-line-color);

    header
    {
        position: sticky;
        top: 0;
        z-index: 999999999;
        background-color: var(--dokkiCSS-page-inert-bg-color);
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        font-weight: var(--dokkiCSS-bold-text-weight);
        line-height: var(--dokkiCSS-content-line-height);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.55);
    }

    .dokki-user-element
    {
        align-items: center;
        margin: 0;
        padding: 14px 20px;
        background-color: var(--dokkiCSS-page-inert-bg-color);
        text-align: left;
        position: relative;
        top: 0;
        text-overflow: ellipsis;
        color: var(--dokkiCSS-page-secondary-fg-color);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
        transition: padding-top 0.15s ease;
    }

    .dokki-user-element.clickable:hover
    {
        padding-top: 25px;
        background-color: var(--dokkiCSS-navi-clickable-hover-bg-color);
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
        padding-left: var(--dokkiCSS-navibar-item-padding-horizontal);
        padding-right: var(--dokkiCSS-navibar-item-padding-horizontal);
        margin-top: 14px;

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
            border-radius: var(--dokkiCSS-embedded-border-radius);

            &:hover
            {
                color: var(--dokkiCSS-page-primary-fg-color);
                background-color: var(--dokkiCSS-embedded-auxiliary-color);
                text-decoration: none;
            }

            &.viewing,
            &.subtopic.viewing
            {
                color: var(--dokkiCSS-page-link-color);
            }

            &.subtopic
            {
                border-left: 1px solid transparent;
                margin-left: calc(1.5 * var(--dokkiCSS-navibar-item-padding-horizontal));
                padding-left: 1.25ch;
                color: var(--dokkiCSS-page-inert-fg-color);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }

    body[data-dokki-layout^="vertical"] &
    {
        width: 100%;
        height: unset;
        position: unset;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);

        header
        {
            position: unset;
        }

        .widgets,
        .vertical-navi
        {
            display: none;
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
        caption() {
            return (
                this.$slots["caption"]?.()[0]?.children ||
                "Untitled document"
            );
        },
    },
    created() {
        // Have the table of contents highlight the topics that are currently inside the viewport.
        window.addEventListener("dokki-topics-ready", ()=>{
            const observer = new IntersectionObserver(entries=>{
                for (const entry of entries) {
                    const id = entry.target.getAttribute("id");
                    const tocEl = document.querySelector(`.dokki-navi .vertical-navi a[href="#${id}"]`);
                    tocEl?.classList[entry.intersectionRatio? "add" : "remove"]("viewing");
                }
            });
            
            const targetEls = document.querySelectorAll(".dokki-topic, .dokki-subtopic");
            targetEls.forEach(el=>observer.observe(el));
        });

        document.title = this.caption;
    },
    mounted() {
        const widgetEls = (this.$refs["widgets"]?.children || []);
        for (let i = 0; i < widgetEls.length; i++)
        {
            widgetEls[i].style.zIndex = `${widgetEls.length-i}`;
            widgetEls[i].classList.add("dokki-user-element");
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
