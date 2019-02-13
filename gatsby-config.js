module.exports = {
  siteMetadata: {
    title: 'Marakuya Default Starter',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@marakuya'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress#how-to-use
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // your wordpress source
        baseUrl: 'min-bark.com',
        protocol: 'http',
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true,
        concurrentRequests: 10,
        includedRoutes: ['**/*/*/pages']
        // excludedRoutes: ["/wp-json/wp/v2/users/**", " /wp-json/wp/v2/users/me?per_page=100&page=1", "/wp-json/wp/v2/settings/**"]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'asap:400,700' // you can also specify font weights and styles
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
