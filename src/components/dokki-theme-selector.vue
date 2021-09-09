/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokki-theme-selector"
          title="Light switch"
          ref="themeSelector"
          @click="set_current_theme(themes[(currentThemeIdx + 1) % themes.length].name)">

        <i :class="'fa-fw ' + themes[currentThemeIdx].icon"/>

    </span>
</template>

<script>
export default {
    data()
    {
        return {
            currentThemeIdx: 0,
            themes: [
                {name: "dark", icon: "far fa-lightbulb"},
                {name: "light", icon: "fas fa-lightbulb"},
            ],
        }
    },
    created()
    {
        console.assert(this.themes.length, "Encountered an empty theme list.");
        this.set_current_theme(window.sessionStorage.getItem("dokki:theme") || "dark");
    },
    methods:
    {
        set_current_theme(themeName = "")
        {
            this.currentThemeIdx = Math.max(0, this.themes.findIndex(theme=>theme.name == themeName));
            const newThemeName = this.themes[this.currentThemeIdx].name;
            document.body.dataset.dokkiTheme = newThemeName;
            window.sessionStorage.setItem("dokki:theme", newThemeName);

            if (this.$refs.themeSelector)
            {
                this.$refs.themeSelector.animate([
                    {transform: "rotateY(90deg)"},
                    {transform: "rotateY(0deg)"}
                ], {duration: 150});
            }
        },
    },
}
</script>
