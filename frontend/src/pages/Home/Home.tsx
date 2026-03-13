import type React from 'react';
import chLogoSvg from '../../assets/logos/ch_.svg';
import christaPhoto from '../../assets/photos/ChristaEloranta.jpg';
import ElorantaCV from '../../assets/Eloranta-CV.pdf';
import * as S from './Home.styles.ts';
import { useTheme } from 'styled-components';
import { BaseMain, StyledLinkImage } from '../../components/common/BaseComponents.styles.ts';
import { Tooltip } from '../../components/common/Tooltip/Tooltip.tsx';

const Home: React.FC = () => {
    const theme = useTheme();

    return (
        <BaseMain>
            {/* Hero Section */}
            <S.HeroContainer>
                <S.HeroContent>
                    <S.HeroText>
                        {/* TODO: tarviiks täs h1:siä? */}
                        <h1>
                            <S.HeadlineImage
                                src={theme.images.headline}
                                alt="Hei, olen Christa Eloranta"
                            />
                        </h1>
                        {/* TODO: Tämä vaan esimerkkinä */}
                        <Tooltip text="Tuotelähtöinen kehittäjä">
                            <h2>Tuotelähtöinen kehittäjä</h2>
                        </Tooltip>
                        <S.Intro>
                            Utelias ja ratkaisukeskeinen tekijä, joka yhdistää teknisen osaamisen ja
                            luovan ongelmanratkaisun merkityksellisiksi kokonaisuuksiksi.
                        </S.Intro>
                        <S.Tagline>Solekko tehä. Ite kun tekee, saa just mitä tekee.</S.Tagline>
                    </S.HeroText>
                    <S.HeroPhotoContainer>
                        <StyledLinkImage to="/about" aria-label="Siirry About-sivulle">
                            <S.HeroPhoto src={christaPhoto} alt="Christa Eloranta" />
                        </StyledLinkImage>
                    </S.HeroPhotoContainer>
                </S.HeroContent>
            </S.HeroContainer>

            {/* Links / Contact Section */}
            <S.LinksContainer>
                <S.LinkItem
                    href="https://github.com/ch-risto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.LinkIcon>↗</S.LinkIcon>
                    <S.LinkText>GitHub</S.LinkText>
                </S.LinkItem>
                <S.LinkItem
                    href="https://linkedin.com/in/christa-eloranta"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <S.LinkIcon>↗</S.LinkIcon>
                    <S.LinkText>LinkedIn</S.LinkText>
                </S.LinkItem>
                <S.LinkItem href="mailto:eloranta.christa@gmail.com">
                    <S.LinkIcon>↗</S.LinkIcon>
                    <S.LinkText>Email</S.LinkText>
                </S.LinkItem>

                <S.LinkItem href={ElorantaCV} target="_blank" rel="noopener noreferrer">
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
                        <h2>Portfolio uudistuu</h2>
                        <S.ArchiveText>
                            Uudistan parhaillaan portfoliotani. Sillä välin voit tutustua aiempiin
                            töihini arkistosivullani.
                        </S.ArchiveText>
                        <S.ArchiveLink
                            href="https://archive.christaeloranta.fi"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Siirry arkistosivulle →
                        </S.ArchiveLink>
                    </S.ArchiveTextContent>
                </S.ArchiveContent>
            </S.ArchiveContainer>
        </BaseMain>
    );
};

export default Home;
