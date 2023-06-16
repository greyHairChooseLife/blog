import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout/layout';
import ButtonList from '../../components/button_list/buttonList';
import { useHeaderData } from '../../lib/hooks/useHeaderData';

const AboutMe = () => {
  return (
    <Layout>
      <ButtonList>
        <div>
          <Link to={'life_style'}>life_style</Link>
        </div>
      </ButtonList>
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
