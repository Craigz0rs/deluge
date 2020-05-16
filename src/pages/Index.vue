<template>
  <Layout>
    <section class="home__about">

    </section> 
    <section class="home__gallery">
      <ul class="home-gallery__list">
        <li v-for="item in galleryItems" :key="item.node.path" class="home-gallery__item">
          <g-link :to="item.node.path">{{item.node.title}}</g-link>
        </li>
      </ul>
    </section>
  </Layout>
</template>
<page-query>
query {
  posts: allWordPressPost {
    edges {
      node {
        path
        title
        acf {
          description
          imageGallery {
            image {
              src
            }
          }
        }
      }
    }
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    galleryItems() {
      return this.$page.posts.edges
    }
  },
  methods: {

  }

}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
