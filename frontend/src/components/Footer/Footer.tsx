import React from 'react';
import { FooterContainer, BottomBar } from './footer.styles';

const Footer: React.FC = () => {
  // Muuttuja tämän hetkisen vuoden hakuun
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <BottomBar>Copyright © {currentYear} Christa Eloranta</BottomBar>
    </FooterContainer>
  );
};

export default Footer;
