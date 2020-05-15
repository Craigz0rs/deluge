<template>
  <div class="poop">
  	<h1 v-html="$page.wordPressPost.title" />

        <div class="blah" v-for="image in $page.wordPressPost.acf.imageGallery" :key="image.title">
            <g-image :src="image.image.src" :alt="image.image.alt" width="500" height="250" fit="contain"></g-image>
        </div>

  </div>
</template>
<style lang="scss">
.blah {
    width: 500px;

    img {
        width: 100%;
    }
}
</style>

<page-query>
query ($id: ID!) {
  wordPressPost (id: $id) {
    title
    acf {
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