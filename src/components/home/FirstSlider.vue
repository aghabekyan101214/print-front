<template>
    <section class="banner full-container adaptive">
        <carousel :per-page="1" :paginationEnabled="true" :scrollPerPage="true">
            <slide>
                <div class="row m0">
                    <div class="col-xl-12 pl-0 pr-0">
                        <img class="img-fluid d-none d-lg-block" src="../../assets/images/banner1.jpg" alt="First slide">
                        <img class="img-fluid d-lg-none" src="../../assets/images/banner1-mob.jpeg" alt="First slide">
                    </div>
                </div>
            </slide>
            <slide>
                <div class="row m0">
                    <div class="col-lg-6 col-md-6">
                        <img class="img-fluid" src="../../assets/images/banner-img.png" alt="First slide">
                    </div>
                    <div class="col-lg-6">
                        <div class="col-lg-9 f-right-banner">
                            <h2 class="title top-title"><span class="blue">Business </span>Services</h2>
                            <p class="generic-details">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <a href="#" class="more-btn">Learn more</a>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="row m0">
                    <div class="col-lg-6 col-md-6">
                        <img class="img-fluid" src="../../assets/images/banner-img.png" alt="First slide">
                    </div>
                    <div class="col-lg-6">
                        <div class="col-lg-9 f-right-banner">
                            <h2 class="title top-title"><span class="blue">Business </span>Services</h2>
                            <p class="generic-details">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <a href="#" class="more-btn">Learn more</a>
                        </div>
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
