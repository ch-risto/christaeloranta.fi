import React from 'react';
import aboutData from '../../content/about.json';
import {
  AboutHero,
  AboutContent,
  AboutTitle,
  Section,
  SectionTitle,
  Paragraph,
  EducationList,
  EducationItem,
  EducationDegree,
  EducationMeta,
  EducationDetails,
  PassionList,
  PassionItem,
  PassionText,
} from './about.styles';

const About: React.FC = () => {
  return (
    <>
      <AboutHero>
        <AboutContent>
          <AboutTitle>Minusta</AboutTitle>
        </AboutContent>
      </AboutHero>

      <Section>
        <SectionTitle>Kuka olen</SectionTitle>
        <Paragraph>{aboutData.intro}</Paragraph>
        <Paragraph>{aboutData.background}</Paragraph>
      </Section>

      <Section>
        <SectionTitle>Tausta ja koulutus</SectionTitle>
        <EducationList>
          {aboutData.education.map((edu, index) => (
            <EducationItem key={index}>
              <EducationDegree>{edu.degree}</EducationDegree>
              <EducationMeta>{edu.school}</EducationMeta>
              <EducationDetails>{edu.field}</EducationDetails>
              <EducationDetails>{edu.years}</EducationDetails>
              {edu.thesis && <EducationDetails>Opinnäytetyö: {edu.thesis}</EducationDetails>}
              {edu.minor && <EducationDetails>Sivuaine: {edu.minor}</EducationDetails>}
            </EducationItem>
          ))}
        </EducationList>
      </Section>

      <Section>
        <SectionTitle>Mitä minua ohjaa</SectionTitle>
        <Paragraph>{aboutData.motivation}</Paragraph>
        <PassionList>
          {aboutData.passions.map((passion, index) => (
            <PassionItem key={index}>
              <PassionText>{passion}</PassionText>
            </PassionItem>
          ))}
        </PassionList>
      </Section>
    </>
  );
};

export default About;
