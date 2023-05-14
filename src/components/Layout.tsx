import * as React from 'react';
import { Link } from 'gatsby';
import * as st from '../styles/Layout.module.css';

const Layout = ({ pageTitle, children }: { pageTitle: string; children: React.ReactNode }) => {
  return (
    <div className={st.container}>
      <nav>
        <ul className={st.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
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
