import * as React from 'react';
import Layout from '../../components/layout/layout';
import { useHeaderData } from '../../lib/hooks/useHeaderData';

const Posts = () => {
  return (
    <Layout>
      <div>posts</div>
    </Layout>
  );
};

export default Posts;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
