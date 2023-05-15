import * as React from 'react';
import { Link } from 'gatsby';
import * as st from '../styles/Layout.module.css';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({ pageTitle, children }: { pageTitle: string; children: React.ReactNode }) => {
  const queryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={st.container}>
      <header className={st.siteTitle}>{queryData.site.siteMetadata.title}</header>
      <nav>
        <ul className={st.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
