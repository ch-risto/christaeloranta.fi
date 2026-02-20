import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent } from './Tooltip.styles';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: React.FC<TooltipProps> = ({ text, children, side = 'top' }: TooltipProps) => {
    return (
        <TooltipPrimitive.Provider delayDuration={300}>
            <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
                <TooltipPrimitive.Portal>
                    <TooltipContent side={side}>
                        {text}
                        <TooltipArrow />
                    </TooltipContent>
                </TooltipPrimitive.Portal>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
};
