import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.sticky};
    width: 100%;
    backdrop-filter: blur(12px);
    background-color: ${({ theme }) =>
        theme.name === 'dark' ? 'rgba(27, 27, 27, 0.92)' : 'rgba(254, 254, 254, 0.9)'};
    border-bottom: ${({ theme }) => theme.borderTop};
`;

export const HeaderInner = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};

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
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavItem = styled.li``;

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

export const MobileMenuIcon = styled.span<{ $open: boolean }>`
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
        transform: translateY(-50%) ${({ $open }) => ($open ? 'scaleX(0)' : 'scaleX(1)')};
        opacity: ${({ $open }) => ($open ? 0 : 1)};
    }

    &::before {
        top: ${({ $open }) => ($open ? '50%' : '0.2rem')};
        transform: ${({ $open }) => ($open ? 'translateY(-50%) rotate(45deg)' : 'none')};
    }

    &::after {
        bottom: ${({ $open }) => ($open ? '50%' : '0.2rem')};
        transform: ${({ $open }) => ($open ? 'translateY(50%) rotate(-45deg)' : 'none')};
    }
`;

export const MobileNav = styled.nav<{ $open: boolean }>`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;
        position: fixed;
        inset: 0;
        padding-top: 4.5rem;
        background: ${({ theme }) =>
            theme.name === 'dark'
                ? 'linear-gradient(to bottom, rgba(27,27,27,0.98), rgba(27,27,27,0.96))'
                : 'linear-gradient(to bottom, rgba(254,254,254,0.98), rgba(254,254,254,0.96))'};
        transform: translateY(${({ $open }) => ($open ? '0%' : '-100%')});
        opacity: ${({ $open }) => ($open ? 1 : 0)};
        transition:
            transform 0.24s ease-out,
            opacity 0.24s ease-out;
        z-index: ${({ theme }) => theme.zIndex.dropdown};
        backdrop-filter: blur(16px);
    }
`;

export const MobileNavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: ${({ theme }) => theme.spacing.lg};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};

    a {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
`;
