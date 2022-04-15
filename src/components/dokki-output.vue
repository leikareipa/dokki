/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-output"
    icon="fas fa-chevron-right"
    title="Output"
    header-widget="frame"
    :class="{'unpadded': isUnpadded}">

    <template #caption>

        <slot name="caption"/>

    </template>

    <template #content>

        <slot v-if="this.$slots['output']" name="output"/>
        <slot v-else/>

    </template>

</dokki0-embedded-expandable>
</template>

<style lang="scss">
.dokki0-embedded-expandable.dokki-output
{
    &.unpadded
    {
        .dokkiCSS-container
        {
            padding: 0;

            & > .dokkiCSS-embedded.groupbox:not(.headerless):only-child
            {
                margin-top: 0.475em !important;
            }
        }
    }

    &:not(.unpadded):not(.headerless)
    {
        & > .dokki0-animated-expander > .content
        {
            padding-top: calc(var(--dokkiCSS-embedded-vertical-padding) - var(--dokkiCSS-embedded-horizontal-padding));
        }
    }
}
</style>

<style scoped lang="scss">
.dokki-output.unpadded .wrapper
{
    padding: 0;
}
</style>

<script>
export default {
    props: {
        unpadded: {default: undefined},
    },
    data() {
        return {
            isUnpadded: (this.$props.unpadded !== undefined),
        }
    }
}
</script>

<api-reference>
<p>
    Showcases the output of something, e.g. of a code snippet.
</p>

<p>
    The contents of the <i>dokki-output</i> element will be hidden until the user clicks
    the element's header.
</p>

<h2>Attributes</h2>

<h3>expanded</h3>
<p>
    If present, the <i>dokki-output</i> element's contents will be visible by default rather
    than requiring the user to reveal it manually.
</p>

<h3>title</h3>
<p>
    The title to be shown in the header of the <i>dokki-output</i> element.
</p>

<h3>unpadded</h3>
<p>
    If present, the <i>dokki-output</i> element's contents will be displayed without their
    container having padding, so that the edges of the content touch the edges of the
    <i>dokki-output</i> element. This may be preferred e.g. for embedding inline frames.
</p>

<h2>Examples</h2>

<dokki-code headerless
            code="
            <dokki-output>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </dokki-output>
            ">

    <dokki-output>
        <dokki-output>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </dokki-output>
    </dokki-output>

</dokki-code>

<dokki-code headerless
            code="
            <dokki-output title='Run'>
                Ran
            </dokki-output>
            ">

    <dokki-output>
        <dokki-output title="Run">
            Ran
        </dokki-output>
    </dokki-output>

</dokki-code>

<p>
    Embedding a <i>dokki-iframe</i> element inside a <i>dokki-output</i> element
    on which the <em>unpadded</em> attribute has been set causes the iframe to be
    rendered without a border:
</p>

<dokki-code headerless
            code="
            <dokki-output unpadded title='Run JavaScript'>
                <dokki-iframe
                    headerless
                    height='2.5em'
                    srcdoc='
                        <style>
                            body {
                                background-color: green;
                                color: yellow;
                            }
                            span {
                                display: inline-block;
                                white-space: break-spaces;
                            }
                        </style>
                        <body>
                            <script>
                                document.body.innerHTML =
                                    'Hello from JavaScript'
                                    .split('')
                                    .reduce((str, ch)=>(str+`<span>${ch}</span>`), '');
                                const chSpans = Array.from(document.body.querySelectorAll('span'));
                                const chOffsets = chSpans.map((ch, idx)=>Math.cos(idx));
                                (function jump(delta = 0) {
                                    chSpans.forEach((span, idx)=>{
                                        const offset = Math.cos(chOffsets[idx] + delta);
                                        span.style.transform = `translateY(${offset}px)`;
                                    });
                                    window.requestAnimationFrame(()=>jump(delta + 0.25));
                                })();
                            </script>
                        </body>
                    '
                ></dokki-iframe>
            </dokki-output>
            ">

    <dokki-output>
        <dokki-output unpadded title="Run JavaScript">
            <dokki-iframe
                headerless
                height="2.5em"
                srcdoc="
                    <style>
                        body {
                            background-color: green;
                            color: yellow;
                        }
                        span {
                            display: inline-block;
                            white-space: break-spaces;
                        }
                    </style>
                    <body>
                        <script>
                            document.body.innerHTML =
                                'Hello from JavaScript'
                                .split('')
                                .reduce((str, ch)=>(str+`<span>${ch}</span>`), '');
                            const chSpans = Array.from(document.body.querySelectorAll('span'));
                            const chOffsets = chSpans.map((ch, idx)=>Math.cos(idx));
                            (function jump(delta = 0) {
                                chSpans.forEach((span, idx)=>{
                                    const offset = Math.cos(chOffsets[idx] + delta);
                                    span.style.transform = `translateY(${offset}px)`;
                                });
                                window.requestAnimationFrame(()=>jump(delta + 0.25));
                            })();
                        </script>
                    </body>
                "
            ></dokki-iframe>
        </dokki-output>
    </dokki-output>

</dokki-code>

<p>
    The <i>dokki-output</i> element can be embedded inside a <i>dokki-code</i>
    element for symbiotic styling:
</p>

<dokki-code headerless
            code="
            <dokki-code title='C'>
                <template #code>
                    printf(``Hello there %s.\n``, ``you``);
                </template>

                <dokki-output>
                    <samp>Hello there you.</samp>
                </dokki-output>
            </dokki-code>
            ">

    <dokki-output>
        <dokki-code title='C'>
            <template #code>
                printf("Hello there %s.\n", "you");
            </template>

            <dokki-output>
                <samp>Hello there you.</samp>
            </dokki-output>
        </dokki-code>
    </dokki-output>

</dokki-code>
</api-reference>
