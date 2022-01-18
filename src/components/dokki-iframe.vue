/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
   <p class="dokkiCSS-embedded dokki-iframe dokkiCSS-expandable">

        <header @click="this.$refs['frame-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-crop-alt"/>
                {{title}}
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Close frame" : "Expand frame"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="frame-expander"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">

            <footer :style="{height: height}">

                <iframe class="dokki-iframe"
                        :src="src"
                        ref="iframe">
                </iframe>
                
            </footer>

        </dokki0-animated-expander>

    </p>
</template>

<script>
export default {
    data()
    {
        return {
            isExpanded: false,
        }
    },
    props: {
        src: {default: ""},
        height: {default: "500px"},
        title: {default: "Inline frame"},
        autofocus: {default: undefined},
        expanded: {default: undefined},
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.$refs["frame-expander"].expand({noAnimation: true});
        }
    },
    watch: {
        isExpanded()
        {
            if (this.isExpanded && (this.$props.autofocus !== undefined))
            {
                this.$nextTick(()=>
                {
                    this.$refs["iframe"].focus();
                });
            }
        }
    },
}
</script>
