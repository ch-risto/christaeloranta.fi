import React from 'react';
import { ButtonContainer, NavContainer, StyledHeaderLink } from './navBar.styles';
import { Icon } from '../Global/Icon';
import ChLogo from '../../assets/ch_logo.svg?react';
import { StyledNavigationLink } from '../Global/content.styles';
import { FlexRowWrapper } from '../Layout/layout.styles';

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <FlexRowWrapper>
        <StyledHeaderLink to="/" aria-label="Takaisin etusivulle">
          <Icon>
            <ChLogo focusable="false" />
          </Icon>
        </StyledHeaderLink>
        <ButtonContainer>
          <StyledNavigationLink to="/about">Minusta</StyledNavigationLink>
          <StyledNavigationLink to="/competence">Osaaminen</StyledNavigationLink>
          <StyledNavigationLink to="/portfolio">Töitäni</StyledNavigationLink>
          <StyledNavigationLink to="/contact">Ota yhteyttä</StyledNavigationLink>
        </ButtonContainer>
      </FlexRowWrapper>
    </NavContainer>
  );
};

export default NavBar;
