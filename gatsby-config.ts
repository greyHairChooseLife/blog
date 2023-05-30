import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `choose life`,
    siteUrl: `https://greyhairchooselife.github.io/blog/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-dts-css-modules',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `write`,
        path: `${__dirname}/write`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};

//'gatsby-plugin-css-modules-typings',
export default config;
