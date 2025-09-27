import React from 'react';
import { StyledH2, Title } from '../../components/Global/typography.styles';
import { StyledCenteredDiv, StyledIngressDiv } from '../../components/Global/content.styles';
import { ContentWrapper } from '../../components/Layout/layout.styles';

const About: React.FC = () => {
  return (
    <ContentWrapper>
      <Title>Meitsijäbyli</Title>
      <StyledIngressDiv>Lyhyt kappale yleisesti</StyledIngressDiv>
      <StyledH2>Taustaa</StyledH2>
      <StyledCenteredDiv>Lyhyt kappale taustasta</StyledCenteredDiv>
      <StyledH2>Intohimoja</StyledH2>
      <StyledCenteredDiv>Miksi teen mitä teen</StyledCenteredDiv>
      <StyledH2>Tavoitteita</StyledH2>
      <StyledCenteredDiv>Mitä haluaisin tehdä</StyledCenteredDiv>
    </ContentWrapper>
  );
};

export default About;
