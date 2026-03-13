import React, { useState } from 'react';
import {
    Brand,
    HeaderContainer,
    HeaderInner,
    MobileMenuButton,
    MobileMenuIcon,
    MobileNav,
    MobileNavList,
    Nav,
    NavItem,
    NavList,
} from './NavBar.styles.ts';
import { LogoImage } from '../../../pages/Home/Home.styles.ts';
import chLogoSvg from '../../../assets/logos/ch_.svg';
import { LogoLink, NavLink } from '../../common/BaseComponents.styles.ts';
import { useAuth } from '../../../context/AuthContext.tsx';

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuth();

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    return (
        <HeaderContainer>
            <HeaderInner>
                <Brand>
                    <LogoLink to="/" aria-label="Siirry etusivulle" onClick={handleClose}>
                        <LogoImage src={chLogoSvg} alt="Ch-logo" />
                    </LogoLink>
                </Brand>

                {/* Desktop navigation */}
                <Nav aria-label="Päävalikko">
                    <NavList>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                        {user && (
                            <NavItem>
                                <NavLink to="/admin">Admin</NavLink>
                            </NavItem>
                        )}
                    </NavList>
                </Nav>

                {/* Mobile menu toggle */}
                <MobileMenuButton
                    type="button"
                    onClick={handleToggle}
                    aria-label={menuOpen ? 'Sulje valikko' : 'Avaa valikko'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-nav"
                >
                    <MobileMenuIcon $open={menuOpen}>
                        <span />
                    </MobileMenuIcon>
                </MobileMenuButton>
            </HeaderInner>

            {/* Mobile navigation overlay */}
            <MobileNav id="mobile-nav" aria-label="Mobiilivalikko" $open={menuOpen}>
                <MobileNavList>
                    <li>
                        <NavLink to="/about" onClick={handleClose}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={handleClose}>
                            Contact
                        </NavLink>
                    </li>
                    {user && (
                        <li>
                            <NavLink to="/admin" onClick={handleClose}>
                                Admin
                            </NavLink>
                        </li>
                    )}
                </MobileNavList>
            </MobileNav>
        </HeaderContainer>
    );
};

export default NavBar;
