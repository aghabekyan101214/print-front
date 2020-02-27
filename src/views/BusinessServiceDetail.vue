<template>
    <div class="business-service-detail">
        <breadcrumb :endpoint="title"/>
        <section class="services-single-banner container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="demo">
<!--                        <ul id="lightSlider">-->
<!--                            <li data-thumb="images/slider-big-item.png">-->
<!--                                <img src="images/slider-big-item.png" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-2.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-2.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-3.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-3.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-4.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-4.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-5.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-5.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-6.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-6.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-7.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-7.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-8.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-8.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-9.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-9.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-10.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-10.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-11.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-12.jpg" />-->
<!--                            </li>-->
<!--                            <li data-thumb="https://sachinchoolur.github.io/lightslider/img/thumb/cS-13.jpg">-->
<!--                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-13.jpg" />-->
<!--                            </li>-->
<!--                        </ul>-->

                        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                            <swiper-slide class="slide-1">
                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-2.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-3.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-4.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-5.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-5">
                                <img src="https://sachinchoolur.github.io/lightslider/img/cS-6.jpg" />
                            </swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                            <swiper-slide class="slide-1">
                                <img class="img-fluid" src="https://sachinchoolur.github.io/lightslider/img/cS-2.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-2">
                                <img class="img-fluid" src="https://sachinchoolur.github.io/lightslider/img/cS-3.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-3">
                                <img class="img-fluid" src="https://sachinchoolur.github.io/lightslider/img/cS-4.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-4">
                                <img class="img-fluid" src="https://sachinchoolur.github.io/lightslider/img/cS-5.jpg" />
                            </swiper-slide>
                            <swiper-slide class="slide-5">
                                <img class="img-fluid" src="https://sachinchoolur.github.io/lightslider/img/cS-6.jpg" />
                            </swiper-slide>
                        </swiper>

                    </div>
                </div>
                <div class="col-lg-6 bussines-details">
                    <h3 class="title">{{ title }}</h3>
                    <p>Communicate and spread your brand with every cup served to clients</p>
                    <p>Guidelines:</p>
                    <p>Size(in OZ)</p>
                    <p>Colors of printing</p>
                    <p>Quantity</p>
                    <p>Finishing (lamination,die-cut)</p>
                    <a href="#" class="blue-btn">get a quote</a>

                </div>
            </div>
        </section>
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
                title: "",
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
