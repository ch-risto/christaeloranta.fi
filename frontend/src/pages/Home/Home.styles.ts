import styled from 'styled-components';

export const HeroContainer = styled.section`
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-top: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 1rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 3rem;
  align-items: start;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 1.5rem 0;
  }

  h2 {
    padding-left: 2.5rem;
    margin: 0 0 1.5rem 0;
    color: ${(props) => props.theme.colors.accent};
    opacity: 0.85;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;

    h2 {
      font-size: 1.1rem;
      padding-left: unset;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const HeadlineImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  display: block;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 85%;
  }
`;

export const Intro = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
  margin: 0 0 1rem 0;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.75;
  max-width: 600px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Tagline = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-style: italic;
  margin: 1.5rem 0 0 0;
  color: ${(props) => props.theme.colors.accent};
  opacity: 0.9;
`;

export const HeroPhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    order: -1;
    justify-content: center;
    height: auto;
  }
`;

export const HeroPhoto = styled.img`
  width: 100%;
  max-width: 280px;
  height: 280px;
  max-height: 280px;
  border-radius: 100%;
  object-fit: cover;
  object-position: center 17%;
  box-shadow: 0 20px 30px rgba(212, 140, 132, 0.25);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 220px;
    height: 220px;
    object-position: center 17%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 180px;
    height: 180px;
    object-position: center 17%;
  }
`;

export const LinksContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
  }
`;

export const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #2e211d;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  width: fit-content;

  &:hover {
    color: #a0522d;
    transform: translateY(-3px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const LinkIcon = styled.span`
  font-size: 1rem;
  opacity: 0.6;
  transition: opacity 0.2s ease;
  color: #a0522d;

  LinkItem:hover & {
    opacity: 1;
  }
`;

export const LinkText = styled.span`
  font-weight: 400;
`;

export const LogoImage = styled.img`
  height: 60px;
  width: auto;
  opacity: 0.95;
  transition:
    opacity 0.2s ease,
    filter 0.2s ease;
  filter: brightness(0) saturate(100%) invert(38%) sepia(14%) saturate(4280%) hue-rotate(343deg)
    brightness(84%) contrast(77%);

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 50px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: 40px;
  }
`;

export const ArchiveLogo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  LogoImage {
    height: 100px;
    width: auto;

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      height: 60px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const ArchiveContainer = styled.section`
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  background-color: #f9ecec;
  border: 1px solid #d48c84;
  border-radius: 12px;
  padding: 2.5rem;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 1.25rem;
  }
`;

export const ArchiveContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const ArchiveText = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 300;
  margin: 0 0 1.5rem 0;
  color: #2e211d;
  opacity: 0.8;
`;

export const ArchiveTextContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
    color: #2e211d;
    letter-spacing: -0.01em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;
  }
`;

export const ArchiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0 0.4rem;
  color: #a0522d;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  width: fit-content;

  &:hover {
    color: #d48c84;
    transform: translateX(4px);
  }

  &:focus {
    outline: 2px solid #a0522d;
    outline-offset: 4px;
    border-radius: 2px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
