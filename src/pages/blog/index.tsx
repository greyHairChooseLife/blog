import * as React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

const BlogIndex = ({ data }: PageProps<Queries.BlogIndexQuery>) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout pageTitle="My Blog Posts">
      {posts.map((post) => (
        <article key={post.id}>
          <Link to={`/blog/${post?.frontmatter?.slug}`}>{post?.frontmatter?.title}</Link>
          <p>{post.frontmatter?.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogIndex;

export const query = graphql`
  query BlogIndex {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
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
