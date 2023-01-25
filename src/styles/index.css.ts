import * as base from '@/styles/base/index.css'
import '@/styles/sprinkles/index.css'
import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const lightTheme = base.lightTheme
export const darkTheme = base.darkTheme
export const themeVars = base.themeVars
export const fonts = {...base.fonts}

export const index = style([
    sprinkles({
        grid: {
            mobile: "main-mobile",
            tablet: "main-tablet",
            desktop: "main-desktop",
        }
    }),
    {
        background: themeVars.colors.alternative,
        minHeight: '100vh',
        minWidth: '100vw',
        fontFamily: themeVars.font.body,
        color: themeVars.colors.font,
        display: "grid",
    }
]);
