<template>
    <section class="slider-banner full-container">
        <div class="demo container">
            <div class="item">
                <h3 class="slider-title pt-0">Customer stories</h3>
                <p class="text-white text-center">We Appreciate Your Feedback. <a v-b-modal.review href="javascript:void(0)" class="text-white font-weight-bold font-italic border-bottom text-decoration-none">LEAVE A REVIEW</a> </p>
                <carousel :autoplayTimeout=8000 autoplay="autoplay" id="content-slider" class="content-slider" :navigationNextLabel="''" :navigationPrevLabel="''" :scrollPerPage="false" :navigationEnabled="true" :paginationEnabled="false" :perPageCustom="[[320, 1], [768, 2]]">
                    <slide>
                        <div class="slider-inner-box">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </div>
                        <div class="img-box">
                            <img src="../../assets/images/slider-item.png" alt="First slide">
                            <p class="text-white">Name Surname</p>
                        </div>
                    </slide>
                    <slide>
                        <div class="slider-inner-box">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </div>
                        <div class="img-box">
                            <img src="../../assets/images/slider-item.png" alt="First slide">
                            <p class="text-white">Name Surname</p>
                        </div>
                    </slide>
                    <slide>
                        <div class="slider-inner-box">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </div>
                        <div class="img-box">
                            <img src="../../assets/images/slider-item.png" alt="First slide">
                            <p class="text-white">Name Surname</p>
                        </div>
                    </slide>
                    <slide>
                        <div class="slider-inner-box">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting.
                        </div>
                        <div class="img-box">
                            <img src="../../assets/images/slider-item.png" alt="First slide">
                            <p class="text-white">Name Surname</p>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
        <review-modal/>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import ReviewModal from "./ReviewModal";
    export default {
        name: "CustomerSlider",
        components: {
            Carousel,
            Slide,
            ReviewModal
        },
    }
</script>

<style scoped>
    .slider-banner img {
        border: 2px solid #009fe4;
        border-radius: 50%;
        position: relative;
        height: 105px;
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
