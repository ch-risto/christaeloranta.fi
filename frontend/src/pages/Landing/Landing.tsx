import React from 'react';
import PortfolioList from '../../components/Portfolio/PortfolioList';
import { StyledDiv } from '../../components/Global/content.styles';

const Landing: React.FC = () => {
  return (
    <>
      <PortfolioList></PortfolioList>
      <StyledDiv>Tekstiä, jota kirjoitan diipadaa</StyledDiv>
    </>
  );
};

export default Landing;
