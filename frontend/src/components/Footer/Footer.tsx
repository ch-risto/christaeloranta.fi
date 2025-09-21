import React from 'react';
import { FooterContainer, FooterText } from './footer.styles';

const Footer: React.FC = () => {
  // Muuttuja tämän hetkisen vuoden hakuun
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>Copyright © {currentYear} C-ryhmä</FooterText>
    </FooterContainer>
  );
};

export default Footer;
