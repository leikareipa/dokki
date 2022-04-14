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

<style lang="scss">
.dokki-theme-selector
{
    margin-left: auto;
    cursor: pointer;
    color: var(--dokkiCSS-page-secondary-fg-color);
    font-variant: small-caps;
    text-transform: lowercase;
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
}
</style>

<script>
export default {
    data()
    {
        return {
            currentThemeIdx: 0,
            themes: [
                {name: "dark", icon: "fas fa-adjust"},
                {name: "light", icon: "fas fa-adjust"},
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
