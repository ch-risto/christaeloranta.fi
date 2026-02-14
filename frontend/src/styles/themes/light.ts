import { baseTheme } from './base';

export const lightTheme = {
  name: 'light',
  ...baseTheme,
  colors: {
    accent: '#a0522d',
    primary: '#CA6902',
    primaryHover: '#F6CBB7',
    secondary: '#9A3412',
    secondaryHover: '#F59E0B',
    text: '#2e211d',
    textSecondary: '#2e211d',
    textLight: '#2e211d',
    // textMuted: '#9CA3AF',
    background: '#fefefe',
    // surface: '#FFFFFF',
    // border: '#E5E7EB',
    // borderLight: '#F3F4F6',
    // success: '#10B981',
    // warning: '#F59E0B',
    // error: '#EF4444',
    link: '#F59E0B',
    linkHover: '#3594A1',
    linkVisited: '#2B4560',
  },
};

export type Theme = typeof lightTheme;
