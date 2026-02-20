import { baseTheme } from './base';
import lightHeadlineImage from '../../assets/logos/christaeloranta.png';

export const lightTheme = {
    name: 'light',
    ...baseTheme,
    colors: {
        accent: '#a0522d',
        background: '#fefefe',
        text: '#2e211d',
        surface: '#f9ecec',
        primary: '#CA6902',
        border: '#d48c84',
        link: '#F59E0B',
        logoFilter:
            'brightness(0) saturate(100%) invert(38%) sepia(14%) saturate(4280%) hue-rotate(343deg) brightness(84%) contrast(77%)',
        heroPhoto: 'rgba(160, 82, 45, 0.4)',
        shadowRGB: '160, 82, 45',
    },
    images: {
        headline: lightHeadlineImage,
    },
    borderTop: '1px solid rgba(46, 33, 29, 0.1)',
};

export type Theme = typeof lightTheme;
