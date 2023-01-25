import {style} from "@vanilla-extract/css";
import {sprinkles} from "@/styles/sprinkles/index.css";
import {themeVars} from "@/styles/index.css";

export const aside = style([
    sprinkles({
        padding: "default",
        borderRadius: "default",
        marginY: "large"
    }),
    {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "93px",
        backgroundColor: themeVars.colors.shade,
        position: 'relative'
    }
]);

export const text = style({
    fontWeight: "200",
    fontSize: "1.2rem"
})

export const close = style({
    position: 'absolute',
    top: "3px",
    right: "3px",
    cursor: "pointer",
});

export const image = style({
    width: '1.5rem',
    height: '1.5rem',
});
