import { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface MagneticImageProps {
    src: string;
    alt: string;
    className?: string;
    damping?: number;
    maxOffset?: number;
}

const StyledMImage = styled.img`
    transition:
        box-shadow 0.1s linear,
        transform 0.3s ease;
    box-shadow: var(--shadow-x, 2px) var(--shadow-y, 2px) 40px -5px
        ${({ theme }) => theme.colors.heroPhoto};

    &:hover {
        transform: none;
    }
`;

export const MagneticImage: React.FC<MagneticImageProps> = ({
    src,
    alt,
    className,
    damping = 20,
    maxOffset = 30,
}) => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let frameId: number | null = null;

        const updateShadow = (clientX: number, clientY: number) => {
            const img = imgRef.current;
            if (!img) return;

            const rect = img.getBoundingClientRect();
            const imageCenterX = rect.left + rect.width / 2;
            const imageCenterY = rect.top + rect.height / 2;

            const rawDeltaX = clientX - imageCenterX;
            const rawDeltaY = clientY - imageCenterY;

            const x = Math.max(-maxOffset, Math.min(maxOffset, rawDeltaX / damping));
            const y = Math.max(-maxOffset, Math.min(maxOffset, rawDeltaY / damping));

            img.style.setProperty('--shadow-x', `${x}px`);
            img.style.setProperty('--shadow-y', `${y}px`);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (frameId != null) return;
            const clientX = e.clientX;
            const clientY = e.clientY;
            frameId = window.requestAnimationFrame(() => {
                updateShadow(clientX, clientY);
                frameId = null;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (frameId != null) {
                window.cancelAnimationFrame(frameId);
                frameId = null;
            }
        };
    }, [damping, maxOffset]);

    return <StyledMImage ref={imgRef} src={src} alt={alt} className={className} />;
};
