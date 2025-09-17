import { lightTheme } from './light';

export { baseTheme } from './base';
export { lightTheme } from './light';
export { darkTheme } from './dark';

export type Theme = typeof lightTheme;

export const defaultTheme = lightTheme;