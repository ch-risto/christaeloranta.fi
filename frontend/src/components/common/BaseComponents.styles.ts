import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BaseMain = styled.main`
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledSection = styled.section`
    &:not(:first-child) {
        margin-top: ${({ theme }) => theme.spacing.xl};
    }

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

export const LinkButton = styled.a`
    padding: 0.5rem 1rem;
    border-top: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-left: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-bottom: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
    border-right: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    transition:
        background-color 0.2s ease-in-out,
        transform 0.1s;
    border-radius: ${({ theme }) => theme.borderRadius.lg};

    &:active {
        transform: scale(0.98);
        border-top: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
        border-left: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
        border-bottom: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
        border-right: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        color: ${({ theme }) => theme.colors.text};
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

export const StyledH1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.heading};
    font-weight: 400;
    line-height: ${({ theme }) => theme.lineHeights.tight};
    letter-spacing: ${({ theme }) => theme.letterSpacing.tight};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: ${({ theme }) => theme.fontSizes['3xl']};
        line-height: ${({ theme }) => theme.lineHeights.snug};
    }
`;

export const StyledP = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.normal};
    color: ${({ theme }) => theme.colors.text};
`;

export const CenteredP = styled(StyledP)`
    text-align: center;
`;

export const Ingressi = styled(StyledP)`
    font-family: ${({ theme }) => theme.fonts.md};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    color: ${({ theme }) => theme.colors.text};
`;

export const SvgContainer = styled.img`
    width: 18px;
    height: 18px;
    vertical-align: middle;
`;

export const StyledButton = styled.button`
    border-top: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-left: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-bottom: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
    border-right: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);

    &:active {
        transform: scale(0.98);
        border-top: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
        border-left: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.5);
        border-bottom: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
        border-right: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    }
`;
