import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: ${(props) => props.theme.fontSizes.base};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        line-height: ${(props) => props.theme.lineHeights.normal};
        font-family: ${(props) => props.theme.fonts.primary};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.background};
        min-width: 320px;
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a, Link {
        transition: color 0.2s ease;
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

    h1 {
        font-size: ${(props) => props.theme.fontSizes.heading};
        font-weight: ${(props) => props.theme.fontWeights.bold};
        line-height: ${(props) => props.theme.lineHeights.none};
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes['2xl']};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        line-height: ${(props) => props.theme.lineHeights.normal};
    }
`;
