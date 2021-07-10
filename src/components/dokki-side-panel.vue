/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <nav class="dokki-side-panel">

        <div v-if="productName !== undefined"
             :title="productName"
             class="dokkiCSS-product-tag">

            {{productName}}

        </div>
        <div v-else class="dokkiCSS-product-tag">

            Contents

        </div>

        <ul class="dokkiCSS-vertical-navi">

            <li v-for="topic in topics">

                <a :href="topic.url"
                   class="dokkiCSS-navi-link dokkiCSS-navi-link-topic">

                    <i class="dokkiCSS-navi-link-icon fas fa-sm fa-hashtag"/>
                    {{topic.title}}

                </a>

                <a v-for="subtopic in topic.subtopics"
                   :href="subtopic.url"
                   class="dokkiCSS-navi-link dokkiCSS-navi-link-subtopic">

                    <i class="dokkiCSS-navi-link-icon fas fa-sm fa-hashtag"/>
                    {{subtopic.title}}
                    
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
