module.exports = {
  siteMetadata: {
    title: `Marakuya Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@marakuya`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress#how-to-use
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your wordpress source
        baseUrl: `min-bark.com`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        concurrentRequests: 10,
        includedRoutes: ["**/*/*/pages"]
        // excludedRoutes: ["/wp-json/wp/v2/users/**", " /wp-json/wp/v2/users/me?per_page=100&page=1", "/wp-json/wp/v2/settings/**"]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
