import { BaseMain, CenteredP, LinkButton } from '../../components/common/BaseComponents.styles';
import { ContactCard, ContactH1, SVGArrow } from './Contact.styles';
import { EmailContactNode } from '../../components/common/EmailNode/EmailNode';
import arrowNarrowSvg from '../../assets/icons/arrow-narrow-right.svg';

const Contact: React.FC = () => {
    return (
        <BaseMain>
            <ContactCard>
                <ContactH1>Tehdäänkö yhteistyötä?</ContactH1>
                <CenteredP>
                    Kuulen mielelläni sinusta ja projekteistasi, tai kuulumisistasi muutenvaan! Ota
                    yhteyttä, niin jutellaan lisää.
                </CenteredP>
                <EmailContactNode />
                <LinkButton
                    href="https://linkedin.com/in/christa-eloranta"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                    <SVGArrow src={arrowNarrowSvg} alt="Go to LinkedIn profile" />
                </LinkButton>
                <LinkButton
                    href="https://www.instagram.com/christaeloranta"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                    <SVGArrow src={arrowNarrowSvg} alt="Go to LinkedIn profile" />
                </LinkButton>
            </ContactCard>
        </BaseMain>
    );
};

export default Contact;
