<template>
    <footer class="footer">
        <div class="content-wrap footer__wrap">
            <div class="footer__copyright">
                <p>Website by <a href="https://craigdarcy.ca">Craig D'Arcy</a></p>
            </div>
            <div class="footer__disclaimer">
                <p>All photos from <a href="https://unsplash.com">Unsplash</a></p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style lang="scss">
    .footer {
        &__wrap {
            display: flex;
            justify-content: space-between;
            color: rgb(131,131,131);

            a {
                color: black;
                text-decoration: none;
            }
        }
    }
</style>