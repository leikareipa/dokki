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
    line-height: normal;
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
        Provides the general functionality of a standard <i>iframe</i>, with some dokki-specific
        extensions.
    </p>

    <h2>Sample</h2>

        <dokki-iframe src="https://www.wikipedia.org">
            <template #caption>
                Wikipedia.org
            </template>
        </dokki-iframe>

    <h2>Markup</h2>

        <dokki-code headerless code="
            <dokki-iframe autofocus expanded headerless height inline-class src srcdoc>

                <template #caption>
                </template>

            </dokki-iframe>
            ">
        </dokki-code>

    <h2>Templates</h2>

        <x-templ>caption</x-templ>

            <p>
                The template's children will be displayed as the <x-tag>dokki-iframe</x-tag>
                element's caption.
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            Hello there
                        </template>
                        ">
                    </dokki-code>

                    <dokki-iframe height="2em">
                        <template #caption>
                            Hello there
                        </template>
                    </dokki-iframe>

                </x-example>

                <x-example>

                    <dokki-code headerless
                        code="
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                        ">
                    </dokki-code>

                    <dokki-iframe height="2em">
                        <template #caption>
                            <span style='filter: blur(2px);'>Hello there</span>
                        </template>
                    </dokki-iframe>

                </x-example>
            </x-examples>

    <h2>Attributes</h2>

        <h3>autofocus</h3>
            
            <p>
                If present, the <x-tag>dokki-iframe</x-tag> element's inline frame will be given
                focus when the frame is expanded.
            </p>

        <h3>expanded</h3>
            
            <p>
                If present, the <x-tag>dokki-iframe</x-tag> element's inline frame will be visible
                initially, rather than requiring the user to reveal it.
            </p>

            <p>
                Setting the <x-attr>headerless</x-attr> attribute will implicitly set this attribute
                as well.
            </p>

        <x-attr>headerless</x-attr>

            <p>
                If present, causes the <x-tag>dokki-iframe</x-tag> element to be displayed without its
                caption.
            </p>

            <p>
                Setting this attribute will implicitly set the <x-attr>expanded</x-attr> attribute
                as well. 
            </p>

            <x-examples>
                <x-example>

                    <dokki-code headerless
                        code="
                        <dokki-iframe headerless src='https://www.wikipedia.org'>
                        </dokki-iframe>
                        ">
                    </dokki-code>

                    <dokki-iframe headerless src='https://www.wikipedia.org'>
                    </dokki-iframe>

                </x-example>
            </x-examples>

        <x-attr>height</x-attr>
            
            <p>
                The CSS height of the <x-tag>dokki-iframe</x-tag> element's inline frame.
            </p>

            <dokki-tip>
                The width of the frame will be set automatically by dokki according to the
                parent document's layout.
            </dokki-tip>

        <x-attr>src</x-attr>
        <x-required></x-required>

            <p>
                Corresponds to the <x-attr>src</x-attr> attribute of the standard <x-tag>iframe</x-tag>
                element.
            </p>

            <p>
                Either this or the <x-attr>srcdoc</x-attr> attribute must be set.
            </p>

        <x-attr>srcdoc</x-attr>
        <x-required></x-required>

            <p>
                Corresponds to the <x-attr>srcdoc</x-attr> attribute of the standard <x-tag>iframe</x-tag>
                element.
            </p>

            <p>
                Either this or the <x-attr>src</x-attr> attribute must be set.
            </p>

            <dokki-tip>
                Among other things, this attribute allows you to embed JavaScript that will be
                executed only when the <x-tag>dokki-iframe</x-tag> element's inline frame is
                expanded.
            </dokki-tip>

            <x-examples>
                <x-example>

                    <dokki-code
                        headerless
                        code="
                        <dokki-iframe
                            headerless
                            height='2.5em'
                            srcdoc='
                                <style>
                                    span {
                                        display: inline-block;
                                        white-space: break-spaces;
                                    }
                                </style>
                                <body>
                                    <script>
                                        (function jump(delta = 0) {
                                            document.body.innerHTML =
                                                `Current time: ${Date.now()}`
                                                .split('')
                                                .reduce((str, ch)=>(str+`<span>${ch}</span>`), '');
                                            const chSpans = Array.from(document.body.querySelectorAll('span'));
                                            const chOffsets = chSpans.map((ch, idx)=>(2 * Math.cos(idx)));
                                            chSpans.forEach((span, idx)=>{
                                                const offset = Math.cos(chOffsets[idx] + delta);
                                                span.style.transform = `translateY(${offset}px)`;
                                            });
                                            window.requestAnimationFrame(()=>jump(delta + 0.3));
                                        })();
                                    </script>
                                </body>
                            '>
                        </dokki-iframe>
                        ">
                    </dokki-code>

                    <dokki-iframe
                        headerless
                        height="2.5em"
                        srcdoc="
                            <style>
                                span {
                                    display: inline-block;
                                    white-space: break-spaces;
                                }
                            </style>
                            <body>
                                <script>
                                    (function jump(delta = 0) {
                                        document.body.innerHTML =
                                            `Current time: ${Date.now()}`
                                            .split('')
                                            .reduce((str, ch)=>(str+`<span>${ch}</span>`), '');
                                        const chSpans = Array.from(document.body.querySelectorAll('span'));
                                        const chOffsets = chSpans.map((ch, idx)=>(2 * Math.cos(idx)));
                                        
                                        chSpans.forEach((span, idx)=>{
                                            const offset = Math.cos(chOffsets[idx] + delta);
                                            span.style.transform = `translateY(${offset}px)`;
                                        });
                                        window.requestAnimationFrame(()=>jump(delta + 0.3));
                                    })();
                                </script>
                            </body>
                        "
                    ></dokki-iframe>

                </x-example>
            </x-examples>
</api-reference>
