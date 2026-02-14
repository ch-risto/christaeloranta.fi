import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    html {
        font-size: ${({ theme }) => theme.fontSizes.base};
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        min-width: 320px;
        min-height: 100vh;

        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        line-height: ${({ theme }) => theme.lineHeights.normal};
        color: ${({ theme }) => theme.colors.text};
        background-color: ${({ theme }) => theme.colors.background};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        transition: background-color 0.3s ease, color 0.3s ease;
    }

    #root {
        min-height: 100vh;
        isolation: isolate;
        display: flex;
        flex-direction: column;
    }

    a {
        color: ${({ theme }) => theme.colors.link};
        text-decoration: none;
        transition: color 0.2s ease;
        cursor: pointer;

        &:hover {
            color: ${({ theme }) => theme.colors.border};
        }
    }

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.heading};
        font-weight: ${({ theme }) => theme.fontWeights.bold};
        line-height: ${({ theme }) => theme.lineHeights.none};
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        font-weight: ${({ theme }) => theme.fontWeights.regular};
        line-height: ${({ theme }) => theme.lineHeights.normal};
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
