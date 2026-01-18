import React from 'react';
import skillsData from '../../content/skills.json';
import {
  CVHero,
  CVTitle,
  DownloadButton,
  CVContent,
  Section,
  SectionTitle,
  ExperienceItem,
  ExperienceTitle,
  ExperienceMeta,
  ExperienceDescription,
  SkillsContainer,
  SkillGroup,
  SkillGroupTitle,
  SkillList,
  SkillListItem,
} from './cv.styles';

const CV: React.FC = () => {
  const experience = [
    {
      title: 'Full Stack kehittäjä, Tuotekehitys',
      company: 'JJ 5/2024 - Net Group Oy, Tampere',
      description: [
        'Vastaan palvelumme SSO-ratkaisun (Shibboleth/Docker) modernisoinnista järjestelmän skaalautuvuuden ja hallittavuuden parantamiseksi.',
        'Johdan palveluidemme tuotteistusprosessia ja tuotteiden vientiä Odoo-järjestelmään. Toimin linkkinä teknologian, myynnin ja projektijohdon välillä.',
        'Olen mukana Django-pohjaisen integraatioprojektin Full-Stack-kehityksessä ja ylläpidossa. Ratkaisu on integroitu Flex-järjestelmään ja kokonaisuuteen kuuluu myös verkkokauppa osana laajempaa järjestelmäarkkitehtuuria.',
      ],
    },
    {
      title: 'Toiminimi: Muotoilu ja suunnittelu',
      company: 'Christa Eloranta 2019-',
      description: [
        'Rakennan verkkosivustojen visuaalisia kokonaisuuksia ja käyttöliittymiä WordPress-ympäristöön.',
        'Tuen teknologiavalintoja tutkimalla ja dokumentoimalla uusia ratkaisuja kehitysprojektien tarpeisiin.',
        'Sivutoimista käsityötuotteiden suunnittelua, toteuttamista ja myymistä.',
      ],
    },
    {
      title: 'Ravintola-alan kokemus',
      company: '2008-2018',
      description: [
        'Kymmenen vuoden monipuolinen kokemus ravintola-alalta.',
        'Kehittänyt vahvat vuorovaikutus- ja ongelmanratkaisutaidot sekä paineensietokyvyn työskennellessäni vuoropäällikkönä (Bar Soolo, 2014-2015) ja VT ravintolapäällikkönä (Pub Punapippuri, 2018-2019).',
      ],
    },
  ];

  return (
    <>
      <CVHero>
        <CVTitle>Curriculum Vitae</CVTitle>
        <DownloadButton href="/Eloranta_CV.pdf" download>
          ⬇ Lataa PDF
        </DownloadButton>
      </CVHero>

      <CVContent>
        <Section>
          <SectionTitle>Työkokemus</SectionTitle>
          {experience.map((job, index) => (
            <ExperienceItem key={index}>
              <ExperienceTitle>{job.title}</ExperienceTitle>
              <ExperienceMeta>{job.company}</ExperienceMeta>
              {job.description.map((desc, descIndex) => (
                <ExperienceDescription key={descIndex}>
                  • {desc}
                </ExperienceDescription>
              ))}
            </ExperienceItem>
          ))}
        </Section>

        <Section>
          <SectionTitle>Koulutus</SectionTitle>
          <ExperienceItem>
            <ExperienceTitle>Insinööri AMK</ExperienceTitle>
            <ExperienceMeta>Tieto- ja viestintätekniikka • Lapin AMK 2022-2025</ExperienceMeta>
            <ExperienceDescription>
              Opinnäytetyö: Docca SSO -järjestelmän uudistaminen
            </ExperienceDescription>
            <ExperienceDescription>Sivuaine: Teollinen muotoilu</ExperienceDescription>
          </ExperienceItem>
        </Section>

        <Section>
          <SectionTitle>Osaaminen</SectionTitle>
          <SkillsContainer>
            {skillsData.map((category, index) => (
              <SkillGroup key={index}>
                <SkillGroupTitle>{category.category}</SkillGroupTitle>
                <SkillList>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillListItem key={skillIndex}>{skill}</SkillListItem>
                  ))}
                </SkillList>
              </SkillGroup>
            ))}
          </SkillsContainer>
        </Section>

        <Section>
          <SectionTitle>Yhteystiedot</SectionTitle>
          <ExperienceDescription>
            📧 eloranta.christa@gmail.com
          </ExperienceDescription>
          <ExperienceDescription>
            📱 +358 445 009 018
          </ExperienceDescription>
          <ExperienceDescription>
            📍 Tampere, Suomi
          </ExperienceDescription>
          <ExperienceDescription>
            🔗 github.com/ch-risto
          </ExperienceDescription>
          <ExperienceDescription>
            💼 linkedin.com/in/christa-eloranta
          </ExperienceDescription>
        </Section>
      </CVContent>
    </>
  );
};

export default CV;
