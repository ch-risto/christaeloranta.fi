import React, { useEffect } from 'react';

const LIGHT_FAVICON_PATH = '/ch_.png';
const DARK_FAVICON_PATH = '/ch_white.png';

const FaviconManager: React.FC = () => {
  useEffect(() => {
    let faviconLink: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");

    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(faviconLink);
    }

    const setFavicon = (isDarkMode: boolean) => {
      if (faviconLink) {
        faviconLink.href = isDarkMode ? DARK_FAVICON_PATH : LIGHT_FAVICON_PATH;
      }
    };

    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    setFavicon(mediaQueryList.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setFavicon(event.matches);
    };

    mediaQueryList.addEventListener('change', handleChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleChange);
    };
  }, []);

  return null;
};

export default FaviconManager;