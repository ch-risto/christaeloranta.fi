import contactData from '../../content/contact.json';
import React from 'react';
import {
  ColumnContainer,
  StyledCenteredDiv,
  StyledIngressDiv,
  StyledLink,
} from '../../components/Global/content.styles';
import ExternalLinkIcon from '../../assets/icons/link-external-new-window.svg?react';
import { Icon } from '../../components/Global/Icon.tsx';
import { ContactContainer } from './contact.styles.ts';
import { StyledH2 } from '../../components/Global/typography.styles.ts';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      {contactData.map((item) => (
        <StyledCenteredDiv key={item.email}>
          <StyledH2>
            {item.name} {item.surname}
          </StyledH2>
          <StyledIngressDiv>{item.title}</StyledIngressDiv>
          <ColumnContainer>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <StyledLink href={item.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
              <Icon size="xsmall">
                <ExternalLinkIcon focusable="false" />
              </Icon>
              <span className="visually-hidden">(avautuu uuteen välilehteen)</span>
            </StyledLink>
            <StyledLink href={item.github} target="_blank" rel="noopener noreferrer">
              GitHub
              <Icon size="xsmall">
                <ExternalLinkIcon focusable="false" />
              </Icon>
              <span className="visually-hidden">(avautuu uuteen välilehteen)</span>
            </StyledLink>
            <img src={item.photo} alt={`${item.name} ${item.surname}`} />
            <address>
              {item.address.street}, <br /> {item.address.postalCode} {item.address.city} <br />
              {item.address.country}
            </address>
          </ColumnContainer>
        </StyledCenteredDiv>
      ))}
    </ContactContainer>
  );
};

export default Contact;
