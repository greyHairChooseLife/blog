import * as React from 'react';
import Navigation from '../navigation/navigation';
import * as st from './layout.module.css';
import '../../global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={st.container}>
      <header>
        <h1>CHOOSE LIFE</h1>
        <Navigation />
      </header>
      <article>{children}</article>
    </div>
  );
};

export default Layout;
