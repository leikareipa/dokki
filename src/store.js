/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

export default new Vuex.Store({
    state: {
        topics: [],
        loremCount: 0,
        productName: undefined,
        productVersion: undefined,
    },
    mutations: {
        add_topic(state, topic = {})
        {
            console.assert(typeof topic.title == "string");
            console.assert(typeof topic.anchorId == "string");

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
