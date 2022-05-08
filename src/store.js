/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

import Vuex from "vuex"

export default Vuex.createStore({
    state() {
        return {
            // Metadata about mounted <dokki-tag> elements. Each property key names a
            // tag, and the property's numeric value the count of that tag in the document.
            tags: {},

            // Metadata about mounted <dokki-topic> elements, i.e. proto-<dokki0-topic>
            // elements. A <dokki-topic> element is simply a container for the proper
            // topic element, <dokki0-topic>, for the purposes of reducing the initial
            // performance cost of mounting the topic elements (which can otherwise become
            // an issue if there are many topics in the document, as Vue mounting them will
            // block the initial page load). Instead, we'll have Vue mount the simple
            // <dokki-topic> containers on page load, and the containers will then
            // progressively reveal their contents one at a time.
            dokkiTopic: {
                lifetimeCount: 0,
                revealQueue: [],
            },

            // Metadata about mounted <dokki0-topic> elements.
            topics: [],

            // Set to true once all <dokki-topic> elements have revealed their contents.
            areTopicsReady: false,

            // Metadata about mounted <dokki-lorem> elements.
            loremCount: 0,

            // If the window.location.hash string starts with this string, the following characters
            // in the hash string are tags.
            tagHashMarker: "#/",
        };
    },
    mutations: {
        queue_topic_reveal(state, revealCallback)
        {
            console.assert(!state.areTopicsReady, "No more topics should be queued.");
            console.assert(typeof revealCallback === "function");

            state.dokkiTopic.revealQueue.push(revealCallback);
            state.dokkiTopic.lifetimeCount++;

            // We want to call this function only once, after the first callback is added
            // to the queue. Since the function uses requestAnimationFrame() to unravel
            // the queue, we expect that by the time the first animation frame fires, we'll
            // have already queued up all the rest of the topics as well.
            if (state.dokkiTopic.lifetimeCount == 1) {
                reveal_next();
            }

            // Calling this function will cause all queued topics to be revealed, one per
            // animation frame.
            function reveal_next() {
                console.assert(state.dokkiTopic.revealQueue.length);

                window.requestAnimationFrame(()=>{
                    state.dokkiTopic.revealQueue.shift()();

                    if (!state.dokkiTopic.revealQueue.length) {
                        state.areTopicsReady = true;
                    }
                    else {
                        reveal_next();
                    }
                });
            }
        },
        add_tag(state, tag = "")
        {
            console.assert(typeof tag === "string");

            tag = tag.toLowerCase();
            state.tags[tag] = (1 + (state.tags[tag] || 0));
        },
        remove_tag(state, tag = "")
        {
            console.assert(typeof tag === "string");

            tag = tag.toLowerCase();

            if (!state.tags.hasOwnProperty(tag)) {
                return;
            }

            state.tags[tag]--;

            if (state.tags[tag] <= 0) {
                delete state.tags[tag];
            }
        },
        add_topic(state, topic = {})
        {
            console.assert(typeof topic === "object");
            console.assert(typeof topic.title === "string");
            console.assert(typeof topic.anchorId === "string");

            // If this is a sub-topic.
            if (topic.parentTopic)
            {
                topic.parentTopic.subtopics.push({
                    ...topic,
                    url: `#${topic.anchorId}`,
                });
            }
            else
            {
                state.topics.push({
                    ...topic,
                    idx: (state.topics.length + 1),
                    subtopics: [],
                    url: `#${topic.anchorId}`,
                });
            }
        },
        set_layout_mode(state, layoutMode = "horizontal")
        {
            document.body.setAttribute("data-dokki-layout", layoutMode);
        },
        increment_lorem_count(state)
        {
            state.loremCount++;
        },
    }
});
