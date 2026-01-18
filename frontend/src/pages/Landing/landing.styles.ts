import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroSection = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  text-align: center;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.background});
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing['2xl']} ${(props) => props.theme.spacing.lg};
    padding-top: 120px;
    min-height: 50vh;
  }
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.primary};
  line-height: ${(props) => props.theme.lineHeights.tight};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0 0 ${(props) => props.theme.spacing['2xl']} 0;
  line-height: ${(props) => props.theme.lineHeights.relaxed};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const CTAContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

export const CTAButton = styled(Link)`
  padding: ${(props) => props.theme.spacing.lg} ${(props) => props.theme.spacing['2xl']};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border: 2px solid ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accent};
  background-color: transparent;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const FeaturedSection = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.colors.background};
`;

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing['2xl']} 0;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto ${(props) => props.theme.spacing['3xl']};
`;

export const ProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.cardBackground};
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

export const ProjectContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProjectSummary = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.secondary};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
  flex: 1;
`;

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
  margin-top: auto;
`;

export const SkillTag = styled.span`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.xs} ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
`;

export const SkillsSection = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.colors.background};
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${(props) => props.theme.spacing['2xl']};
  max-width: 1200px;
  margin: 0 auto;
`;

export const SkillCategory = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const SkillCategoryTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.accent};
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkillItem = styled.li`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.primary};
`;

export const ViewAllButton = styled(Link)`
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
  margin: ${(props) => props.theme.spacing['2xl']} auto 0;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.background};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;
