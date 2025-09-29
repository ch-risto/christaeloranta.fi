import React from 'react';
import { StyledH2, Title } from '../../components/Global/typography.styles';
import { StyledDiv, StyledIngressDiv } from '../../components/Global/content.styles';
import { ContentWrapper, FlexColumnWrapper } from '../../components/Layout/layout.styles';
import { HeaderContainer } from '../../components/Header/header.styles';

const About: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <FlexColumnWrapper>
          <Title>Meitsijäbyli</Title>
          <StyledIngressDiv>
            Humanisti insinööri ja taiteellinen nörtti. <br />
            Jonkun sortin tuuliviiri
          </StyledIngressDiv>
        </FlexColumnWrapper>
      </HeaderContainer>
      <ContentWrapper>
        <StyledH2>Tausta ravintola-alalla</StyledH2>
        <StyledDiv>Lyhyt kappale taustasta</StyledDiv>
        <StyledH2>Loputtoman utelias</StyledH2>
        <StyledDiv>
          Päädyin ohjelmistokehityksen pariin uteliaisuudesta kaikkeen uuteen ja halusta olla mukana
          luomassa uusia maailmoja.
        </StyledDiv>
        <StyledDiv>Miksi teen mitä teen</StyledDiv>
        <StyledH2>Tavoitteita</StyledH2>
        <StyledDiv>Mitä haluaisin tehdä</StyledDiv>
      </ContentWrapper>
    </>
  );
};

export default About;
