import styled from 'styled-components';
import * as Accordion from '@radix-ui/react-accordion';
import { slideDown, slideUp } from '../../../styles/animations';

export const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const AccordionSection = styled(Accordion.Root)`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &:not(:last-child) {
        margin-bottom: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin: 2rem auto;
    }
`;

export const AccordionItem = styled(Accordion.Item)`
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
`;

export const AccordionHeader = styled(Accordion.Header)`
    margin: 0;
    width: 100%;
`;

export const AccordionTrigger = styled(Accordion.Trigger)`
    background: none;
    border: none;
    width: 100%;
    overflow: hidden;
    transition:
        background 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
        border 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    padding: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.ide};
    color: ${({ theme }) => theme.colors.text};
    min-width: 0;
    box-sizing: border-box;

    &:hover:not([data-state='open']) {
        opacity: 0.8;
    }
`;

export const AccordionContent = styled(Accordion.Content)`
    overflow: hidden;
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    width: 100%;
    max-width: 100%;
    border-radius:
        0 0 ${({ theme }) => theme.borderRadius.md},
        ${({ theme }) => theme.borderRadius.md};
    font-family: ${({ theme }) => theme.fonts.ide};

    &[data-state='open'] {
        animation: ${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }

    &[data-state='closed'] {
        animation: ${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`;

export const ContentPaddingWrapper = styled.div`
    padding: 1rem;
    overflow-wrap: anywhere;
    max-width: 100%;
    box-sizing: border-box;
`;
