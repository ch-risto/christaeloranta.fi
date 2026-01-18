import { baseTheme } from './base';

export const lightTheme = {
  name: 'light',
  ...baseTheme,
  colors: {
    primary: '#3B423A',
    primaryHover: '#F6CBB7',
    secondary: '#9A3412',
    secondaryHover: '#F59E0B',
    text: '#3B423A',
    textLight: '#2B4560',
    background: '#FAF8F5',
    surface: '#D9D4CF',
    accent: '#E4572E',
    cardBackground: '#FFFFFF',
    border: '#E5E7EB',
    link: '#F59E0B',
    linkHover: '#3594A1',
    linkVisited: '#2B4560',
  },
};

export type Theme = typeof lightTheme;
