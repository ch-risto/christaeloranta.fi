import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.primary};
`;
