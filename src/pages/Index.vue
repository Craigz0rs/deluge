<template>
  <Layout>
    <div class="content-wrap">
      <section class="home__about">

      </section> 
      <section class="home__gallery">
        <ul class="home-gallery__list">
          <li v-for="item in $page.posts.edges" :key="item.node.path" class="home-gallery__item">
            <g-link class="home-gallery__link" :to="item.node.path" :aria-label="`Gallery of ${item.node.title}`">
              <div class="home-gallery__image-wrap" v-if="item.node.acf.featuredImage">
                <g-image :src="item.node.acf.featuredImage.src"></g-image>
              </div>
              <div class="home-gallery__content">
                <h2 class="home-gallery__title">{{item.node.title.toLowerCase()}}</h2>
              </div>
              <div class="home-gallery__overlay"></div>
            </g-link>
          </li>
        </ul>
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
}
</script>

<style lang="scss">
.home-gallery {
  &__list {
    display: grid;
    grid-gap: $gutter;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
    list-style-type: none;
    margin: 0;
    padding: 0;

    @include screen--medium {
      grid-auto-rows: 250px;
    }

    @include screen--small {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 200px;
      grid-gap: $gutter--small;
    }
  }

  &__item {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &:first-of-type {
      grid-row: 1/3;

      .home-gallery__link {
        .home-gallery__title {
          @include home-gallery-title(18.1rem, rotate(-90deg), bottom left, left, calc(100% + 3rem), bottom, -12px);
          @include screen--large {
            @include home-gallery-title(22vw !important, rotate(-90deg), bottom left, left, calc(100% + 4vw) !important, bottom, -12px);
          }
        }

        &:hover, &:focus {
          .home-gallery__title {
            @include home-gallery-title(18.1rem, rotate(-90deg) scale(0.7), bottom left, left, calc(100% + 3rem), bottom, -12px);
          }
        }
      }
    }

    &:nth-of-type(2) {
      grid-column: 2/4;

      @include screen--small {
          grid-column: 2/3;
      }

      .home-gallery__link {
        .home-gallery__title {
          @include home-gallery-title(17rem, rotate(0deg), bottom left, left, -18px, top, -6rem);
          @include screen--large {
            @include home-gallery-title(13vw, rotate(0deg), bottom left, left, -5px, top, -4vw);
          }        
        }

        &:hover, &:focus {
          .home-gallery__title {
            @include home-gallery-title(5rem, rotate(0deg) scale(0.7), bottom left, left, -5px, top, -1.5rem);
          }
        }
      }
    }

    &:nth-of-type(3) {
      grid-row: 2/4;
      .home-gallery__link {
        .home-gallery__title {
          width: 800px;
          @include home-gallery-title(10.5rem, rotate(-90deg), top left, left, -3.5rem, bottom, -11rem);
          @include screen--large {
            @include home-gallery-title(6rem !important, rotate(-90deg), top left, left, -28px !important, bottom, -6.5rem !important);
          }
        
        }

        &:hover, &:focus {
          .home-gallery__title {
            @include home-gallery-title(10.5rem, rotate(-90deg) scale(0.7), top left, left, -2.5rem, bottom, -11rem);
          }
        }
      }
    }

    &:nth-of-type(4) {
      .home-gallery__link {
        .home-gallery__title {
          @include home-gallery-title(10.1rem, rotate(0), bottom left, left, 0, bottom, -2rem);
          @include screen--large {
            @include home-gallery-title(10vw !important, rotate(0), bottom left, left, 0, bottom, -1.8vw !important);
          }
        
        }

        &:hover, &:focus {
          .home-gallery__title {
            @include home-gallery-title(10.1rem, rotate(0) scale(0.7), bottom left, left, 0, bottom, -1.25rem);
          }
        }
      }
    }

    &:nth-of-type(5) {
      .home-gallery__link {
        .home-gallery__title {
          @include home-gallery-title(8rem, rotate(0), bottom left, left, 0, bottom, -2rem);
          @include screen--large {
            @include home-gallery-title(8vw !important, rotate(0), bottom left, left, 0, bottom, -1.5vw !important);
          }
        }

        &:hover, &:focus {
          .home-gallery__title {
            @include home-gallery-title(8rem, rotate(0) scale(0.7), bottom left, left, 0, bottom, -1.25rem);
          }
        }
      }
    }

    &:nth-of-type(6) {
      .home-gallery__link {
        .home-gallery__title {
          @include home-gallery-title(5.8rem, rotate(0deg), top left, left, -2px, top, -1.8rem);
          @include screen--large {
            @include home-gallery-title(6vw !important, rotate(0), bottom left, left, 0, top, -1.7vw !important);
          }
        }

        &:hover, &:focus {
          .home-gallery__title {
          @include home-gallery-title(5.8rem, rotate(0deg) scale(0.7), top left, left, -2px, top, -1.2rem);
          }
        }
      }
    }
  }

  &__link {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;

    &:hover, &:focus {
      .home-gallery__title {
        color: white;
        transition: 0.4s ease-in-out;
      }

      .home-gallery__image-wrap > img {
        transform: scale(1.1);
        transition: 0.4s ease-in-out;
        filter: brightness(60%);
      }
    }
  }

  &__image-wrap {
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition: 0.4s ease-in-out;
      filter: brightness(100%);
    }
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &__title {
    position: absolute;
    display: block;
    padding: absolute;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-family: $font__headings;
    font-size: 8rem;
    color: rgba(255,255,255,0.5);
    transition: 0.4s ease-in-out;
  }
}
</style>
