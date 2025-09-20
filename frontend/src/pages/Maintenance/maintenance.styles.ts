import styled from 'styled-components';

export const MaintenanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  img {
    height: 18em;
    padding: 1.5rem;
    transition: all 0.3s ease;

    filter: ${(props) => (props.theme.name === 'dark' ? 'invert(1)' : 'none')};

    &:hover {
      filter: ${(props) =>
        props.theme.name === 'dark'
          ? 'invert(1) drop-shadow(0 0 1em #ffffff)'
          : 'drop-shadow(0 0 1em ${props.theme.colors.primaryHover})'};
    }
  }
`;
