import React from 'react';
import styled, { css } from 'styled-components';

const SIZES = {
  xsmall: css`
    height: 16px;
    width: 16px;
    margin: 0 6px;
  `,
  small: css`
    height: 24px;
    width: 24px;
    margin: 0 8px;
  `,
  medium: css`
    height: 38px;
    width: 38px;
    margin: 0 16px;
  `,
};

interface IconWrapperProps {
  size: keyof typeof SIZES;
}

const IconWrapper = styled.span<IconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => props.theme.colors.primary};
    ${(props) => SIZES[props.size]}
  }
`;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  label?: string;
  size?: keyof typeof SIZES;
  children: React.ReactNode;
}

export const Icon = ({ label, size = 'medium', children }: IconProps) => {
  if (label) {
    return (
      <IconWrapper size={size} role="img" aria-label={label}>
        {children}
      </IconWrapper>
    );
  }

  return (
    <IconWrapper size={size} aria-hidden="true">
      {children}
    </IconWrapper>
  );
};
