/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<dokki-user-widget clickable>

    <a class="theme-selector"
       ref="themeSelector"
       @click="set_current_theme(themes[(currentThemeIdx + 1) % themes.length])"
    >

        <i class="widget-icon far fa-lightbulb"/>

        <span class="label">

            {{themes[((currentThemeIdx + 1) % themes.length)]}} mode

        </span>

    </a>
</dokki-user-widget>
</template>

<style scoped lang="scss">
.theme-selector
{
    .label
    {
        display: inline-block;

        &::first-letter
        {
            text-transform: uppercase;
        }
    }
}
</style>

<script>
export default {
    data()
    {
        return {
            currentThemeIdx: 0,
            themes: ["dark", "light"],
        }
    },
    created()
    {
        console.assert(this.themes.length, "Encountered an empty theme list.");
        this.set_current_theme(window.sessionStorage.getItem("dokki:theme") || "light");
    },
    methods:
    {
        set_current_theme(themeName = "")
        {
            this.currentThemeIdx = Math.max(0, this.themes.findIndex(theme=>theme == themeName));
            const newThemeName = this.themes[this.currentThemeIdx];
            document.body.dataset.dokkiTheme = newThemeName;
            window.sessionStorage.setItem("dokki:theme", newThemeName);
        },
    },
}
</script>
