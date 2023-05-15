import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogPost = () => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Super Cool Blog Posts" />;

export default BlogPost;
