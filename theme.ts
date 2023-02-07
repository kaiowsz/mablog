import { buildLegacyTheme, defineConfig } from "sanity"

const props = {
    "--my-black": "#FFF",
    "--my-white": "#1A1A1A",
    "--my-papa-brand": "#F7AB0A",
    "--my-red": "#DB4437",
    "--my-yellow": "#F4B400",
    "--my-green": "#0F9D58",
}

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    "--brand-primary": props["--my-papa-brand"],


    "--default-button-color": "#666",
    "--default-button-primary-color": props["--my-papa-brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--state-danger-color": props["--my-red"],

    "--main-navigation-color": props["--my-black"],
    "--main-navigation-color--inverted": props["--my-white"],

    "--focus-color": props["--my-papa-brand"]
})