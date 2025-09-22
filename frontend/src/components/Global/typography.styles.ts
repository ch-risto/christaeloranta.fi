import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.primary};
  line-height: ${(props) => props.theme.lineHeights.tight};
`;

export const StyledH2 = styled(Title).attrs({ as: 'h2' })`
  font-size: ${(props) => props.theme.fontSizes['2xl']};
`;

export const StyledH3 = styled(Title).attrs({ as: 'h3' })`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.secondary};
`;
