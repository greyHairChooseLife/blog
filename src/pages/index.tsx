import * as React from 'react';
import { useHeaderData } from '../lib/hooks/useHeaderData';
import Layout from '../components/layout/layout';

const Home = () => {
  return (
    <Layout>
      <p>introduce</p>
    </Layout>
  );
};

export default Home;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
