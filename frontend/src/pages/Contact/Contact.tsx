import React from 'react';
import {
  ContactHero,
  ContactTitle,
  ContactIntro,
  ContactContent,
  ContactGrid,
  ContactCard,
  ContactLabel,
  ContactLink,
  SocialLinks,
  SocialLink,
  Message,
} from './contact.styles';

const Contact: React.FC = () => {
  return (
    <>
      <ContactHero>
        <ContactTitle>Ota yhteyttä</ContactTitle>
        <ContactIntro>
          Olen kiinnostunut uusista haasteista ja yhteistyömahdollisuuksista. Lähetä minulle
          viesti tai ota suoraan yhteyttä.
        </ContactIntro>
      </ContactHero>

      <ContactContent>
        <ContactGrid>
          <ContactCard>
            <ContactLabel>Sähköposti</ContactLabel>
            <ContactLink href="mailto:eloranta.christa@gmail.com">
              eloranta.christa@gmail.com
            </ContactLink>
          </ContactCard>

          <ContactCard>
            <ContactLabel>Puhelin</ContactLabel>
            <ContactLink href="tel:+358445009018">+358 445 009 018</ContactLink>
          </ContactCard>

          <ContactCard>
            <ContactLabel>Sijainti</ContactLabel>
            <p style={{ fontSize: '1rem', color: '#666' }}>Tampere, Suomi</p>
          </ContactCard>
        </ContactGrid>

        <SocialLinks>
          <SocialLink href="https://github.com/ch-risto" target="_blank" rel="noopener noreferrer" title="GitHub">
            →
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/christa-eloranta" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            →
          </SocialLink>
        </SocialLinks>

        <Message>
          Pidän siitä, kun pyydetään vastausta kaukaa. En lupaa vastata 5 sekunnissa, mutta
          pyrin palauttamaan viestin mahdollisimman pian.
        </Message>
      </ContactContent>
    </>
  );
};

export default Contact;
