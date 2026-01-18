import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledP = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.text};
  line-height: ${(props) => props.theme.lineHeights.normal};
`;

export const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.text};
`;

export const CenteredDiv = styled(StyledDiv)`
  text-align: center;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.link};
  line-height: ${(props) => props.theme.lineHeights.snug};

  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }

  &:visited {
    color: ${(props) => props.theme.colors.linkVisited};
  }
`;

export const StyledNavigationLink = styled(Link)`
  color: ${(props) => props.theme.colors.link};
  line-height: 1.3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
