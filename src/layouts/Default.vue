<template>
  <div class="layout">
    <header class="header">
      <div class="content-wrap header__wrapper">
        <Nav />
      </div>
    </header>
    <slot/>
    <Footer />
  </div>
</template>
<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default {
    name: "Default",
    components: {
      Nav,
      Footer,
    }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
    overflow: visible;

    &.content-wrap {
      @include screen--small {
        padding: 0 $gutter;
      }
    }
  }
}
</style>
