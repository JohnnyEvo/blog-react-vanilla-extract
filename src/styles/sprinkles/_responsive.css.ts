import {
    defineProperties,
} from '@vanilla-extract/sprinkles';
import {spacing} from "@/styles/abstracts/_vars.css";

const responsiveProperties = defineProperties({
    conditions: {
        mobile: {},
        tablet: {'@media': 'screen and (min-width: 768px)'},
        desktop: {'@media': 'screen and (min-width: 1024px)'}
    },
    defaultCondition: 'mobile',
    properties: {
        flexDirection: ['row', 'column'],
        grid: {
            stack: "auto-flow / 1fr",
            ['2-cols']: "auto-flow / 1fr 1fr",
            ['3-cols']: "auto-flow / 1fr 1fr 1fr",
            ['main-desktop']: "auto-flow / 1fr minmax(680px, 800px) 1fr",
            ['main-tablet']: "auto-flow /1fr 1fr",
            ['main-mobile']: "auto-flow / 1fr",
        },
        padding: spacing,
        marginTop: spacing,
        marginBottom: spacing,
        marginLeft: spacing,
        marginRight: spacing,
        gap: spacing,
        display: ["none", "block"]
    },
    shorthands: {
        marginY: [
            "marginTop",
            "marginBottom",
        ],
        marginX: [
            "marginLeft",
            "marginRight",
        ],
    }
});

export default responsiveProperties;
