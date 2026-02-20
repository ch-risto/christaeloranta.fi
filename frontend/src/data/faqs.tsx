import React from 'react';

export interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

export const faqData = {
    general: [
        {
            question: 'Esimerkkikysymys 1',
            answer: 'Esimerkkivastaus 1, joka on hieman pidempi selventämään, että vastaus voi olla useampi lause pitkä.',
        },
        {
            question: 'Esimerkkikysymys 2',
            answer: (
                <>
                    Esimerkkivastaus 2, jossa on <a href="mailto:email@example.com">linkki</a>.
                </>
            ),
        },
    ],
    pricing: [
        {
            question: 'Esimerkkikysymys 3',
            answer: 'Tää on eri elementissä ja eri aiheesta, mutta muuten samaa tyyliä.',
        },
    ],
};
