/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

<template>
    <span class="dokki-theme-selector"
          @click="currentThemeIdx = (currentThemeIdx + 1) % themes.length">

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
                {name: "light", icon: "fas fa-sun"},
                {name: "dark", icon: "fas fa-moon"},
            ],
        }
    },
    created()
    {
        console.assert(this.themes.length, "Encountered an empty theme list.");
        this.update_theme();
    },
    methods:
    {
        update_theme()
        {
            document.body.dataset.dokkiTheme = this.themes[this.currentThemeIdx].name;
        }
    },
    watch:
    {
        currentThemeIdx()
        {
            this.update_theme();
        }
    },
}
</script>
