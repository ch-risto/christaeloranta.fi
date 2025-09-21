import React from 'react';
import chLogo from '../../assets/ch_.png';
import { ButtonContainer, HeaderContainer, HeaderTitle, StyledHeaderLink } from './header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <StyledHeaderLink to='/'>
        <img src={chLogo} className='logo ch' alt='ch-logo christa eloranta' />

        <HeaderTitle>Christa Eloranta</HeaderTitle>
      </StyledHeaderLink>
      <ButtonContainer>
        <p>Minusta</p>
        <p>CV</p>
        <p>Töitäni</p>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
