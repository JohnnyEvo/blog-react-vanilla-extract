import {globalStyle} from "@vanilla-extract/css";

globalStyle('html', {
    boxSizing: 'border-box',
    fontSize: '16px'
});
globalStyle('*,*:before,*:after', {
    boxSizing: 'inherit',
});
globalStyle('body, h1, h2, h3, h4, h5, h6, p, ol, ul', {
    margin: 0,
    padding: 0,
    fontWeight: 'normal'
});
globalStyle('ul, ol', {
    listStyle: 'none'
});
globalStyle('img', {
    maxWidth: '100%',
    height: 'auto'
});
globalStyle('input', {
    all: 'unset',
});
