import styled from 'styled-components';

export const CVHero = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.background});
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing['2xl']} ${(props) => props.theme.spacing.lg};
    padding-top: 120px;
  }
`;

export const CVTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
  }
`;

export const DownloadButton = styled.a`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing['2xl']};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  border: 2px solid ${(props) => props.theme.colors.accent};
  background-color: transparent;
  transition: all 0.3s ease;
  margin-top: ${(props) => props.theme.spacing.lg};

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const CVContent = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

export const Section = styled.div`
  margin-bottom: ${(props) => props.theme.spacing['3xl']};
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes['2xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.xl} 0;
  color: ${(props) => props.theme.colors.primary};
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  padding-bottom: ${(props) => props.theme.spacing.lg};
`;

export const ExperienceItem = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xl};
  padding-left: ${(props) => props.theme.spacing.xl};
  border-left: 3px solid ${(props) => props.theme.colors.accent};
`;

export const ExperienceTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.sm} 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const ExperienceMeta = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.accent};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
`;

export const ExperienceDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  margin: 0;
  line-height: ${(props) => props.theme.lineHeights.relaxed};
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};
`;

export const SkillGroup = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const SkillGroupTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.accent};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkillListItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
`;
