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
        padding: spacing,
        marginTop: spacing,
        marginBottom: spacing,
        marginLeft: spacing,
        marginRight: spacing,
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
