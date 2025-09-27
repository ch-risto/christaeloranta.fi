import contactData from '../../content/contact.json';
import React from 'react';
import { StyledCenteredDiv, StyledLink } from '../../components/Global/content.styles';
import ExternalLinkIcon from '../../assets/icons/link-external-new-window.svg?react';
import { Icon } from '../../components/Global/Icon.tsx';

const Contact: React.FC = () => {
  return (
    <section>
      {contactData.map((item) => (
        <StyledCenteredDiv key={item.email}>
          <h2>
            {item.name} {item.surname}
          </h2>
          <p>{item.title}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
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
            {item.address.street}, {item.address.postalCode} {item.address.city},{' '}
            {item.address.country}
          </address>
        </StyledCenteredDiv>
      ))}
    </section>
  );
};

export default Contact;
