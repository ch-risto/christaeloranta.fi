import { baseTheme } from './base';
import darkHeadlineImage from '../../assets/logos/christaeloranta-dark.png';

export const darkTheme = {
    name: 'dark',
    ...baseTheme,
    colors: {
        accent: '#F59E0B',
        accentRGB: '245, 158, 11',
        background: '#1b1b1b',
        text: '#F9FAFB',
        surface: '#252525',
        primary: '#966209',
        primaryRGB: '150, 98, 9',
        border: '#F59E0B',
        link: '#F59E0B',
        logoFilter:
            'brightness(0) saturate(100%) invert(82%) sepia(39%) saturate(6640%) hue-rotate(359deg) brightness(102%) contrast(92%)',
        heroPhoto: 'rgba(245, 158, 11, 0.25)',
        shadowRGB: '245, 158, 11',
    },
    images: {
        headline: darkHeadlineImage,
    },
    borderTop: '1px solid rgba(245, 158, 11, 0.1)',
};
