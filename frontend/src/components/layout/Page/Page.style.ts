import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    animation: fadeIn 0.6s ease-in;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 1.5rem 1.25rem;
        gap: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: 100%;
    }
`;
