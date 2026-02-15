export const baseTheme = {
  fonts: {
    primary: '"Montserrat", sans-serif',
    // heading: '"Rubik Glitch"',
    // body: '"Montserrat", sans-serif',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    heading: '3.25rem', // 52px
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  },
  lineHeights: {
    none: '1',
    tight: '1.25', // for headings
    snug: '1.375', // for large text
    normal: '1.5', // for body text
    relaxed: '1.625', // for long-form content
    loose: '2', // for wide spacing needs
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  transforms: {
    none: 'none',
    scaleUp: 'scale(1.05)',
    scaleDown: 'scale(0.95)',
    rotate: 'rotate(5deg)',
    hopNorth: 'translateY(-4px)',
    hopSouth: 'translateY(4px)',
    hopEast: 'translateX(4px)',
    hopWest: 'translateX(-4px)',
    hopNorthEast: 'translate(3px, -3px)',
    hopNorthWest: 'translate(-3px, -3px)',
    hopSouthEast: 'translate(3px, 3px)',
    hopSouthWest: 'translate(-3px, 3px)',
  },
  breakpoints: {
    mobile: '640px',
    tablet: '768px',
    desktop: '1024px',
  },
  //   zIndex: {
  //     dropdown: 1000,
  //     sticky: 1020,
  //     fixed: 1030,
  //     backdrop: 1040,
  //     modal: 1050,
  //     popover: 1060,
  //     tooltip: 1070,
  //   },
  opacity: {
    low: 0.6,
    mediumLow: 0.75,
    medium: 0.8,
    mediumHigh: 0.9,
    high: 1,
  },
};
