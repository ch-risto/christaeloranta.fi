// src/styles/animations.ts
import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideDown = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to { 
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from { 
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to { 
    height: 0;
    opacity: 0;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// TODO: Selvitä, onko px mahdollista määritellä muuttujalla?
export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
