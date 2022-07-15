/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
<a class="dokki0-theme-selector"
   ref="themeSelector"
   @click="set_current_theme(themes[(currentThemeIdx + 1) % themes.length].name)">

    <i :class="themes[currentThemeIdx].icon"/>
    <span style="margin-left: 1ch">
        {{themes[((currentThemeIdx + 1) % themes.length)].name}} mode
    </span>

</a>
</template>

<script>
export default {
    data()
    {
        return {
            currentThemeIdx: 0,
            themes: [
                {name: "dark", icon: "fas fa-lightbulb"},
                {name: "light", icon: "far fa-lightbulb"},
            ],
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
            this.currentThemeIdx = Math.max(0, this.themes.findIndex(theme=>theme.name == themeName));
            const newThemeName = this.themes[this.currentThemeIdx].name;
            document.body.dataset.dokkiTheme = newThemeName;
            window.sessionStorage.setItem("dokki:theme", newThemeName);
        },
    },
}
</script>
