import styled from 'styled-components';

// Todo: tää pitää varmaan siirtää jonnekin järkevämpään paikkaan koska Layout ei enää käytä tätä
export const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 32px;
  }
`;

export const NarrowContentWrapper = styled(ContentWrapper)`
  max-width: 800px;
`;

export const FlexRowWrapper = styled(ContentWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FlexColumnWrapper = styled(ContentWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;
