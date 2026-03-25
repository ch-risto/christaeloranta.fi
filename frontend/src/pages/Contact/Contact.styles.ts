import styled from 'styled-components';
import {
    StyledH1,
    StyledSection,
    SvgContainer,
} from '../../components/common/BaseComponents.styles';

export const ContactH1 = styled(StyledH1)`
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ContactCard = styled(StyledSection)`
    background-color: ${({ theme }) => theme.colors.surface};
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border-top: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-left: 1.33px solid rgba(${({ theme }) => theme.colors.accentRGB}, 0.1);
    border-bottom: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.1);
    border-right: 1.33px solid rgba(${({ theme }) => theme.colors.primaryRGB}, 0.1);
    box-shadow: 0 4px 6px rgba(${({ theme }) => theme.colors.shadowRGB}, 0.1);
    width: 75%;
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md};
`;

export const SVGArrow = styled(SvgContainer)`
    margin-left: 0.5rem;
    filter: brightness(0) invert(1);
`;
