import styled from 'styled-components';

export const HeaderContainer = styled.header`
    /* position: sticky; */
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.sticky};
    width: 100%;
    backdrop-filter: blur(12px);
    background-color: ${({ theme }) =>
        theme.name === 'dark' ? 'rgba(27, 27, 27, 0.92)' : 'rgba(254, 254, 254, 0.9)'};
    border-bottom: ${({ theme }) => theme.borderTop};
`;

export const HeaderInner = styled.div`
    position: relative;
    max-width: 1120px;
    height: calc(60px + ${({ theme }) => theme.spacing.sm} + ${({ theme }) => theme.spacing.md});
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg}
        ${({ theme }) => theme.spacing.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: baseline;
    gap: ${({ theme }) => theme.spacing.md};
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavItem = styled.li``;

export const NavItemWithSub = styled.li``;

export const MobileMenuButton = styled.button`
    display: none;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    transition:
        background-color 0.2s ease,
        transform 0.15s ease;

    &:hover {
        background-color: ${({ theme }) =>
            theme.name === 'dark' ? 'rgba(249, 250, 251, 0.04)' : 'rgba(15, 23, 42, 0.04)'};
        transform: ${({ theme }) => theme.transforms.scaleUp};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.accent};
        outline-offset: 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MobileMenuIcon = styled.span`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    display: inline-block;

    &::before,
    &::after,
    span {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 2px;
        border-radius: 999px;
        background-color: ${({ theme }) => theme.colors.text};
        transition:
            transform 0.2s ease,
            opacity 0.2s ease,
            top 0.2s ease,
            bottom 0.2s ease;
    }

    span {
        top: 50%;
        transform: translateY(-50%) scaleX(1);
        opacity: 0;
    }

    &::before {
        top: 0.2rem;
        transform: none;
    }

    &::after {
        bottom: 0.2rem;
        transform: none;
    }

    &[data-open='true'] {
        span {
            transform: translateY(-50%) scaleX(0);
            opacity: 0;
        }

        &::before {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
        }

        &::after {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
        }
    }
`;

export const MobileNav = styled.nav`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
        position: fixed;
        inset: 0;
        padding-top: 4.5rem;
        background: transparent;
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition:
            transform 0.24s ease-out,
            opacity 0.24s ease-out;
        z-index: ${({ theme }) => theme.zIndex.sticky + 1};
        /* backdrop-filter: blur(16px); */

        &[data-open='true'] {
            transform: translateY(0%);
            opacity: 1;
            pointer-events: auto;
        }
    }
`;

export const SubMenu = styled.ul`
    --submenu-parent-offset: 0px;

    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    margin: 0;
    list-style: none;
    border-top: ${({ theme }) => theme.borderTop};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: ${({ theme }) => theme.shadows.md};
    opacity: 0;
    transform: translate(-50%, 0.5rem);
    pointer-events: none;
    visibility: hidden;
    transition:
        opacity 0.18s ease-out,
        transform 0.18s ease-out,
        visibility 0.18s ease-out;
    z-index: ${({ theme }) => theme.zIndex.dropdown};

    ${NavItemWithSub}:hover &,
    ${NavItemWithSub}:focus-within & {
        opacity: 1;
        transform: translate(-50%, 0);
        pointer-events: auto;
        visibility: visible;
    }

    /* Hover bridge: prevents dropdown from closing while moving mouse down */
    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: -20px;
        height: 20px;
    }

    li {
        margin: 0;
        list-style: none;
    }

    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    padding-left: var(--submenu-parent-offset);

    a {
        width: auto;
        justify-content: flex-start;
        font-size: ${({ theme }) => theme.fontSizes.base};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        position: static;
        box-shadow: none;
        background: transparent;
        padding: 0 0 0 ${({ theme }) => theme.spacing.md};
        margin-top: ${({ theme }) => theme.spacing.xs};
        opacity: 1;
        transform: none;
        pointer-events: auto;
        visibility: visible;
        width: 100%;
        max-width: none;

        a {
            justify-content: flex-start;
        }
    }
`;

export const MobileNavList = styled.ul`
    list-style: none;
    margin: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) =>
        theme.name === 'dark' ? 'rgba(37, 37, 37, 0.98)' : 'rgba(249, 236, 236, 0.98)'};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    box-shadow: ${({ theme }) => theme.shadows.md};

    a {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
`;

export const SubMenuIndicator = styled.span`
    margin-left: 0.35rem;
    font-size: 0.7em;
    display: inline-block;
    transform-origin: center;
    opacity: ${({ theme }) => theme.opacity.mediumLow};
    transition:
        transform 0.18s ease,
        opacity 0.18s ease,
        color 0.18s ease;

    ${NavItemWithSub}:hover &,
    ${NavItemWithSub}:focus-within & {
        transform: translateY(1px) rotate(180deg);
        opacity: ${({ theme }) => theme.opacity.high};
        color: ${({ theme }) => theme.colors.accent};
    }
`;
