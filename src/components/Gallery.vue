<template>
    <div class="gallery grid" >
        <div class="gallery__column grid" v-for="(column, index) in allColumns" :key="index">
            <div class="gallery__image-wrap" v-for="(image, index2) in column" :key="index2">
                <g-image class="gallery__image" :src="image.image.src" :alt="image.image.alt" width="500" height="250" fit="contain"></g-image>
            </div>
        </div>
    </div>
</template>
<script>
import GalleryItem from "~/components/GalleryItem.vue"
export default {
    name: "Gallery",
    components: {
        GalleryItem,
    },
    props: {
        galleryItemList: Array,
    },
    data() {
        return {
            width: 1,
            allColumns: [],
            col1: [],
            col2: [],
            col3: [],
            numberOfColumns: 0,
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.onResize()
    },
    watch: {
        numberOfColumns: function (num) {
            if (this.galleryItemList) {
                let i = 1
                this.colReset()
                switch(num) {
                    case 1:
                        for(let image in this.galleryItemList) {
                            this.setColumnItem(this.col1, this.galleryItemList[image])
                        }
                        this.allColumns.push(this.col1)
                        break;
                    case 2:
                        for(let image in this.galleryItemList) {
                            i == 3 ? i = 1 : i = i
                            this.setColumnItem(this.choseCol(i), this.galleryItemList[image])
                            i++
                        }
                        this.allColumns.push(this.col1, this.col2)
                        break;
                    case 3:
                        for(let image in this.galleryItemList) {
                            i == 4 ? i = 1 : i = i
                            this.setColumnItem(this.choseCol(i), this.galleryItemList[image])
                            i++
                        }
                        this.allColumns.push(this.col1, this.col2, this.col3)
                        break;
                }
                console.log(this.allColumns)
                console.log(this.col1)
                console.log(this.col2)
                console.log(this.col3)
            }
        }
    },
    computed: {
        setNumberOfColumns() {
            if (this.width > 1024) {
                this.numberOfColumns = 3
            } else if (this.width > 760) {
                this.numberOfColumns = 2
            } else {
                this.numberOfColumns = 1
            }
        }
    },
    methods: {
        onResize: function () {
            this.width = window.innerWidth 
            this.setNumberOfColumns
        },
        choseCol(i) {
            switch(i) {
                case 1:
                    return this.col1
                case 2:
                    return this.col2
                case 3:
                    return this.col3
                default:
                    return this.col1
            }
        },
        colReset() {
            this.allColumns = []
            this.col1 = []
            this.col2 = []
            this.col3 = []
        },
        setColumnItem(column, item) {
            column.push(item)
        },
    }
}
</script>
<style lang="scss">
.gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $gutter;

    @include screen--medium {
        grid-template-columns: repeat(2, 1fr);
    }

    @include screen--small {
        grid-template-columns: 1fr;
    }

    &__column {
        grid-auto-rows: min-content;
        grid-gap: $gutter;
    }

    &__image-wrap {
        img {
            width: 100%;
        }
    }
}
</style>