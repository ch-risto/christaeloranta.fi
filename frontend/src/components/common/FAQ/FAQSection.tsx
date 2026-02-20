import React from 'react';
import {
    Title,
    AccordionSection,
    AccordionItem,
    AccordionTrigger,
    AccordionHeader,
    AccordionContent,
    ContentPaddingWrapper,
} from './FAQSection.styles.ts';

interface FAQData {
    question: string;
    answer: React.ReactNode;
}

interface FAQSectionProps {
    title: string;
    items: FAQData[];
}

const AccordionElement: React.FC<FAQSectionProps> = ({ title, items }) => {
    return (
        <AccordionSection type="single" collapsible>
            <Title>{title}</Title>
            {items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>
                        <AccordionHeader>{item.question}</AccordionHeader>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ContentPaddingWrapper>{item.answer}</ContentPaddingWrapper>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </AccordionSection>
    );
};

export default AccordionElement;
