/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

import {simplified_topic_title} from "./misc.js";

export default new Vuex.Store({
    state: {
        topics: [],
        loremCount: 0,
        productName: undefined,
        productVersion: undefined,
        numListings: 0,
    },
    mutations: {
        add_topic(state, topicTitle = "")
        {
            state.topics.push({
                title: topicTitle,
                subtopics: [],
                simplifiedTitle: simplified_topic_title(topicTitle),
                url: `#${simplified_topic_title(topicTitle)}`
            });
        },
        add_subtopic(state, subtopic = {})
        {
            if (subtopic.parentTopic)
            {
                subtopic.parentTopic.subtopics.push(subtopic);
            }
        },
        increment_listings_count(state)
        {
            state.numListings++;
        },
        increment_lorem_count(state)
        {
            state.loremCount++;
        },
        set_product_name(state, name)
        {
            state.productName = name;
        },
        set_product_version(state, version)
        {
            state.productVersion = version;
        }
    }
});
