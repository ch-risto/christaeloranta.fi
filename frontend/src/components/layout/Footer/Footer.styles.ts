import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: ${({ theme }) => theme.spacing.xl} 0;
    border-top: ${({ theme }) => theme.borderTop};
    text-align: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg} 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: ${({ theme }) => theme.spacing.xl};
        padding: ${({ theme }) => theme.spacing.lg} 0;
    }
`;

export const BottomBar = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    opacity: ${({ theme }) => theme.opacity.low};
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeights.light};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        /* padding: ${({ theme }) => theme.spacing.lg} 0; */
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: ${({ theme }) => theme.fontSizes.sm};
    }
`;
