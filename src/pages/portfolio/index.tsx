import * as React from 'react';
import Layout from '../../components/layout/layout';
import { useHeaderData } from '../../lib/hooks/useHeaderData';

const Portfolio = () => {
  return (
    <Layout>
      <p>portfolio</p>
    </Layout>
  );
};

export default Portfolio;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
