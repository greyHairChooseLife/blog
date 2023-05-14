import * as React from 'react';
import { Link } from 'gatsby';
//import { container } from './layout.module.css'

const Layout = ({ pageTitle, children }: { pageTitle: string; children: React.ReactNode }) => {
  //<div className={container}>
  return (
    <div>
      <nav>
        <ul>
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
