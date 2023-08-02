import Layout from '@/components/common/Layout';
import Header from '@/components/Header';
import Head from 'next/head';

const PageLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>WonWon by Reviv</title>
        <meta
          name="description"
          content="Repair-Lifestyle platform in Thailand"
          key="desc"
        />
        <meta property="og:title" content="WonWon by Reviv" />
        <meta
          property="og:description"
          content="The 1st Repair-Lifestyle platform in Thailand that connects consumers with local repair shops.”e"
        />
        <meta property="og:image" content="/OG.png" />
        <link rel="shortcut icon" href="/favicon.jpg" />
      </Head>
      <Layout header={<Header />}>{children}</Layout>
    </div>
  );
};

export default PageLayout;
