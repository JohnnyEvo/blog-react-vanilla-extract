import '@/styles/base/_reset.css';
import '@/styles/base/_fonts.css';
import '@/styles/base/_base.css';
import {lightThemeClass, darkThemeClass, vars} from '@/styles/base/_theme.css';
import * as typographies from '@/styles/base/_typographies.css';

export const lightTheme = lightThemeClass;
export const darkTheme = darkThemeClass;
export const themeVars = vars;
export const fonts = {...typographies};
