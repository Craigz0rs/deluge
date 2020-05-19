<template>
  <Layout>
    <div class="content-wrap">
      <section class="home__about">
        <p><span>The Deluge</span> is a collection from across the continent focused on the natural beauty, striking colours, and distinctive scnerery of each place.</p> 
      </section> 
      <section class="home__gallery">
        <HomeGallery
          :posts="$page.posts.edges"
        ></HomeGallery>
      </section>
    </div>
  </Layout>
</template>
<page-query>
query {
  posts: allWordPressPost(sortBy: "title" order: ASC) {
    edges {
      node {
        path
        title
        acf {
          featuredImage {
            src
            title
            alt
          }
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
import HomeGallery from '~/components/HomeGallery.vue'
export default {
  metaInfo: {
    title: 'Portfolio',
    meta: [
      {
        name: 'description', content: 'A collection of photography from across North America'
      }
    ]
  },
  components: {
    HomeGallery,
  }
}
</script>

<style lang="scss">
.home__about {
  max-width: 750px;
  font-size: 1.4rem;
  margin-bottom: 3rem;

  @include screen--medium {
    font-size: 1.25rem;
  }

  @include screen--small {
    font-size: 1rem;
    margin-bottom: $gutter;
  }

  span {
    font-weight: 600;
  }
}
</style>