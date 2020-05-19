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
  components: {
    Gallery
  },
}
</script>
<style lang="scss">

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