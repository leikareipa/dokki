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

        <div class="wrapper" :style="{height: height}">

            <iframe
                :src="src"
                :srcdoc="srcdoc"
                ref="iframe">
            </iframe>
            
        </div>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-iframe .dokkiCSS-container
{
    padding: 0;
}
</style>

<style scoped lang="scss">
.wrapper
{
    padding: 0;
    overflow: hidden;
    background-color: var(--dokkiCSS-page-inert-bg-color);

    iframe
    {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
        max-height: 100%;
        border: none;
    }
}
</style>

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
