import React, { useState, useEffect } from 'react';
import skillsData from '../../content/skills.json';
import portfolioData from '../../content/portfolio.json';
import {
  HeroSection,
  HeroContent,
  HeroHeading,
  HeroSubtitle,
  CTAContainer,
  CTAButton,
  FeaturedSection,
  SectionTitle,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectSummary,
  SkillTags,
  SkillTag,
  SkillsSection,
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  SkillsList,
  SkillItem,
  ViewAllButton,
} from './landing.styles';

interface PortfolioItem {
  id: number;
  title: string;
  summary: string;
  image: string;
  type: string;
  skills: string[];
}

const Landing: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    // Show top 3 projects
    setFeaturedProjects(portfolioData.slice(0, 3) as PortfolioItem[]);
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroHeading>Full-Stack Kehittäjä & Tuotteistaja</HeroHeading>
          <HeroSubtitle>
            Ratkaisin todellisia ongelmia teknologian avulla. Kokonaisuuksia hahmottava insinööri,
            jolle käyttäjäkeskeisyys on ensimmäinen.
          </HeroSubtitle>
          <CTAContainer>
            <CTAButton to="/portfolio">Katso työt</CTAButton>
            <CTAButton to="/contact">Ota yhteyttä</CTAButton>
          </CTAContainer>
        </HeroContent>
      </HeroSection>

      <FeaturedSection>
        <SectionTitle>Valitut työt</SectionTitle>
        <ProjectGrid>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} to={`/portfolio/${project.id}`}>
              <ProjectImage>Kuvan paikka</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSummary>{project.summary}</ProjectSummary>
                <SkillTags>
                  {project.skills.slice(0, 3).map((skill, index) => (
                    <SkillTag key={index}>{skill}</SkillTag>
                  ))}
                </SkillTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
        <div style={{ textAlign: 'center' }}>
          <ViewAllButton to="/portfolio">Katso kaikki työt</ViewAllButton>
        </div>
      </FeaturedSection>

      <SkillsSection>
        <SectionTitle>Osaaminen</SectionTitle>
        <SkillsGrid>
          {skillsData.map((categoryData, index) => (
            <SkillCategory key={index}>
              <SkillCategoryTitle>{categoryData.category}</SkillCategoryTitle>
              <SkillsList>
                {categoryData.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>{skill}</SkillItem>
                ))}
              </SkillsList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </>
  );
};

export default Landing;
