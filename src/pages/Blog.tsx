import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  const posts = data.allFile.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {posts.map(({ name: fileName }) => (
          <li key={fileName}>{fileName}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allFile {
      nodes {
        name
      }
    }
  }
`;
