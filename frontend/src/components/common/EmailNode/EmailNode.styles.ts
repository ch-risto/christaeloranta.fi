import styled from 'styled-components';
import { StyledButton, SvgContainer } from '../BaseComponents.styles';

export const EmailRow = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const CopyButton = styled(StyledButton)<{ $isSuccess?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    transition:
        background-color 0.2s ease-in-out,
        transform 0.1s;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1;
    transform-origin: center center;
    will-change: transform;

    &:active {
        transform: scale(0.98);
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
`;

export const SVGIcon = styled(SvgContainer)`
    filter: ${({ theme }) => theme.colors.logoFilter};
`;
