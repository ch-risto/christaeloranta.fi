import React, { useState } from 'react';
import portfolioData from '../../content/portfolio.json';
import {
  PortfolioHero,
  PortfolioTitle,
  PortfolioIntro,
  PortfolioContent,
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectCardContent,
  ProjectType,
  ProjectTitle,
  ProjectDescription,
  ProjectMeta,
  SkillsList,
  SkillBadge,
  EmptyState,
} from './portfolio.styles';

interface Project {
  id: number;
  title: string;
  summary: string;
  description: string;
  image: string;
  type: string;
  skills: string[];
  startDate: string;
  endDate: string;
  company: string;
}

const Portfolio: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // Get unique types
  const types = Array.from(new Set(portfolioData.map((p) => p.type)));

  // Filter projects
  const filteredProjects = selectedType
    ? portfolioData.filter((p) => p.type === selectedType)
    : portfolioData;

  const typeLabels: { [key: string]: string } = {
    kehitys: 'Kehitys',
    design: 'Design',
    tuotteistaminen: 'Tuotteistaminen',
    artesaani: 'Käsityöt',
  };

  return (
    <>
      <PortfolioHero>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioIntro>
          Tässä ovat merkityksellisimmät projektini, jotka osoittavat osaamistani eri
          teknologioista ja lähestymistavoista.
        </PortfolioIntro>
      </PortfolioHero>

      <PortfolioContent>
        <FilterContainer>
          <FilterButton
            $active={selectedType === null}
            onClick={() => setSelectedType(null)}
          >
            Kaikki
          </FilterButton>
          {types.map((type) => (
            <FilterButton
              key={type}
              $active={selectedType === type}
              onClick={() => setSelectedType(type)}
            >
              {typeLabels[type] || type}
            </FilterButton>
          ))}
        </FilterContainer>

        {filteredProjects.length > 0 ? (
          <ProjectsGrid>
            {(filteredProjects as Project[]).map((project) => (
              <ProjectCard key={project.id}>
                <ProjectImage>Kuvan paikka</ProjectImage>
                <ProjectCardContent>
                  <ProjectType>{typeLabels[project.type] || project.type}</ProjectType>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectMeta>
                    {project.company} • {project.startDate}
                    {project.endDate && project.endDate !== 'Jatkuu' && ` - ${project.endDate}`}
                  </ProjectMeta>
                  <SkillsList>
                    {project.skills.map((skill, index) => (
                      <SkillBadge key={index}>{skill}</SkillBadge>
                    ))}
                  </SkillsList>
                </ProjectCardContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        ) : (
          <EmptyState>
            <p>Ei projekteja tällä kategorialla.</p>
          </EmptyState>
        )}
      </PortfolioContent>
    </>
  );
};

export default Portfolio;
