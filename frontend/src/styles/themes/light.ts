import { baseTheme } from './base';

export const lightTheme = {
  name: 'light',
  ...baseTheme,
  colors: {
    primary: '#CA6902', // #CA6902
    primaryHover: '#F6CBB7', // #F6CBB7
    secondary: '#9A3412', // #9A3412
    secondaryHover: '#F59E0B', // #F59E0B
    text: '#203345', // #203345
    textLight: '#2B4560', // #2B4560
    // textMuted: '#9CA3AF', // #9CA3AF
    background: '#E4D7D0', // #E4D7D0
    // surface: '#FFFFFF', // #FFFFFF
    // border: '#E5E7EB', // #E5E7EB
    // borderLight: '#F3F4F6', // #F3F4F6
    // success: '#10B981', // #10B981
    // warning: '#F59E0B', // #F59E0B
    // error: '#EF4444', // #EF4444
    link: '#F59E0B', // #F59E0B
    linkHover: '#3594A1', // #3594A1
    linkVisited: '#2B4560', // #2B4560
  },
};

export type Theme = typeof lightTheme;
