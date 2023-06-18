import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as st from './navigation.module.css';

const usenavigationQuery = (): [{ path: string; id: string }] => {
  const {
    allSitePage: { nodes: allPages },
  } = useStaticQuery(
    graphql`
      query {
        allSitePage {
          nodes {
            path
            id
          }
        }
      }
    `,
  );
  return allPages;
};

const navigation = () => {
  const allPages = usenavigationQuery();
  const filteredPages = allPages.filter(
    ({ path }) => !path.includes('404') && path.split('/').length <= 3,
  );

  const format = (path: string) =>
    path === '/'
      ? 'home'
      : path
          .split('')
          .filter((c) => c !== '/')
          .map((c) => (c === '_' ? ' ' : c))
          .join('');

  const currentPath = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';

  return (
    <div className={st.link_list}>
      {filteredPages.map(({ path, id }) => (
        <Link key={id} to={path} className={currentPath !== format(path) ? '' : st.currentPath}>
          {format(path)}
        </Link>
      ))}
    </div>
  );
};

export default navigation;
