import {globalStyle, style} from "@vanilla-extract/css";
import {font} from "@/styles/abstracts/_vars.css";

globalStyle('html', {
    fontSize: '.625rem',
});
globalStyle('body', {
    fontSize: '1.6rem'
});

globalStyle('body, h1, h2, h3, h4, h5, h6, p, ol, ul', {
    margin: 0,
    padding: 0,
    fontWeight: 'normal'
});

export const fontTitle = style({
    fontFamily: font.fontTitle,
});
export const fontContent = style({
    fontFamily: font.fontContent,
});
export const fontCode = style({
    fontFamily: font.fontCode,
});