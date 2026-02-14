import { baseTheme } from './base';

export const darkTheme = {
  name: 'dark',
  ...baseTheme,
  colors: {
    accent: '#F59E0B',
    primary: '#203345',
    // primaryHover: '#2F6D80',
    // secondary: '#9A3412',
    // secondaryHover: '#F6CBB7',
    text: '#F9FAFB',
    // textSecondary: '#D1D5DB',
    // textLight: '#FAF7F4',
    // textMuted: '#9CA3AF',
    // background: '#323b4c',
    // background: '#203345',
    // surface: '#323b4c',
    background: '#0B1120',
    surface: '#1B2537',
    border: '#F59E0B',
    // borderLight: '#F3F4F6',
    // success: '#10B981',
    // warning: '#F59E0B',
    // error: '#EF4444',
    link: '#F59E0B',
    // linkHover: '#3594A1',
    // linkVisited: '#2B4560',
    logoFilter:
      'brightness(0) saturate(100%) invert(82%) sepia(39%) saturate(6640%) hue-rotate(359deg) brightness(102%) contrast(92%);',
    heroPhoto: '0 20px 30px rgba(245, 158, 11, 0.25)',
  },
};
