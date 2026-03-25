import { BaseMain, Ingressi, StyledH1 } from '../../components/common/BaseComponents.styles';
import FAQSection from '../../components/common/FAQ/FAQSection';
import AccordionElement from '../../components/common/FAQ/FAQSection';
import { faqData } from '../../data/faqs';
import { AboutHero } from './About.styles';

const About: React.FC = () => {
    return (
        <BaseMain>
            <AboutHero>
                <StyledH1>Christa Eloranta</StyledH1>
                <Ingressi>
                    Olen ohjelmistokehittäjä, puuseppä, taiteen kandidaatti, baarimestari ja utelias
                    tuuliviiri.
                </Ingressi>
            </AboutHero>
            <FAQSection title="Usein kysytyt kysymykset" items={faqData.general} />
            <AccordionElement title="Tekniset FAQ:t" items={faqData.pricing} />
        </BaseMain>
    );
};

export default About;
