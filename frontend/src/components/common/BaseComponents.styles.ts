import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BaseMain = styled.main`
    width: 100%;
    min-height: 60vh;
`;

export const StyledSection = styled.section`
    margin-top: ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-top: ${({ theme }) => theme.spacing.lg};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing.lg};
    }
`;

export const StyledLink = styled(Link)`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    transition:
        transform 0.18s ease,
        color 0.18s ease,
        background-color 0.18s ease;
`;

export const NavLink = styled(StyledLink)`
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wider};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.sm}
        ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    line-height: 1;

    &:hover {
        transform: ${({ theme }) => theme.transforms.hopNorthEast};
    }
`;

export const LogoLink = styled(StyledLink)`
    &:hover {
        scale: 1.05;
    }
`;

export const StyledLinkImage = styled(StyledLink)`
    display: inline-block;
    width: fit-content;
    height: fit-content;

    &:hover img {
        box-shadow: 1px 1px 40px 1px ${({ theme }) => theme.colors.accent};
    }

    &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.colors.accent};
        outline-offset: 4px;
    }
`;

export const BaseHero = styled(StyledSection)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    padding: 4rem 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 1.5rem;
        padding: 3rem 1.25rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 1rem;
        padding: 2rem 1rem;
    }
`;
