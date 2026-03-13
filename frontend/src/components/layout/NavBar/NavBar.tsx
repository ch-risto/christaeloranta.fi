import React, { useEffect, useRef, useState } from 'react';
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
    // NavItemWithSub,
    NavList,
    // SubMenu,
    // SubMenuIndicator,
} from './NavBar.styles.ts';
import { LogoImage } from '../../../pages/Home/Home.styles.ts';
import chLogoSvg from '../../../assets/logos/ch_.svg';
import { LogoLink, NavLink } from '../../common/BaseComponents.styles.ts';
import { useAuth } from '../../../context/AuthContext.tsx';

const NavBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user } = useAuth();
    // const [submenuOffset, setSubmenuOffset] = useState(0);
    const headerInnerRef = useRef<HTMLDivElement | null>(null);
    const aboutLinkRef = useRef<HTMLAnchorElement | null>(null);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const compute = () => {
            const headerEl = headerInnerRef.current;
            const aboutEl = aboutLinkRef.current;
            if (!headerEl || !aboutEl) return;

            const headerRect = headerEl.getBoundingClientRect();
            const aboutRect = aboutEl.getBoundingClientRect();
            const offset = Math.max(0, aboutRect.left - headerRect.left);
            setSubmenuOffset(Math.round(offset));
        };

        compute();
        window.addEventListener('resize', compute);
        return () => window.removeEventListener('resize', compute);
    }, []);

    return (
        <HeaderContainer>
            <HeaderInner ref={headerInnerRef}>
                <Brand>
                    <LogoLink to="/" aria-label="Siirry etusivulle" onClick={handleClose}>
                        <LogoImage src={chLogoSvg} alt="Ch-logo" />
                    </LogoLink>
                </Brand>

                {/* Desktop navigation */}
                <Nav aria-label="Päävalikko">
                    <NavList>
                        {/* <NavItemWithSub> */}
                        <NavLink to="/about" ref={aboutLinkRef}>
                            About
                            {/* <SubMenuIndicator>▾</SubMenuIndicator> */}
                        </NavLink>
                        {/* <SubMenu
                                aria-label="About alavalikko"
                                style={
                                    {
                                        ['--submenu-parent-offset' as never]: `${submenuOffset}px`,
                                    } as React.CSSProperties
                                }
                            >
                                <li>
                                    <NavLink to="/about/mock-page">Mock page</NavLink>
                                </li>
                            </SubMenu> */}
                        {/* </NavItemWithSub> */}
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
                    <MobileMenuIcon data-open={menuOpen}>
                        <span />
                    </MobileMenuIcon>
                </MobileMenuButton>
            </HeaderInner>

            {/* Mobile navigation overlay */}
            <MobileNav
                id="mobile-nav"
                aria-label="Mobiilivalikko"
                data-open={menuOpen}
                aria-hidden={!menuOpen}
                onClick={handleClose}
            >
                <MobileNavList onClick={(e) => e.stopPropagation()}>
                    <li>
                        <NavLink to="/about" onClick={handleClose}>
                            About
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/about/mock-page" onClick={handleClose}>
                            Mock page
                        </NavLink>
                    </li> */}
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
