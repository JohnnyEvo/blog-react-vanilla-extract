import * as base from '@/styles/base/index.css'
import * as components from '@/styles/components/index.css'
import '@/styles/sprinkles/index.css'
import {style} from "@vanilla-extract/css";

export const theme = base.theme
export const c = components
export const themeVars = base.themeVars
export const fonts = {...base.fonts}

export const index = style({
    background: themeVars.colors.alternative,
    minHeight: '100vh',
    minWidth: '100vw',
    fontFamily: themeVars.font.body,
})
