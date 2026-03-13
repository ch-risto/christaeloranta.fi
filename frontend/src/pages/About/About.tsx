import { BaseHero, BaseMain } from '../../components/common/BaseComponents.styles';
import FAQSection from '../../components/common/FAQ/FAQSection';
import AccordionElement from '../../components/common/FAQ/FAQSection';
import { faqData } from '../../data/faqs';

const About: React.FC = () => {
    return (
        <BaseMain>
            <BaseHero>
                <h1>Christa Eloranta</h1>
                <p>
                    Olen ohjelmistokehittäjä, puuseppä, taiteen kandidaatti, baarimestari ja utelias
                    tuuliviiri.
                </p>
            </BaseHero>
            <FAQSection title="Usein kysytyt kysymykset" items={faqData.general} />
            <AccordionElement title="Tekniset FAQ:t" items={faqData.pricing} />
        </BaseMain>
    );
};

export default About;
