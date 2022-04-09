/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <nav class="dokki-side-panel">

        <slot/>

        <div class="dokkiCSS-product-tag">

            <span v-if="productName !== undefined">{{productName}}</span>
            <span v-else>Contents</span>

        </div>

        <ul class="dokkiCSS-vertical-navi">

            <li v-for="(topic, topicIdx) in topics">

                <a :href="topic.url"
                   class="dokkiCSS-navi-link dokkiCSS-navi-link-topic">

                    <span class="dokkiCSS-navi-link-icon">
                        {{topicIdx + 1}}
                    </span>
                    
                    <span class="dokkiCSS-navi-link-label">
                        {{topic.title}}
                    </span>

                </a>

                <a v-for="(subtopic, subtopicIdx) in topic.subtopics"
                   :href="subtopic.url"
                   class="dokkiCSS-navi-link dokkiCSS-navi-link-subtopic">

                    <span class="dokkiCSS-navi-link-label">
                        {{subtopic.title}}
                    </span>
                    
                </a>

            </li>

        </ul>
    
    </nav>
</template>

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
