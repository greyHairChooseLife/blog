import * as React from 'react';
import Navigation from '../navigation/navigation';
import * as st from './layout.module.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={st.layout}>
      <h1>CHOOSE LIFE</h1>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
