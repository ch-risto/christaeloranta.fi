import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledP = styled.p`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.text};
  line-height: ${(props) => props.theme.lineHeights.normal};
`;

// Todo: Jos on div, missä on pelkästään tekstiä, tee siitä kapeampi. Mieti, päteekö sama kans Titleen ja Ingressiin.
// Pitää kans miettiä asettelu, haluutko, et yksinäiset (pelkkä teksti ilmamn kuvaa) on yksinäisiä, vai keskitettyjä?
// const JustTextDiv = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
//   padding: 16px 0;
//   text-align: center;
// `;

export const StyledDiv = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeights.normal};

  &:not(:last-child) {
    padding-bottom: 1rem;
  }
`;

export const StyledIngressDiv = styled(StyledDiv)`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.5rem 0 1.5rem 0;
`;

export const StyledCenteredDiv = styled(StyledDiv)`
  text-align: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
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
