import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const content = style([
    sprinkles({
        gap: "default",
        grid: {
            mobile: "stack",
            tablet: "2-cols",
            desktop: "3-cols",
        }
    }),
    {
        display: "grid",
    }
])