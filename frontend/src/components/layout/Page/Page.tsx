import { PageContainer } from './Page.style';

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <PageContainer>{children}</PageContainer>;
};

export default Page;
