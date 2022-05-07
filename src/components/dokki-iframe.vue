/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki0-embedded-expandable
    class-name="dokki-iframe"
    :has-content="Boolean(src || srcdoc)"
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
.dokki0-embedded-expandable.dokki-iframe
{
    .content.first-level
    {
        padding: 0;
        margin: var(--dokkiCSS-embedded-vertical-padding) var(--dokkiCSS-embedded-horizontal-padding);
    }
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
        line-height: normal;
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

<api-reference lang="md">
Provides the general functionality of a standard \<iframe\>, with some dokki-specific
extensions.

## Samples

<dokki-iframe src="https://www.wikipedia.org">
    <template #caption>
        Wikipedia.org
    </template>
</dokki-iframe>

## HTML syntax

    <dokki-iframe autofocus expanded headerless height inline-class src srcdoc>

        <template #caption>
        </template>

    </dokki-iframe>

## HTML templates

### #caption

The template's children will be displayed as the \<dokki-iframe\> element's caption.

<x-example>
    <dokki-code headerless
        code="
        <dokki-iframe>
            <template #caption>
                Hello there
            </template>
        </dokki-iframe>
        ">
    </dokki-code>
    <dokki-iframe>
        <template #caption>
            Hello there
        </template>
    </dokki-iframe>
</x-example>

## HTML attributes

### autofocus
    
If present, the \<dokki-iframe\> element's inline frame will be given focus when
the frame is expanded.
    
### expanded

If present, the \<dokki-iframe\> element's inline frame will be visible initially,
rather than requiring the user to reveal it.

Setting the **headerless** attribute will implicitly set this attribute as well.

### headerless

If present, causes the \<dokki-iframe\> element to be displayed without its caption.

Setting this attribute will implicitly set the **expanded** attribute as well. 

<x-example>
    <dokki-code headerless code="
        <dokki-iframe headerless src='https://www.wikipedia.org'>
        </dokki-iframe>
    ">
    </dokki-code>
    <dokki-iframe headerless src='https://www.wikipedia.org'>
    </dokki-iframe>
</x-example>

### height

The CSS height of the \<dokki-iframe\> element's inline frame.

<dokki-tip>
    The width of the frame will be set automatically by dokki according to the
    parent document's layout.
</dokki-tip>

### src <x-required></x-required>

Corresponds to the **src** attribute of the standard \<iframe\> element.

Either this or the **srcdoc** attribute must be set.

### srcdoc <x-required></x-required>

Corresponds to the **srcdoc** attribute of the standard \<iframe\> element.

Either this or the **src** attribute must be set.

<dokki-tip>
    Among other things, this attribute allows you to embed JavaScript that will
    be executed only when the &lt;dokki-iframe&gt; element's inline frame is expanded.
</dokki-tip>

<x-example>
    <dokki-code
        headerless
        code="
        <dokki-iframe
            headerless
            height='2.5em'
            srcdoc='
                <style>
                    body {
                        background-color: #86db74;
                        color: black
                    }
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
            '
        ></dokki-iframe>
        ">
    </dokki-code>
    <dokki-iframe
        headerless
        height="2.5em"
        srcdoc="
            <style>
                body {
                    background-color: #86db74;
                    color: black
                }
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
</api-reference>
