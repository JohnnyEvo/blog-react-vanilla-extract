import '@/styles/base/_reset.css';
import '@/styles/base/_fonts.css';
import '@/styles/base/_base.css';
import {themeClass, vars} from '@/styles/base/_theme.css';
import * as typographies from '@/styles/base/_typographies.css';

export const theme = themeClass;
export const themeVars = vars;
export const fonts = {...typographies};
