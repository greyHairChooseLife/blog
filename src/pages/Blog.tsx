import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.frontmatter?.title}</h2>
          <p>{post.frontmatter?.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
        parent {
          ... on File {
            id
            name
            modifiedTime(formatString: "MMMM D, YYYY")
            birthTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;
