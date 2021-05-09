/*
 * 2021 Tarpeeksi Hyvae Soft.
 *
 */

"use strict";

window.addEventListener("DOMContentLoaded", create_app);

function create_app()
{
    const store = new Vuex.Store({
        state: {
            topics: [],
        },
        mutations: {
            add_topic(state, topicTitle)
            {
                state.topics.push({
                    title: topicTitle,
                    simplifiedTitle: simplified_topic_title(topicTitle),
                    url: `#${simplified_topic_title(topicTitle)}`
                });
            },
        }
    });

    const app = Vue.createApp({});

    app.component("dokki-header", {
        props: {
            icon: {default: "fas fa-book"},
            title: {default: "Untitled"},
            software: {default: undefined},
        },
        beforeCreate()
        {
            document.title = this.title;
        },
        template: `
            <header class="dokki-header">
                <i :class="icon" style="margin-right: 10px;"/>

                {{title}}

                <div v-if="software !== undefined"
                     class="software-tag">

                    {{software}}

                </div>
            </header>
        `,
    });

    app.component("dokki-topics", {
        template: `
            <main class="dokki-topics">
                <slot/>
            </main>
        `,
    });

    app.component("dokki-topic", {
        props: ["title"],
        data() {
            return {
                idx: -1,
            }
        },
        computed: {
            simplifiedTitle()
            {
                return (this.idx < 1)
                       ? ""
                       : this.$store.state.topics[this.idx-1].simplifiedTitle;
            },
        },
        mounted()
        {
            this.$store.commit("add_topic", this.title);
            this.idx = this.$store.state.topics.length;
        },
        template: `
            <span class="dokki-topic-anchor"
                  :id=simplifiedTitle>
            </span>

            <section class="dokki-topic"
                 :id=simplifiedTitle>
            
                <h2 class="title">
                    {{this.idx}}. {{this.title}}
                </h2>

                <span class="permalink"
                      title="Permalink to this topic">

                    <a :href="'#'+simplifiedTitle">
                        <i class="fas fa-link"/>
                    </a>

                </span>

                <slot/>

            </section>
        `,
    });

    app.component("dokki-side-panel", {
        computed: {
            topics()
            {
                return this.$store.state.topics;
            },
        },
        template: `
            <nav class="dokki-side-panel">

                <div class="dokki-navbar">
                    <ul>
                        <li v-for="topic in topics">
                            <a :href="'#'+topic.simplifiedTitle">
                                {{topic.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            
            </nav>
        `,
    });

    app.component("dokki-image", {
        props: ["src"],
        data() {
            return {
                isExpanded: false,
            }
        },
        computed: {
            hasFooter()
            {
                return !!this.$slots.default;
            }
        },
        template: `
            <p class="dokki-embedded dokki-image"
               :class="{expanded: isExpanded}">

                <header @click="isExpanded = !isExpanded">

                    <i class="fas fa-fw fa-image"/>
                    Image

                    <aside class="revealer">
                        {{isExpanded? "Hide" : "Show"}}
                    </aside>

                </header>

                <img v-if=isExpanded
                     :src="src">

                <footer v-if=hasFooter>
                    <slot/>
                </footer>
            </p>
        `,
    });

    app.component("dokki-tip", {
        template: `
            <p class="dokki-embedded dokki-tip">

                <header>
                    <i class="fas fa-info-circle"/>
                    Tip
                </header>

                <footer>
                    <slot/>
                </footer>

            </p>
        `,
    });

    app.component("dokki-warning", {
        template: `
            <p class="dokki-embedded dokki-warning">

                <header>
                    <i class="fas fa-exclamation-triangle"/>
                    Warning
                </header>

                <footer>
                    <slot/>
                </footer>

            </p>
        `,
    });

    app.use(store);
    app.mount("body");

    // Takes in a guide topic title string (e.g. "System requirements") and returns
    // a reduced version of the string such that it can be used e.g. as a DOM element
    // id (e.g. "System requirements" -> "system-requirements").
    function simplified_topic_title(title)
    {
        return title.toLowerCase()
                    .replace(/[^a-zA-Z\d\s]/g, "")
                    .replace(/\s+/g, "-")
    }
}
