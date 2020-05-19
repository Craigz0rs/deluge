<template>
  <Layout>
    <div class="content-wrap">
      <section class="gallery-post__header">
        <h1 class="gallery-post__heading site-headline" v-html="$page.wordPressPost.title" />
      </section>
      <section class="gallery-post__gallery">
          <Gallery
            :galleryItemList="$page.wordPressPost.acf.imageGallery"
            :title="$page.wordPressPost.title"
            :key="$page.wordPressPost.id"
          />
      </section>
    </div>
  </Layout>
</template>
<script>
import Gallery from "~/components/Gallery.vue"
export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title
    }
  },
  components: {
    Gallery
  },
}
</script>
<style lang="scss">
.gallery-post {
  &__heading {
    margin: 1rem 0;
    font-weight: 700;
    font-size: 4rem;
    color: rgb(131, 131, 131);

    @media screen and (max-width: 400px) {
      font-size: 3.5rem;
    }
  }
}
</style>

<page-query>
query ($id: ID!) {
  wordPressPost (id: $id) {
    title
    id
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
              alt
              title
          }
      }
    }
  }
}
</page-query>