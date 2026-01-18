import styled from 'styled-components';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  alt?: string;
  children: React.ReactNode;
}

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 100%;
    width: auto;
    margin-right: 16px;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const Icon = ({ alt, children }: IconProps) => {
  if (alt) {
    return (
      <IconWrapper role="img" aria-label={alt}>
        {children}
      </IconWrapper>
    );
  }

  return <IconWrapper aria-hidden="true">{children}</IconWrapper>;
};
