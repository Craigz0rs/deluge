<template>
    <nav class="nav">
        <div class="nav__logo-wrap">
            <g-link to="/" class="nav__link">Portfolio</g-link>
        </div>
        <ul class="nav__wrap">
            <li 
                class="nav__item" 
                v-for="(item, index) in galleryItems" 
                :key="index"
            >
                <g-link 
                    class="nav__link"
                    :to="item.node.path"
                >
                {{item.node.title}}
                </g-link>
            </li>
            <!-- <li class="nav__item nav__dropdown-container">
                <button 
                    id="nav-expand"
                    class="button--nav nav__subnavbttn nav__link nav__link--parent"
                    :aria-expanded="this.isOpen"
                >
                    Portfolio
                </button>
                <ul class="nav__dropdown">
                    <li 
                        class="nav__item--dropdown nav__item" 
                        v-for="(item, index) in galleryItems" 
                        :key="index"
                    >
                        <g-link 
                            class="nav__link"
                            :to="item.node.path"
                        >
                        {{item.node.title}}
                        </g-link>
                    </li>
                </ul>
            </li> -->
            <!-- <li class="nav__item">
                <g-link class="nav__link" to="/about">About</g-link> 
            </li>
            <li class="nav__item">
                <g-link class="nav__link" to="/contact">Contact</g-link> 
            </li> -->
        </ul>
    </nav>
</template>
<script>
export default {
    name: "Nav",
    data() {
        return {
            dropdown: null,
            isOpen: false
        }
    },
    mounted() {
        // this.dropdown = document.getElementById('nav-expand')
        // this.dropdown.addEventListener('click', this.setDropdown)
    },
    methods: {
        setDropdown() {
        //    this.isOpen = !this.isOpen
        //    this.isOpen ? this.dropdown.nextElementSibling.style.display = 'flex' : this.dropdown.nextElementSibling.style.display = 'none'
        },
        setOpenStatus() {
            console.log('poop')
        }
    },
    computed: {
        galleryItems() {
            return this.$static.posts.edges
        }
    }
}
</script>
<static-query>
query {
    posts: allWordPressPost(sortBy: "title" order: ASC) {
    edges {
      node {
        path
        title
      }
    }
  }
}
</static-query>
<style lang="scss">
.nav {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    font-family: $font__headings;
    font-weight: 900;
    
    a {
        text-decoration: none;
        color: black;
        font-size: 2rem;
        transition: 0.2s;

        @include screen--large {
            font-size: 1.7rem;
        }

        @include screen--medium {
            font-size: 1.3rem;
        }

        &:hover, &:focus {
            color: rgb(131, 131, 131);
            transition: 0.2s;
        }

        &.active--exact {
            text-decoration: underline;
        }
    }

    &__wrap {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        @include screen--small {
            display: none;
        }
    }

    &__item {
        margin-left: 3rem;

        @include screen--large {
            margin-left: 2rem;
        }

        @include screen--medium {
            margin-left: 1.25rem;
        }

        &--dropdown {
            margin: 0;
        }
    }

    &__dropdown {
        position: absolute;
        display: none;
        flex-wrap: wrap;
        list-style-type: none;
        margin: 0;
        padding: 0;

        &-container {
            position: relative;
            display: block;

            &:hover {
                .nav__dropdown {
                    display: flex !important;
                }
            }
        }
    }
}
</style>