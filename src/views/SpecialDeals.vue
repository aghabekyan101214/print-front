<template>
    <div class="special-deals">
        <breadcrumb :endpoint="title"/>
        <div class="container-fluid text-center">
            <h2>Special Deals</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi cumque debitis deleniti dignissimos.</p>
            <img class="img-fluid" src="../assets/images/special-deal.png" alt="">
        </div>
    </div>
</template>

<script>

    import Breadcrumb from "../components/Breadcrumb";


    export default {
        data() {
            return {
                title: "Special Deals",

            }
        },
        name: "BusinessServiceDetail",
        components: {
            Breadcrumb,
        },
        methods: {
            getTitle() {
                let path = this.$route.path;
                let title = (path.split("/")[2]).split("-").join(" ");
                this.title = (title != undefined && title != null) ? title : "";
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.swiper
                const swiperThumbs = this.$refs.swiperThumbs.swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
            this.getTitle();
        },
        watch:{
            $route (to, from){
                this.getTitle();
            }
        }
    }
</script>

<style scoped>
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .title{
        text-transform: capitalize;
    }
    .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 100%;
        height: 100px;
    }

</style>
