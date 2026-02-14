import styled from 'styled-components';

export const PageContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  animation: fadeIn 0.6s ease-in;

  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
    gap: 2rem;
  }
`;

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Page;
