import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";
import {styleVariants} from '@vanilla-extract/css';
import {themeVars} from "@/styles/index.css";

const colors = [
    themeVars.colors.highlight,
    "#8D59FA",
    "#FACD59",
]

export const pill = style([
    sprinkles({
        borderRadius: "rounded",
        marginX: "default",
        marginY: "none",
    }),
    {
        height: "21px",
        width: "62px",
        textAlign: "center",
        border: "1px solid #fff",
        fontWeight: 100,
        textTransform: "lowercase",
        color: "white",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        selectors: {
            "&:first-child": {
                marginLeft: 0,
            },
            "&:last-child": {
                marginRight: 0,
            },
        }
    }
])
export const background = styleVariants({
    primary: {backgroundColor: colors[0]},
    secondary: {backgroundColor: colors[1]},
    alternative: {backgroundColor: colors[2]},
});