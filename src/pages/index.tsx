import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import type { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This page is for 'home page'.</p>
      <StaticImage alt="HABIT_TRACKER_demo" src="../images/HABIT_TRACKER_demo.png" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
