import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";
import {themeVars} from "@/styles/index.css";

export const card = style([
    sprinkles({
        flexDirection: "column",
        borderRadius: "default",
    }),
    {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        margin: 0,
        overflow: "hidden",
        backgroundColor: themeVars.colors.shade,
        cursor: "pointer",
    }
])

export const image = style({
    backgroundImage: "url(https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1979&q=80)",
    height: "80px",
    width: "100%",
    backgroundSize: "cover",
})

export const title = style([
    sprinkles({
        padding: "default"
    }),
    {
        fontSize: "1.6rem",
        fontWeight: "400",
        textAlign: "left"
    }
])

export const aside = style([
    sprinkles({
        padding: "default"
    }),
    {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        fontSize: ".8rem",
        fontWeight: "400",
    }
])
