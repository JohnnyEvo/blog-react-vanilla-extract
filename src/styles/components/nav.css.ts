import {style} from "@vanilla-extract/css";
import {themeVars} from "@/styles/index.css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const container = style([
    sprinkles({
        marginY: "small"
    }),
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "nowrap",
        overflow: "scroll",
    }
])
