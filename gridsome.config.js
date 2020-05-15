// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-wordpress',
      options: {
        baseUrl: 'https://thedeluge.epiqk.ca', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10,
        routes: {
          post: '/:year/:month/:day/:slug',
          post_tag: '/tag/:slug',
        },
        splitPostsIntoFragments: true, // default false
        downloadRemoteImagesFromPosts: true, // default false
        downloadRemoteFeaturedImages: true, // default false
        downloadACFImages: true, // default false
      }
    },
  ],
  templates: {
    WordPressPost: [
      {
        path: (node) => {
          console.log(node.categories)
            return `/gallery/${node.slug}`
        },
        component: './src/templates/WordPressPost.vue'
      }
    ],
  }
}
