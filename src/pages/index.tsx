import * as React from 'react';
//import { useEffect } from 'react';
import { useHeaderData } from '../lib/hooks/useHeaderData';
import Layout from '../components/layout/layout';
//import { navigate } from 'gatsby';

const IndexPage = () => {
  //useEffect(() => navigate(`/about_me`), []);
  return (
    <Layout>
      <p>introduce</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>
