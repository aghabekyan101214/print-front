<template>
    <div>

        <FirstSlider/>

        <section class="our-story  full-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 ab-logo-cont">
                        <img class="img-fluid about-logo" src="../assets/images/about-logo.png" alt="About">
                    </div>
                    <div class="col-lg-8">
                        <h2 v-html="about_title"></h2>
                        <div class="story-decoration">
                            <div v-html="about_text" class="text-cont"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <PopularProducts/>

        <ServiceBoxes/>

        <WhatWeDo/>

        <section class="slider-banner1 full-container ">
            <div class="demo">
                <div class="item">
                    <h2 class="title text-center mb-5">trusted by <span class="blue">these brands</span></h2>

                    <carousel :navigationNextLabel="''" :navigationPrevLabel="''" :perPageCustom="[[320, 1], [768, 3], [1024, 4], [1600, 6]]" :navigationEnabled="true" :paginationEnabled="false" :scrollPerPage="false">
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/autostar-logo.png" alt="Autostar Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/byblos-logo.png" alt="Byblos Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/compass-logo.png" alt="Compass Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/ellapay-logo.png" alt="EllaPay Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/henrikalaverdyan-logo.png" alt="HenrikAlaverdyan Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/hhem-logo.png" alt="HHEM Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/jk-logo.png" alt="JK Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/kap-logo.png" alt="Kap Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/kasier-logo.png" alt="Kaiser Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/kb-logo.png" alt="Kb Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/rpm-logo.png" alt="RPM Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/sfj-logo.png" alt="SFJ Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/yrg-logo.png" alt="YRG Logo">
                        </slide>
                        <slide>
                            <img class="img-fluid" src="../assets/images/logos/zsangak-logo.png" alt="Zsangak Logo">
                        </slide>
                    </carousel>
                </div>
            </div>
        </section>
        <CustomerSlider/>
    </div>
</template>

<script>

    import { Carousel, Slide } from 'vue-carousel';
    import CustomerSlider from "../components/home/CustomerSlider";
    import PopularProducts from "../components/home/PopularProducts";
    import FirstSlider from "../components/home/FirstSlider";
    import ServiceBoxes from "../components/home/ServiceBoxes";
    import WhatWeDo from "../components/home/WhatWeDo";
    import axios from "axios";

    export default {
        name: 'home',
        data: () => {
            return {
                about_title: "",
                about_text: "",
            }
        },
        created() {
            console.log(process.env.VUE_APP_DATA_URL)
            axios.get(process.env.VUE_APP_DATA_URL + "get-main").then(r => {
               if(r.data) {
                   this.about_title = r.data.about_title;
                   this.about_text = r.data.about_text;
               }
            })
        },
        components: {
            Carousel,
            Slide,
            CustomerSlider,
            PopularProducts,
            FirstSlider,
            ServiceBoxes,
            WhatWeDo
        }
    }
</script>
<style>
    button{
        outline: none!important;
    }
    .m0{
        margin: 0!important;
    }
    .banner {
        background:#fafafa;
    }
    .top-title{
        padding-top:120px;
    }
    .more-btn {
        color: #0083cd;
        border: 2px solid #0083cd;
        width: 170px;
        height: 40px;
        display: block;
        text-align: center;
        line-height: 37px;
        border-radius: 10px;
        text-transform: uppercase;
    }
    .more-btn:hover{
        text-decoration:none;
    }
    .our-story {
        background: #0083cd;
        padding: 80px 0;
        z-index: 3;
        position: relative;
    }
    .our-story h2 {
        color: #fff;
        text-transform: uppercase;
        padding: 0 45px 30px 45px;
    }
    .story-decoration{
        position:relative;
    }

    .VueCarousel-navigation-button{
        position: relative!important;
    }

    .story-decoration:after {
        content: "";
        background: url('../assets/images/quote-right.png') no-repeat 0px;
        font-family: 'FontAwesome';
        width: 38px;
        height: 32px;
        display: inline-block;
        position: absolute;
        right: 10px;
        bottom: -18px;
    }
    .story-decoration:before {
        content: "";
        background: url('../assets/images/quote-left.png') no-repeat 0px;
        font-family: 'FontAwesome';
        width: 38px;
        height: 32px;
        display: inline-block;
    }

    .banner-item{
        width:100%;
    }

    .blue{
        color:#009fe4;
    }

    h2.title{
        text-transform:uppercase;
    }


    .slider-banner1 {
        margin-top: 47px;
        background: #fafafa;
        padding: 80px;
    }
    .slider-banner1 .VueCarousel-slide{
        text-align: center;
    }
    .VueCarousel-navigation > button {
        cursor: pointer;
        display: inline-block;
        padding: 0 5px;
        top: 22px;
        margin-top: 30px;
        position: static;
    }


    .menu li {
        display: inline-block;
        padding: 10px 0;
    }
    .menu li a{
        color:#1c1b1a;
    }
    .menu li a:hover{
        text-decoration:none;
        color:#1c1b1a;
    }



    .story-decoration .text-cont{
        color: #fff;
        padding-left: 51px;
        margin-top: -25px;
    }

    .m0{
        margin:0;
    }

    .VueCarousel-navigation button:first-child {
        background-image: url('../assets/images/preview.png');
        height: 36px;
        width: 37px;
        background-repeat: no-repeat;
        transform: translateX(-46%);
    }
    .VueCarousel-navigation button:nth-child(2){
        background-image: url('../assets/images/next.png');
        height: 36px;
        width: 37px;
        background-repeat: no-repeat;
        transform: translateX(-11%);
    }


    .VueCarousel-navigation {
        margin: 10px 0 0;
        padding: 0;
        text-align: center;
        position: relative;
    }

    @media only screen and (max-width: 600px) {
        .slider-banner1 .VueCarousel-navigation{
            text-align: center;
        }
        .slider-banner1 {
            padding: 10px;
        }
    }

</style>
