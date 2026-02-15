import { baseTheme } from './base';
import darkHeadlineImage from '../../assets/logos/christaeloranta-dark.png';

export const darkTheme = {
  name: 'dark',
  ...baseTheme,
  colors: {
    accent: '#F59E0B',
    background: '#1b1b1b',
    text: '#F9FAFB',
    surface: '#252525',
    primary: '#121212',
    border: '#F59E0B',
    link: '#F59E0B',
    // textSecondary: '#D1D5DB',
    // textLight: '#FAF7F4',
    // textMuted: '#9CA3AF',
    // primaryHover: '#2F6D80',
    // secondary: '#9A3412',
    // secondaryHover: '#F6CBB7',
    // textSecondary: '#D1D5DB',
    // textLight: '#FAF7F4',
    // textMuted: '#9CA3AF',
    // background: '#323b4c',
    // background: '#203345',
    // surface: '#323b4c',
    // borderLight: '#F3F4F6',
    // success: '#10B981',
    // warning: '#F59E0B',
    // error: '#EF4444',
    // linkHover: '#3594A1',
    // linkVisited: '#2B4560',
    logoFilter:
      'brightness(0) saturate(100%) invert(82%) sepia(39%) saturate(6640%) hue-rotate(359deg) brightness(102%) contrast(92%);',
    heroPhoto: '0 20px 30px rgba(245, 158, 11, 0.25)',
  },
  images: {
    headline: darkHeadlineImage,
  },
  borderTop: '1px solid rgba(245, 158, 11, 0.1)',
};
