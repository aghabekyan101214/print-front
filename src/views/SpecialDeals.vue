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
    // require styles
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                title: "Special Deals",
                swiperOptionTop: {
                    spaceBetween: 10,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    spaceBetween: 10,
                    slidesPerView: 4,
                    touchRatio: 0.2,
                    loop: true,
                    loopedSlides: 5, //looped slides should be the same
                    slideToClickedSlide: true,
                }
            }
        },
        name: "BusinessServiceDetail",
        components: {
            Breadcrumb,
            swiper,
            swiperSlide
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
