import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";
import {themeVars} from "@/styles/base/index.css";

export const container = style([
    sprinkles({
        padding: 'default'
    }), {
        background: themeVars.colors.base,
        width: "100%",
        maxWidth: "630px",
        margin: "auto",
        height: "100vh"
    }
]);