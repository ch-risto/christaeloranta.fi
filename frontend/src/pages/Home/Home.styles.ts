import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';
import { StyledSection } from '../../components/common/BaseComponents.styles';

export const HeroContainer = styled(StyledSection)``;

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
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 0 1.5rem 0;
    animation: ${fadeIn} 0.4s ease-out;
    animation-fill-mode: both;
  }

  h2 {
    padding-left: 2.5rem;
    margin: 0 0 1.5rem 0;
    color: ${({ theme }) => theme.colors.accent};
    opacity: ${({ theme }) => theme.opacity.mediumHigh};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: center;

    h2 {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
      font-weight: ${({ theme }) => theme.fontWeights.light};
      padding-left: unset;
    }
  }
`;

export const HeadlineImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  display: block;
  width: auto;
  height: auto;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 85%;
  }
`;

export const Intro = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-align: center;
  }
`;

export const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  margin: 1.5rem 0 0 0;
  color: ${({ theme }) => theme.colors.accent};
  opacity: ${({ theme }) => theme.opacity.mediumHigh};
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
  border-radius: ${({ theme }) => theme.borderRadius.full};
  object-fit: cover;
  object-position: center 17%;
  box-shadow: ${({ theme }) => theme.colors.heroPhoto};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: ${fadeIn} 0.4s ease-out;
  animation-fill-mode: both;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 220px;
    height: 220px;
    object-position: center 17%;
  }
`;

export const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 0.5rem 0;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  width: fit-content;
  /* opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards; */

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: ${({ theme }) => theme.transforms.hopNorthEast};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const LinksContainer = styled(StyledSection)`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  /* & > ${LinkItem}:nth-child(1) { animation-delay: 0.1s; }
  & > ${LinkItem}:nth-child(2) { animation-delay: 0.2s; }
  & > ${LinkItem}:nth-child(3) { animation-delay: 0.3s; }
  & > ${LinkItem}:nth-child(4) { animation-delay: 0.4s; } */

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const LinkIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  opacity: ${({ theme }) => theme.opacity.low};
  transition: opacity 0.2s ease;
  color: ${({ theme }) => theme.colors.accent};

  LinkItem:hover & {
    opacity: ${({ theme }) => theme.opacity.high};
  }
`;

export const LinkText = styled.span`
  /* font-weight: 400; */
`;

export const LogoImage = styled.img`
  height: 60px;
  width: auto;
  opacity: ${({ theme }) => theme.opacity.mediumHigh};
  transition:
    opacity 0.2s ease,
    filter 0.2s ease;
  filter: ${({ theme }) => theme.colors.logoFilter};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    height: 50px;
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

export const ArchiveContainer = styled(StyledSection)`
  justify-content: flex-start;
  margin: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
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

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

export const ArchiveText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin: 0 0 1.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ theme }) => theme.opacity.mediumHigh};
`;

export const ArchiveTextContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    margin: 0 0 1rem 0;
    color: ${({ theme }) => theme.colors.text};
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
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  width: fit-content;

  &:hover {
    transform: ${(props) => props.theme.transforms.hopEast};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
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
