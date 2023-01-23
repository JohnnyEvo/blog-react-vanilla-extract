import {createSprinkles} from "@vanilla-extract/sprinkles";
import responsiveProperties from '@/styles/sprinkles/_responsive.css';
import roundedProperties from '@/styles/sprinkles/_rounded.css';

export const sprinkles = createSprinkles(
    responsiveProperties,
    roundedProperties,
);
