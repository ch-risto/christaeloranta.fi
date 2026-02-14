import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding-top: ${(props) => props.theme.spacing.xl};
  border-top: ${(props) => props.theme.borderTop};
  text-align: center;
  width: 100%;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: ${(props) => props.theme.spacing.lg};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: ${(props) => props.theme.spacing.xl};
    padding-top: ${(props) => props.theme.spacing.lg};
  }
`;

export const BottomBar = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.text};
  opacity: ${(props) => props.theme.opacity.low};
  margin: 0;
  font-weight: ${(props) => props.theme.fontWeights.light};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding-top: ${(props) => props.theme.spacing.lg};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;
