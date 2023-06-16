import * as React from 'react';
import Layout from '../../components/layout/layout';
import { useHeaderData } from '../../lib/hooks/useHeaderData';

const AboutMe = () => {
  return (
    <Layout>
      <div>about me</div>
    </Layout>
  );
};

export default AboutMe;

export const Head = () => {
  const [{ title }, pathname] = useHeaderData();
  return (
    <title>
      {title} | {pathname ? pathname : 'home'}
    </title>
  );
};
