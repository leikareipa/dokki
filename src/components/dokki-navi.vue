/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<aside class="dokki-navi">

    <header>
            
        {{caption}}

        <dokki0-page-load-progress-bar/>

    </header>

    <section class="widgets" ref="widgets">

        <dokki0-theme-selector/>

        <slot name="widgets"/>

    </section>

    <transition name="vue-fade" appear>

        <nav v-if="areTopicsReady">

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

    </transition>

</aside>
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
        color: var(--dokkiCSS-page-primary-fg-color);
        position: relative;
        font-weight: var(--dokkiCSS-bold-text-weight);
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        line-height: var(--dokkiCSS-content-line-height);
    }

    .widgets
    {
        border-top: 1px solid var(--dokkiCSS-page-secondary-line-color);
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);
        padding: 10px 0;

        .dokki-user-element
        {
            align-items: center;
            margin: 0;
            padding: 12px 20px;
            background-color: var(--dokkiCSS-page-inert-bg-color);
            text-align: left;
            position: relative;
            text-overflow: ellipsis;
            color: var(--dokkiCSS-page-secondary-fg-color);
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }

        .dokki-user-element.clickable
        {
            cursor: pointer;
        }

        .dokki-user-element.clickable:hover
        {
            background-color: var(--dokkiCSS-navi-clickable-hover-bg-color);
        }
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
        padding: 15px 0;
        margin: 0;

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

    body[data-dokki-layout^="vertical"] &
    {
        width: 100%;
        height: unset;
        position: unset;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--dokkiCSS-page-secondary-line-color);

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
        areTopicsReady() {
            return this.$store.state.areTopicsReady;
        },
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
            window.addEventListener("scroll", ()=>{
                const observer = new IntersectionObserver(entries=>{
                    for (const entry of entries) {
                        const id = entry.target.getAttribute("id");
                        const tocEl = document.querySelector(`.dokki-navi .vertical-navi a[href="#${id}"]`);
                        tocEl?.classList[entry.intersectionRatio? "add" : "remove"]("viewing");
                    }
                });
                
                const targetEls = document.querySelectorAll(".dokki-topic, .dokki-subtopic");
                targetEls.forEach(el=>observer.observe(el));
            }, {once: true});
        });

        document.title = this.caption;
    },
    mounted() {
        const widgetEls = (this.$refs["widgets"]?.children || []);
        for (let i = 0; i < widgetEls.length; i++)
        {
            const el = widgetEls[i];
            el.style.zIndex = `${widgetEls.length-i}`;
            el.classList.add("dokki-user-element");
            if (el.tagName === "A") {
                el.classList.add("clickable");
            }
        }
    },
}
</script>

<api-reference lang="md">
TODO
</api-reference>
