import { createTheme } from "@vanilla-extract/css";
import {color, font} from "@/styles/abstracts/_vars.css";

export const [themeClass, vars] = createTheme({
    colors: {
        base: color.base,
        highlight: color.highlight,
        secondary: color.secondary,
        alternative: color.alternative,
        shade: color.shade,
    },
    font: {
        body: font.fontContent,
        title: font.fontTitle,
        code: font.fontCode,
    }
});
