import {style} from "@vanilla-extract/css";
import {themeVars} from "@/styles/index.css";


export const banner = style({
    display: "grid",
    gridTemplate: "1px 1fr 1px / 1fr",
})
export const separator = style({
    width: "80%",
    height: "1px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: themeVars.colors.secondary,
})