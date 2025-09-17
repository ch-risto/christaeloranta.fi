import React, { useEffect, useState } from 'react';
import FaviconManager from '../FaviconManager';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { ContentWrapper, MainContainer } from './layout.styles';
import { darkTheme, lightTheme } from '../../styles/themes';
import { ThemeProvider } from 'styled-components';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [])

    const currentTheme = isDarkMode ? darkTheme : lightTheme

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <FaviconManager />
            {/* <MainContainer>
                <ContentWrapper> */}
            {children}
            {/* </ContentWrapper>
            </MainContainer> */}
        </ThemeProvider>
    );
};

export default Layout