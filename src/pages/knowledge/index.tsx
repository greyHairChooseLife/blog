import * as React from 'react';
import Layout from '../../components/layout/layout';
import { useHeaderData } from '../../lib/hooks/useHeaderData';

const KnowledgeMap = () => {
  return (
    <Layout>
      <p>knowledge map</p>
    </Layout>
  );
};

export default KnowledgeMap;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
