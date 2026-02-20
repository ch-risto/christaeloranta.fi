import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
