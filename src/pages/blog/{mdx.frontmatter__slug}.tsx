import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const Post = ({ data, children }: PageProps<Queries.PostQuery>) => {
  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title || ''}>
      <p>My blog post contents will go here (eventually).</p>
      {children}
    </Layout>
  );
};

export const Head = ({ data }: PageProps<Queries.PostQuery>) => (
  <Seo title={data?.mdx?.frontmatter?.title || ''} />
);

export default Post;

export const query = graphql`
  query Post($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
