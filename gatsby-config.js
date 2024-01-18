/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Componente versiones`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        // Ignore files starting with a dot
        ignore: [`**/\.*`],
        // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
        fastHash: true,
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: "api",
        url: `http://localhost:3000/edificios`,
        name: "edificios",
        entityLevel: false
        },
    },
  ],
}
