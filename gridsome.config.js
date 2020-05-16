const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/global.scss'),
      ],
    })
}

module.exports = {
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
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
