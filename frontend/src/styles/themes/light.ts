import { baseTheme } from './base';

export const lightTheme = {
  name: 'light',
  ...baseTheme,
  colors: {
    accent: '#a0522d',
    primary: '#CA6902',
    // primaryHover: '#F6CBB7',
    // secondary: '#9A3412',
    // secondaryHover: '#F59E0B',
    text: '#2e211d',
    // textSecondary: '#2e211d',
    // textLight: '#2e211d',
    // textMuted: '#9CA3AF',
    background: '#fefefe',
    surface: '#f9ecec',
    border: '#d48c84',
    // borderLight: '#F3F4F6',
    // success: '#10B981',
    // warning: '#F59E0B',
    // error: '#EF4444',
    link: '#F59E0B',
    // linkHover: '#d48c84',
    // linkVisited: '#2B4560',
    logoFilter:
      'brightness(0) saturate(100%) invert(38%) sepia(14%) saturate(4280%) hue-rotate(343deg)brightness(84%) contrast(77%)',
    heroPhoto: '0 20px 30px rgba(212, 140, 132, 0.25)',
  },
};

export type Theme = typeof lightTheme;
