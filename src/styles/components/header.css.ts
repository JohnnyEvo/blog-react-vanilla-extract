import {style} from "@vanilla-extract/css";
import {themeVars} from "@/styles/index.css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const header = style([
    sprinkles({
        flexDirection: {
            mobile: "column",
            desktop: "row",
        }
    }),
    {
        display: "flex",
        height: "62px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    }
]);

export const title = style({
    display: "flex",
    alignItems: "center",
});

export const mainTitle = style({
    fontFamily: themeVars.font.title,
    fontWeight: "700",
    fontSize: "4.2rem",
});

export const separator = style({
    fontSize: "4.2rem",
    fontWeight: "800",
    color: themeVars.colors.highlight,
    marginRight: "10px",
    marginLeft: "10px",
});

export const subTitle = style({
    fontSize: "1.8rem",
    fontWeight: "800",
    color: themeVars.colors.highlight
});