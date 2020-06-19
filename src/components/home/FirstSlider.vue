<template>
    <section class="banner full-container adaptive">
        <carousel autoplay="autoplay" :loop=true :autoplayTimeout=3000 :per-page="1" :paginationEnabled="true" :scrollPerPage="true">
            <slide>
                <div class="row m0">
                    <div class="col-xl-12 pl-0 pr-0">
                        <img class="img-fluid d-none d-lg-block" src="../../assets/images/home/banner1.jpg" alt="First slide">
                        <img class="img-fluid d-lg-none" src="../../assets/images/banner1-mob.jpeg" alt="First slide">
                    </div>
                </div>
            </slide>

            <slide>
                <div class="row m0">
                    <div class="col-xl-12 pl-0 pr-0">
                        <img class="img-fluid d-none d-lg-block" src="../../assets/images/home/banner2.jpg" alt="Second slide">
                        <img class="img-fluid d-lg-none" src="../../assets/images/slider2_mob.jpg" alt="Second slide">
                    </div>
                </div>
            </slide>

            <slide>
                <div class="row m0">
                    <div class="col-xl-12 pl-0 pr-0">
                        <img class="img-fluid d-none d-lg-block" src="../../assets/images/home/banner3.jpg" alt="Third slide">
                        <img class="img-fluid d-lg-none" src="../../assets/images/home/banner3.jpg" alt="Third slide">
                    </div>
                </div>
            </slide>

        </carousel>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {
        name: "FirstSlider",
        components: {
            Carousel,
            Slide
        }
    }
</script>

<style>
    .adaptive{
        position: relative;
        z-index: 4;
    }
    .adaptive .VueCarousel-pagination button {
        padding: 0!important;
        margin-right: 7px;
        border: 1px solid #0083cd;
        width: 10px!important;
        height: 10px!important;
        transition: 1s;
    }
    .adaptive .VueCarousel-pagination button:hover{
        background-color: #0083cd!important;
    }
    .adaptive .VueCarousel-dot--active {
        background-color: #0083cd!important;
    }
    .adaptive .VueCarousel-pagination{
        margin-bottom: 15px;
    }
</style>
