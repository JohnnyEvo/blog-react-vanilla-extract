import {style} from "@vanilla-extract/css";
import {themeVars} from "@/styles/index.css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const nav = style({
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
export const container = style([
    sprinkles({
        marginY: "small"
    }),
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
    }
])
