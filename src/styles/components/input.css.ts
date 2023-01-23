import {style} from "@vanilla-extract/css";
import {themeVars} from "@/styles/index.css";
import {sprinkles} from "@/styles/sprinkles/index.css";

export const group = style([
    sprinkles({
        borderRadius: "default"
    }),
    {
        position: 'relative',
        maxWidth: "200px",
        height: "25px",
        display: "grid",
        grid: "auto-flow / 24px auto",
    }
]);

export const border = style({
    borderStyle: "solid",
    borderColor: themeVars.colors.alternative,
    borderWidth: ".5px",
});

export const icon = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: themeVars.colors.alternative,
    borderRight: ".5px solid",
    width: "25px",
    height: "25px",
});
export const image = style({
    width: '12px',
    height: '12px',
});

export const field = style({
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingLeft: "6px",
    paddingRight: "6px",
    fontSize: "1.2rem",
    fontWeight: "400"
});
