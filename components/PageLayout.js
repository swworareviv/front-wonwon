import Layout from '@/components/common/Layout';
import Header from '@/components/Header';

const PageLayout = ({ children }) => {
  return <Layout header={<Header />}>{children}</Layout>;
};

export default PageLayout;
