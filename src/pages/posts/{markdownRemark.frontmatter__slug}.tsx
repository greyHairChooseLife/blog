import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/layout/layout';
import * as st from './template.module.css';

export default function PostTemplate({ data }: PageProps<Queries.PostTemplateQuery>) {
  const { frontmatter, html } = data.markdownRemark || {};

  return (
    <Layout>
      <div className={st.page}>
        <header>
          <h1>{frontmatter?.title}</h1>
          <h3>
            {frontmatter?.birth}
            <span>...updated {frontmatter?.modified}</span>
          </h3>
        </header>
        <div
          className={st.markdownBody}
          dangerouslySetInnerHTML={{ __html: html || '내용을 읽을 수 없습니다.' }}
        />
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
        birth(formatString: "YYYY/MM/DD")
        modified(fromNow: true)
      }
    }
  }
`;
