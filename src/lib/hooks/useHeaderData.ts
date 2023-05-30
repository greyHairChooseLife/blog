import { useStaticQuery, graphql } from 'gatsby';

export const useHeaderData = (): [{ title: string }, string] => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  const pathname = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '';
  return [site.siteMetadata, pathname];
};
