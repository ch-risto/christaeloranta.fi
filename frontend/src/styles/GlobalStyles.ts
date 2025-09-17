import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: ${props => props.theme.fontSizes.base};
        font-weight: ${props => props.theme.fontWeights.regular};
        line-height: ${props => props.theme.lineHeights.normal};
        font-family: ${props => props.theme.fonts.primary};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        margin: 0;
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.background};
        min-width: 320px;
        min-height: 100vh;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    h1 {
        font-size: ${props => props.theme.fontSizes.heading};
        line-height: ${props => props.theme.lineHeights.tight};
    }

    a {
        color: ${props => props.theme.colors.link};
        line-height: 1.3;
        transition: color 0.2s ease;

        &:hover {
            color: ${props => props.theme.colors.linkHover};
        }

        &:visited {
            color: ${props => props.theme.colors.linkVisited};
        }
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
`;