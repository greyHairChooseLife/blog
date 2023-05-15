import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const About = () => {
  return (
    <Layout pageTitle="About me">
      <p>This page is for 'about me'.</p>
    </Layout>
  );
};

export default About;

export const Head = () => <Seo title="About me" />;
