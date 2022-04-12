/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-iframe"
    icon="fas fa-crop-alt"
    title="Inline frame"
    @expanded="update_autofocus">

    <template #caption>

        <slot v-if="this.$slots['caption']" name="caption"/>
        <span v-else>{{src}}</span>

    </template>

    <template #content>

        <div class="dokkiCSS-wrapper" :style="{height: height}">

            <iframe
                class="dokki-iframe"
                :src="src"
                :srcdoc="srcdoc"
                ref="iframe">
            </iframe>
            
        </div>

    </template>

</dokki0-embedded-expandable>
</template>

<script>
export default {
    props: {
        src: {default: undefined},
        srcdoc: {default: undefined},
        height: {default: "500px"},
        autofocus: {default: undefined},
    },
    computed: {
        hasAutofocus()
        {
            return (this.$props.autofocus !== undefined);
        },
    },
    methods: {
        update_autofocus()
        {
            if (this.hasAutofocus)
            {
                this.$refs["iframe"].focus();
            }
        }
    },
}
</script>
