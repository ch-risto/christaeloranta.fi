import * as TooltipPrimitives from '@radix-ui/react-tooltip';
import styled from 'styled-components';
import { fadeInUp } from '../../../styles/animations';

export const TooltipContent = styled(TooltipPrimitives.Content)`
    border-radius: ${({ theme }) => theme.borderRadius.base};
    font-family: ${({ theme }) => theme.fonts.ide};
    padding: 0 ${({ theme }) => theme.spacing.xs};
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.loose};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    user-select: none;
    z-index: 1000;

    &[data-state='delayed-open'] {
        animation: ${fadeInUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);
    }
`;

export const TooltipArrow = styled(TooltipPrimitives.Arrow)`
    fill: ${({ theme }) => theme.colors.surface};
`;
