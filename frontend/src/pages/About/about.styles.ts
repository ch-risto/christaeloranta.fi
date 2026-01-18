import styled from 'styled-components';

export const AboutHero = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.background});
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing['2xl']} ${(props) => props.theme.spacing.lg};
    padding-top: 120px;
  }
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
  }
`;

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.xl} 0;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const EducationItem = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-left: 3px solid ${(props) => props.theme.colors.accent};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius.lg};
`;

export const EducationDegree = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.sm} 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const EducationMeta = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0 0 ${(props) => props.theme.spacing.sm} 0;
`;

export const EducationDetails = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  margin: 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PassionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
`;

export const PassionItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.md};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.colors.cardBackground};

  &::before {
    content: '✓';
    color: ${(props) => props.theme.colors.accent};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    font-size: ${(props) => props.theme.fontSizes.lg};
    flex-shrink: 0;
  }
`;

export const PassionText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primary};
  line-height: ${(props) => props.theme.lineHeights.normal};
`;
