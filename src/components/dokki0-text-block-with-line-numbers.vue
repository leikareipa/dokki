/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <table class="dokki0-text-block-with-line-numbers">

        <tr v-for="(line, lineNum) in formattedText"
            class="dokkiCSS-text-block-line"
            :class="{'dokkiCSS-highlighted': highlightLineNum == lineNum}">

            <span class="dokkiCSS-anchor dokkiCSS-anchor-text-block-line"
                    :ref="line_ref(lineNum)">
            </span>

            <td class="dokkiCSS-text-block-line-number"
                @click="highlight_line(lineNum)">

                <span v-if="lineNum !== highlightLineNum">
                    {{lineNum+1}}&nbsp;
                </span>

                <span v-else>&rarr;</span>

            </td>
            
            <td class="dokkiCSS-text-block-line-content">
                {{line}}
            </td>
            
        </tr>

    </table>
</template>

<script>
export default {
    props: {
        text: {},
    },
    data()
    {
        return {
            blockIdx: 0,
            highlightLineNum: -1, // -1 means no line is highlighted.
        }
    },
    created()
    {
        this.$store.commit("increment_listings_count");
        this.blockIdx = this.$store.state.numListings;

        update_line_highlight.call(this);
        window.addEventListener("hashchange", update_line_highlight.bind(this));

        function update_line_highlight()
        {
            this.highlightLineNum = -1;

            if (window.location.hash.startsWith("#-listing:"))
            {
                /// TODO: Add syntax validation.
                
                const hash = window.location.hash.substring(2).split(",");
                const [listingIdx, lineNum] = [hash[0].split(":")[1], hash[1].split(":")[1]];

                if (listingIdx == this.blockIdx)
                {
                    this.highlightLineNum = (lineNum - 1);
                }
            }
        }
    },
    mounted()
    {
        this.$nextTick(()=>
        {
            if (window.location.hash.startsWith("#-listing:"))
            {
                const lineNaviName = window.location.hash.substring(1);
                const elem = this.$refs[lineNaviName];

                if (elem)
                {
                    window.scrollTo(0, elem.offsetTop);
                }
            }
        });
    },
    computed: {
        formattedText()
        {
            if (!this.text) {
                return "";
            }

            let lines = this.text.split("\n");

            // Remove empty lines off the front.
            while (lines.length && !lines[0].trim().length) {
                lines.shift();
            }

            if (!lines.length) {
                return [];
            }

            const numPreSpaces = Math.max(0, lines[0].search(/\S/));
            for (let i = 0; i < lines.length; i++)
            {
                lines[i] = lines[i].slice(numPreSpaces);
                lines[i] = lines[i].replace(/``/g, "\"");
                lines[i] = lines[i].replace(/\\\\/g, "\\");
            }

            // Remove empty lines off the back.
            while (lines.length && !lines[lines.length-1].trim().length) {
                lines.pop();
            }

            return lines;
        }
    },
    methods: {
        reset_line_highlight()
        {
            this.highlightLineNum = -1;
            history.replaceState(null, null, " ");
        },
        highlight_line(lineNum)
        {
            if (lineNum == this.highlightLineNum)
            {
                this.reset_line_highlight();
            }
            else
            {
                window.location.hash = this.line_ref(lineNum);
            }
        },
        test(odx)
        {
            console.log(odx);
        },
        line_ref(lineNum)
        {
            return `-listing:${this.blockIdx},ln:${lineNum+1}`;
        },
    },
}
</script>
