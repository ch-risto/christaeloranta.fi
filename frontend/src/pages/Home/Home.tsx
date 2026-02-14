import type React from 'react';
import chLogoSvg from '../../assets/ch_.svg';
import christaPhoto from '../../assets/ChristaEloranta.jpg';
import christaHeadline from '../../assets/christaeloranta.png';
import ElorantaCV from '../../assets/Eloranta_CV.pdf';
import * as S from './Home.styles.ts';

const Home: React.FC = () => {
  return (
    <main className="app">
      {/* Hero Section */}
      <S.HeroContainer>
        <S.HeroContent>
          <S.HeroText>
            <h1>
              <S.HeadlineImage src={christaHeadline} alt="Hei, olen Christa Eloranta" />
            </h1>
            <h2>Tuotelähtöinen kehittäjä</h2>
            <S.Intro>
              Utelias ja ratkaisukeskeinen tekijä, joka yhdistää teknisen osaamisen ja luovan
              ongelmanratkaisun merkityksellisiksi kokonaisuuksiksi.
            </S.Intro>
            {/* <p>
                            Olen ohjelmistokehittäjä, jolla on käsityöläisen sielu. Taustani puuseppänä ja palvelualalla on opettanut, että laatu syntyy yksityiskohdista ja lopputuloksen täytyy paitsi toimia, myös tuntua oikealta. Nyt rakennan kestäviä ratkaisuja koodilla – samalla ammattiylpeydellä.
                        </p> */}
            <S.Tagline>Solekko tehä. Ite kun tekee, saa just mitä tekee.</S.Tagline>
          </S.HeroText>
          <S.HeroPhotoContainer>
            <S.HeroPhoto src={christaPhoto} alt="Christa Eloranta" />
          </S.HeroPhotoContainer>
        </S.HeroContent>
      </S.HeroContainer>

      {/* Links / Contact Section */}
      <S.LinksContainer>
        <S.LinkItem
          href="https://github.com/ch-risto"
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.LinkIcon>↗</S.LinkIcon>
          <S.LinkText>GitHub</S.LinkText>
        </S.LinkItem>
        <S.LinkItem
          href="https://linkedin.com/in/christa-eloranta"
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.LinkIcon>↗</S.LinkIcon>
          <S.LinkText>LinkedIn</S.LinkText>
        </S.LinkItem>
        <S.LinkItem href="mailto:eloranta.christa@gmail.com" className="link-item">
          <S.LinkIcon>↗</S.LinkIcon>
          <S.LinkText>Email</S.LinkText>
        </S.LinkItem>

        <S.LinkItem
          href={ElorantaCV}
          className="link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.LinkIcon>↗</S.LinkIcon>
          <S.LinkText>CV</S.LinkText>
        </S.LinkItem>
      </S.LinksContainer>

      {/* Archive / Legacy Section */}
      <S.ArchiveContainer>
        <S.ArchiveContent>
          <S.ArchiveLogo>
            <S.LogoImage src={chLogoSvg} alt="Christa Eloranta logo" />
          </S.ArchiveLogo>
          <S.ArchiveTextContent>
            <h2 className="archive-headline">Portfolio uudistuu</h2>
            <S.ArchiveText>
              Uudistan parhaillaan portfoliotani. Sillä välin voit tutustua aiempiin töihini
              arkistosivullani.
            </S.ArchiveText>
            <S.ArchiveLink
              href="https://archive.christaeloranta.fi"
              className="archive-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Siirry arkistosivulle →
            </S.ArchiveLink>
          </S.ArchiveTextContent>
        </S.ArchiveContent>
      </S.ArchiveContainer>
    </main>
  );
};

export default Home;
