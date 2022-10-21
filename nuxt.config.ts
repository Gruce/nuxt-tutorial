// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@unocss/nuxt',
    ],
    unocss: {
        // presets
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        theme: {
            colors: {
        "dark": "#181818",
        "light": "#ffffff",
        "mid": "#B7B7B7",
        "error": "#FF493E",
        "warning": "#FFCC42",
        "success": "#38CC76",
            }
        },
    },
})
