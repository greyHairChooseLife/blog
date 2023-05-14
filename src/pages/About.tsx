import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout pageTitle="About me">
      <p>This page is for 'about me'.</p>
    </Layout>
  );
};

export default About;

export const Head: HeadFC = () => <title>About me</title>;
