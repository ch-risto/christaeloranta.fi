import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: ${({ theme }) => theme.borderTop};
  text-align: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`;

export const BottomBar = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.opacity.low};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;
