module.exports = {
  siteMetadata: {
    title: `Nate Wolfe`,
    description: `Nate Wolfe's Portfolio Site`,
    author: `@wxlfe_dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nate Wolfe`,
        short_name: `Nate Wolfe`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `standalone`,
        icon: `src/images/wxlfe.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
