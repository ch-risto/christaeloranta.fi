import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 18px;
    left: 18px;
    width: 320px;
    height: 320px;
    background-color: ${(props) => props.theme.colors.accent};
    -webkit-mask-image: url('src/assets/ch_logo.svg');
    mask-image: url('src/assets/ch_logo.svg');
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    opacity: 0.65;
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1rem;

    &::before {
      width: 160px;
      height: 160px;
      top: 10px;
      left: 10px;
    }
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
