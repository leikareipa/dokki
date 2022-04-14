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

<api-reference>
<p>
    Provides the general functionality of a standard <i>iframe</i>, with some
    dokki-specific additions.
</p>

<h2>Attributes</h2>

<h3>autofocus</h3>
<p>
    If present, the inline frame will be given automatic focus once its contents
    have loaded.
</p>

<h3>expanded</h3>
<p>
    If present, the inline frame will be visible by default rather than requiring
    the user to reveal it manually.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>headerless</h3>
<p>
    If present, causes the <i>dokki-iframe</i> element's header to not be displayed.
</p>

<p>
    Note: Setting the <em>headerless</em> attribute will also set <em>expanded</em>. 
</p>

<h3>height</h3>
<p>
    The CSS height of the <i>dokki-iframe</i> element.
</p>

<h3>src</h3> <strong>required</strong>
<p>
    Corresponds to the <b>src</b> attribute of the standard <i>iframe</i> element.
</p>

<h3>srcdoc</h3>
<p>
    Corresponds to the <b>srcdoc</b> attribute of the standard <i>iframe</i> element.
</p>

<h3>title</h3>
<p>
    The title to be shown in the header of the <i>dokki-iframe</i> element.
</p>

<h2>Examples</h2>
<dokki-code headerless
            code="
            <dokki-iframe
                src='https://www.wikipedia.org'
                height='400px'>
            </dokki-iframe>
            ">

    <dokki-output>
        <dokki-iframe src='https://www.wikipedia.org' height='400px'>
        </dokki-iframe>
    </dokki-output>

</dokki-code>

<dokki-code headerless
            code="
            <dokki-iframe
                src='https://www.tarpeeksihyvaesoft.com//dosbox/#rally-sport/demo'
                autofocus>

                <template #caption>
                    Play Rally-Sport in DOSBox
                </template>

            </dokki-iframe>
            ">

    <dokki-output>
        <dokki-iframe
            src='https://www.tarpeeksihyvaesoft.com//dosbox/#rally-sport/demo'
            autofocus>

            <template #caption>
                Play Rally-Sport in DOSBox
            </template>

        </dokki-iframe>
    </dokki-output>

</dokki-code>
</api-reference>
