import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { useHeaderData } from '../../lib/hooks/useHeaderData';
import Layout from '../../components/layout/layout';
import PostCard from '../../components/for_pages/posts/postCard';
import * as st from './index.module.css';

export default function Posts({ data }: PageProps<Queries.PostsQuery>) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <Layout>
      <div className={st.cardList}>
        {posts.map((post) => (
          <button key={post.id}>
            <PostCard post={post} />
          </button>
        ))}
      </div>
    </Layout>
  );
}

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};

export const query = graphql`
  query Posts {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/write/posts/" } }) {
      edges {
        node {
          frontmatter {
            title
            birth
            modified
            slug
          }
          excerpt
          id
        }
      }
    }
  }
`;
