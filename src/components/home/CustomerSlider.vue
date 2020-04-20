<template>
    <section class="slider-banner full-container">
        <div class="demo container">
            <div class="item">
                <h3 class="slider-title pt-0">Customer stories</h3>
                <p class="text-white text-center">We Appreciate Your Feedback. <a v-b-modal.review href="javascript:void(0)" class="text-white font-weight-bold font-italic border-bottom text-decoration-none">LEAVE A REVIEW</a> </p>
                <carousel :autoplayTimeout=8000 autoplay="autoplay" id="content-slider" class="content-slider" :navigationNextLabel="''" :navigationPrevLabel="''" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false" :perPageCustom="[[320, 1], [768, 2]]">
                    <slide v-for="review in reviews" :key="review.id">
                        <div class="slider-inner-box">
                            {{ review.text }}
                        </div>
                        <div class="img-box">
                            <img :src="review.image" alt="slide item">
                            <p class="text-white">{{ review.name }}</p>
                        </div>
                    </slide>

<!--                    .slider-banner img-->
                </carousel>
            </div>
        </div>
        <review-modal/>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import ReviewModal from "./ReviewModal";
    import axios from "axios";

    export default {
        name: "CustomerSlider",
        data: () => {
            return {
                reviews: []
            }
        },
        components: {
            Carousel,
            Slide,
            ReviewModal
        },
        methods: {
            getReviews() {
                axios.get(process.env.VUE_APP_DATA_URL + "api/get-reviews").then(r => {
                    if(r.data) {
                        this.reviews = r.data.data;
                    }
                })
            }
        },
        created() {
            this.getReviews();
        }
    }
</script>

<style scoped>
    .slider-banner img {
        border: 2px solid #009fe4;
        border-radius: 50%;
        position: relative;
        height: 105px;
        width: 105px;
        bottom: 60px;
        padding: 2px;
        left: 30px;
        display: block;
        z-index: 999999999999999999999!important;
    }
    .VueCarousel-slide{
        position: relative;
        padding-right: 10px;
    }

    .slider-banner {
        background-image: url('../../assets/images/banner-img3.png');
        background-size: cover;
        padding: 80px 0;
    }

    .slider-inner-box{
        background: #fafafa;
        padding: 10px 20px 60px 20px;
        height:200px;
        overflow-y: auto;
    }
    .slider-title {
        padding: 30px 0;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
    }
    /*modal*/
    .img-box p{
        position: relative;
        margin-bottom: 0;
        bottom: 60px;
        left: 30%;
    }
</style>
