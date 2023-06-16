import * as React from 'react';
import { useHeaderData } from '../lib/hooks/useHeaderData';
import Layout from '../components/layout/layout';
import * as st from './index.module.css';

const Home = () => {
  return (
    <Layout>
      <div className={st.container}>
        <p>안녕하세요, 김상연입니다.</p>
        <p>
          컴퓨터 프로그래밍이 제게 좋은 <strong>도구</strong>가 되길 바랍니다.
        </p>
        <a target="_blank" href="https://github.com/greyHairChooseLife">
          visit github
        </a>
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
