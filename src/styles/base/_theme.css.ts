import { createTheme } from "@vanilla-extract/css";
import {color, font} from "@/styles/abstracts/_vars.css";

import { createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
    colors: {
        font: '',
        base: '',
        shade: '',
        highlight: '',
        secondary: '',
        alternative: '',
    },
    font: {
        body: '',
        title: '',
        code: '',
    }
});

export const lightThemeClass = createTheme(vars,{
    colors: {
        font: color.light.font,
        base: color.light.base,
        highlight: color.light.highlight,
        secondary: color.light.secondary,
        alternative: color.light.alternative,
        shade: color.light.shade,
    },
    font: {
        body: font.fontContent,
        title: font.fontTitle,
        code: font.fontCode,
    }
});

export const darkThemeClass = createTheme(vars,{
    colors: {
        base: color.dark.base,
        font: color.dark.font,
        highlight: color.dark.highlight,
        secondary: color.dark.secondary,
        alternative: color.dark.alternative,
        shade: color.dark.shade,
    },
    font: {
        body: font.fontContent,
        title: font.fontTitle,
        code: font.fontCode,
    }
});
