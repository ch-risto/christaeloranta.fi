import styled from 'styled-components';

export const PortfolioHero = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.background});
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing['2xl']} ${(props) => props.theme.spacing.lg};
    padding-top: 120px;
  }
`;

export const PortfolioTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
  }
`;

export const PortfolioIntro = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

export const PortfolioContent = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing['2xl']};
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 2px solid ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$active ? props.theme.colors.accent : 'transparent'};
  color: ${(props) =>
    props.$active ? props.theme.colors.background : props.theme.colors.accent};

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${(props) => props.theme.spacing['2xl']};
`;

export const ProjectCard = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  background-color: ${(props) => props.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ProjectCardContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectType = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-bottom: ${(props) => props.theme.spacing.md};
  width: fit-content;
`;

export const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProjectDescription = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  flex: 1;
  line-height: ${(props) => props.theme.lineHeights.normal};
`;

export const ProjectMeta = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkillBadge = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.xs};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing['3xl']};
  color: ${(props) => props.theme.colors.secondary};
`;
