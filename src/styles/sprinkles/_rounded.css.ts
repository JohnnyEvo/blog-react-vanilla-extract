import {
    defineProperties,
} from '@vanilla-extract/sprinkles';
import {radius} from "@/styles/abstracts/_vars.css";

const roundedProperties = defineProperties({
    properties: {
        borderRadius: {
            default: radius.normal,
            rounded: radius.rounded
        }
    }
});

export default roundedProperties;
