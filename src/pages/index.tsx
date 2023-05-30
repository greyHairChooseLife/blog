import * as React from 'react';
import { useHeaderData } from '../lib/hooks/useHeaderData';
import Layout from '../components/layout/layout';
import * as st from './index.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={st.layout}>
        <div>resume</div>
        <div>contact</div>
      </div>
    </Layout>
  );
};

export default Home;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
