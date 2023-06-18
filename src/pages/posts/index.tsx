import * as React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { useHeaderData } from '../../lib/hooks/useHeaderData';
import Layout from '../../components/layout/layout';
import PostCard from '../../components/post_card/postCard';
import * as st from './index.module.css';

export default function Posts({ data }: PageProps<Queries.PostsQuery>) {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <Layout>
      <div className={st.cardList}>
        {posts.map((post) => (
          <Link key={post.id} to={post?.frontmatter?.slug || ''}>
            <PostCard post={post} />
          </Link>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/write/posts/" } }
      sort: { fields: [frontmatter___birth], order: DESC }
    ) {
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
