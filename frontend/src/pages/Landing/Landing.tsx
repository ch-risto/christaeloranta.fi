import React from 'react';

import Header from '../../components/Header/Header';
import { ContentWrapper } from '../../components/Layout/layout.styles';

const Landing: React.FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        {/* <About />
      <PortfolioOverview />
      <Contact /> */}
      </ContentWrapper>
    </>
  );
};

export default Landing;
