import Layout from '@/components/common/Layout';
import Header from '@/components/Header';

const PageLayout = ({ children, footer = false }) => {
  return (
    <Layout header={<Header />} footer={footer}>
      {children}
    </Layout>
  );
};

export default PageLayout;
