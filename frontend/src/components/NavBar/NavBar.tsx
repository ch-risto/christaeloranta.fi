import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ButtonContainer, HeaderContainer, HeaderTitle, MenuToggle } from './navBar.styles';
import { StyledNavigationLink } from '../Global/content.styles';

const NavBar: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderTitle>Christa Eloranta</HeaderTitle>
      </Link>
      <MenuToggle onClick={() => setMenuOpen((prev) => !prev)} aria-expanded={menuOpen} aria-label="Avaa valikko">
        ☰ Menu
      </MenuToggle>
      <ButtonContainer $open={menuOpen}>
        {!isHomePage && (
          <StyledNavigationLink to="/">Etusivu</StyledNavigationLink>
        )}
        <StyledNavigationLink to="/about">Minusta</StyledNavigationLink>
        <StyledNavigationLink to="/portfolio">Töitäni</StyledNavigationLink>
        <StyledNavigationLink to="/cv">CV</StyledNavigationLink>
        <StyledNavigationLink to="/contact">Ota yhteyttä</StyledNavigationLink>
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default NavBar;
