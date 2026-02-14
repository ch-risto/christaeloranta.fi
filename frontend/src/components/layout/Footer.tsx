import React from 'react';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: 2rem;
  border-top: 1px solid rgba(46, 33, 29, 0.1);
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;

export const BottomBar = styled.p`
  font-size: 0.875rem;
  color: #2e211d;
  opacity: 0.6;
  margin: 0;
  font-weight: 300;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const Footer: React.FC = () => {
  // Muuttuja tämän hetkisen vuoden hakuun
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <BottomBar>Christa Eloranta {currentYear}</BottomBar>
    </FooterContainer>
  );
};

export default Footer;
