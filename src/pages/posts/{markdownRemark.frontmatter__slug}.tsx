import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout/layout';

export default function PostTemplate({ data }: PageProps<Queries.PostTemplateQuery>) {
  const { frontmatter, html } = data.markdownRemark || {};

  return (
    <Layout>
      <div>
        <h1>{frontmatter?.title}</h1>
        <h3>{frontmatter?.birth}</h3>
        <div dangerouslySetInnerHTML={{ __html: html || '내용을 읽을 수 없습니다.' }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PostTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        birth(formatString: "YYYY / MM / DD")
        modified
      }
    }
  }
`;
