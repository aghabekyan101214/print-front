<template>
    <div class="business-service-detail">
        <breadcrumb :endpoint="title"/>
        <section class="services-single-banner container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="demo">

                        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
                            <swiper-slide v-for="img in service.images" :key="img.id" class="slide-1">
                                <img class="img-fluid" :src="img.image" alt="">
                            </swiper-slide>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                        </swiper>
                        <!-- swiper2 Thumbs -->
                        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
                            <swiper-slide v-for="img in service.images" :key="img.id" class="slide-1">
                                <img class="img-fluid" :src="img.image" alt="">
                            </swiper-slide>
                        </swiper>

                    </div>
                </div>
                <div class="col-lg-6 bussines-details">
                    <h3 class="title">{{ service.title }}</h3>
                    <p>Communicate and spread your brand with every cup served to clients</p>
                    <p>Guidelines:</p>
                    <p>Size(in OZ)</p>
                    <p>Colors of printing</p>
                    <p>Quantity</p>
                    <p>Finishing (lamination,die-cut)</p>
                    <router-link :to="service.slug + '/get-quote'" class="blue-btn">get a quote</router-link>

                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import Breadcrumb from "../components/Breadcrumb";
    // require styles
    import 'swiper/css/swiper.css'
    import axios from "axios"
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                title: "",
                service: {},
                swiperOptionTop: {
                    loop: true,
                    loopedSlides: 5, // looped slides should be the same
                    spaceBetween: 5,
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
            Swiper,
            SwiperSlide
        },
        methods: {
            getTitle() {
                let path = this.$route.path;
                let title = (path.split("/")[2]).split("-").join(" ");
                this.title = (title != undefined && title != null) ? title : "";
            },
            getData() {
                axios.get(process.env.VUE_APP_DATA_URL + "api/business-service/" + this.$route.params.slug).then(r => {
                    if(r.data) {
                        this.service = r.data;
                        console.log(r.data)
                    }
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                const swiperTop = this.$refs.swiperTop.$swiper
                const swiperThumbs = this.$refs.swiperThumbs.$swiper
                swiperTop.controller.control = swiperThumbs
                swiperThumbs.controller.control = swiperTop
            })
            this.getTitle();
        },
        created() {
            this.getData();
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        watch:{
            $route (to, from){
                this.getTitle();
                this.getData();
            }
        }
    }
</script>

<style scoped>
    .gallery-top {
        height: 100%!important;
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
