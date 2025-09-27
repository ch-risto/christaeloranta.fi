import React from 'react';
import { HeaderContainer } from './header.styles';
import { Title } from '../Global/typography.styles';
import { StyledIngressDiv } from '../Global/content.styles';
import { FlexColumnWrapper } from '../Layout/layout.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <FlexColumnWrapper>
        <Title>Christa Eloranta</Title>
        <StyledIngressDiv>Vähän sitä sun tätä - siistejä juttuja</StyledIngressDiv>
      </FlexColumnWrapper>
    </HeaderContainer>
  );
};

export default Header;
