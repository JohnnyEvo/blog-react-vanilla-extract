import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const onlyDesktop = style([
    sprinkles({
        display: {
            mobile: "none",
            tablet: "none",
            desktop: "block"
        }
    })
])