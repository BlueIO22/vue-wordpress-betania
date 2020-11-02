module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    
    WordPressPost: '/:year/:month/:day/:slug', // adds a route for the "post" post type (Optional)
   },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://www.betaniastudentfellesskap.no/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          pages:'/:exclude',
          post: '/:year/:month/:day/:slug/:exclude',
          post_tag: '/tag/:slug'
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true // default false
      }
    }
  ]
}
