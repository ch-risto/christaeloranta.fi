import { baseTheme } from './base';

export const darkTheme = {
  name: 'dark',
  ...baseTheme,
  colors: {
    primary: '#00ADB5', // #203345
    primaryHover: '#2F6D80', // #2F6D80
    secondary: '#9A3412', // #9A3412
    secondaryHover: '#F6CBB7', // #F6CBB7
    text: '#EEEEEE', // #F3F4F6
    textLight: '#FAF7F4', // #FAF7F4
    // textMuted: '#9CA3AF', // #9CA3AF
    background: '#222831', // #8A9EA0
    surface: '#171717', // #FFFFFF
    // border: '#E5E7EB', // #E5E7EB
    // borderLight: '#F3F4F6', // #F3F4F6
    // success: '#10B981', // #10B981
    // warning: '#F59E0B', // #F59E0B
    // error: '#EF4444', // #EF4444
    link: '#159898', // #F59E0B
    linkHover: '#3594A1', // #3594A1
    linkVisited: '#2B4560', // #2B4560
  },
};
