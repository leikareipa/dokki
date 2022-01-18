/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <p class="dokkiCSS-embedded dokki-table dokkiCSS-expandable">

        <header @click="this.$refs['table-expander'].toggle_expansion()">

            <span class="dokkiCSS-title">
                <i class="fas fa-table" title="Table"/>
            </span>

            <aside class="dokkiCSS-expander">
                {{isExpanded? "Hide" : "Show"}}
            </aside>

        </header>

        <dokki0-animated-expander ref="table-expander"
                                  @expanded="isExpanded = true"
                                  @minimized="isExpanded = false">
                                  
            <div class="dokkiCSS-container">
                <slot name="table"/>
            </div>

        </dokki0-animated-expander>

        <hr v-if="hasFooter">

        <footer v-if="hasFooter" class="dokkiCSS-italic">
            <slot name="caption"/>
        </footer>

    </p>
</template>

<script>
export default {
    props: {
        expanded: {default: undefined},
    },
    data()
    {
        return {
            isExpanded: false,
        }
    },
    mounted()
    {
        if (this.$props.expanded !== undefined)
        {
            this.$refs["table-expander"].expand({noAnimation: true});
        }
    },
    computed: {
        hasFooter()
        {
            return !!this.$slots.caption;
        }
    },
}
</script>
