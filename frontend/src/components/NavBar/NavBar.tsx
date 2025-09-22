import React from 'react';
import { ButtonContainer, HeaderContainer, HeaderTitle, StyledHeaderLink } from './navBar.styles';
import { Icon } from '../Global/Icon';
import ChLogo from '../../assets/ch_logo.svg?react';
import { StyledNavigationLink } from '../Global/content.styles';

const NavBar: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledHeaderLink to="/" aria-label="Takaisin etusivulle">
        <Icon>
          <ChLogo focusable="false" />
        </Icon>
        <HeaderTitle>Christa Eloranta</HeaderTitle>
      </StyledHeaderLink>
      <ButtonContainer>
        <StyledNavigationLink to="/about">Minusta</StyledNavigationLink>
        <StyledNavigationLink to="/cv">CV</StyledNavigationLink>
        <StyledNavigationLink to="/portfolio">Töitäni</StyledNavigationLink>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default NavBar;
