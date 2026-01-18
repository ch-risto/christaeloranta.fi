import styled from 'styled-components';
import { Title } from '../Global/typography.styles';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 200px;
  width: 100%;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 8px 0 8px 100px;
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: 2px solid ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accent};
  padding: 8px 10px;
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
`;

export const ButtonContainer = styled.div<{ $open: boolean }>`
  display: flex;
  flex-direction: row;
  gap: 16px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    top: 56px;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 12px;
    background-color: ${(props) => props.theme.colors.cardBackground};
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: ${(props) => props.theme.borderRadius.lg};
    box-shadow: ${(props) => props.theme.shadows.md};
    display: ${(props) => (props.$open ? 'flex' : 'none')};
    min-width: 200px;
    z-index: 5;
  }
`;

export const HeaderTitle = styled(Title)`
  font-size: 1.3rem;
  align-items: flex-end;
  margin: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;
