import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../Global/typography.styles';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.primary};
`;

export const HeaderTitle = styled(Title)`
  font-size: 1.3rem;
`;
