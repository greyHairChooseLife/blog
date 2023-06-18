import * as React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import Layout from '../../../components/layout/layout';
import PostCard from '../../../components/post_card/postCard';
import { useHeaderData } from '../../../lib/hooks/useHeaderData';

const LifeStyle = ({ data }: PageProps<Queries.LifeStyleQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <Link key={post.id} to={post?.frontmatter?.slug || ''}>
            <PostCard post={post} />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default LifeStyle;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};

export const query = graphql`
  query LifeStyle {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/write/about_me/life_style/" } }
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
