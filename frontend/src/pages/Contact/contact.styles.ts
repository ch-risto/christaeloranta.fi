import styled from 'styled-components';

export const ContactHero = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  background: linear-gradient(135deg, ${(props) => props.theme.colors.background}, ${(props) => props.theme.colors.background});
  text-align: center;

@media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing['2xl']} ${(props) => props.theme.spacing.lg};
    padding-top: 120px;
  }
`;

export const ContactTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  margin: 0 0 ${(props) => props.theme.spacing.lg} 0;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
  }
`;

export const ContactIntro = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.secondary};
  max-width: 600px;
  margin: 0 auto;
`;

export const ContactContent = styled.section`
  padding: ${(props) => props.theme.spacing['3xl']} ${(props) => props.theme.spacing.xl};
  max-width: 800px;
  margin: 0 auto;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing['2xl']};
  margin-bottom: ${(props) => props.theme.spacing['3xl']};
`;

export const ContactCard = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
`;

export const ContactLabel = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0 ${(props) => props.theme.spacing.md} 0;
`;

export const ContactLink = styled.a`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.accent};
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing['2xl']};
  padding-top: ${(props) => props.theme.spacing['2xl']};
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.background};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.lg};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

export const Message = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.primary};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
  margin-top: ${(props) => props.theme.spacing['2xl']};
  text-align: center;
`;
