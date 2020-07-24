<template>
    <div id="app" @scroll="handleScroll">
        <div class="menu-cont" id="menu-header"  ref="menu">
            <div class="container">
                <header>
                    <div class="header">

                        <b-navbar toggleable="lg">
                            <router-link class="navbar-brand" to="/"><img src="./assets/images/logo.png" alt="logo"></router-link>
                            <b-navbar-toggle ref="hamburger" id="hamb" target="nav-collapse"/>

                            <b-collapse id="nav-collapse" is-nav>
                                <b-navbar-nav right>

                                    <b-nav-item-dropdown class="nav-dropdown pt-0" html='ALL products <i class="fa fa-sort-up"></i>'>


                                        <ul>
                                            <b-dropdown-item href="#"><p>Print services</p></b-dropdown-item>
                                            <b-dropdown-item v-for="product in products" :key="product.id" :to="'/get-quote/' + product.slug">{{ product.name }}</b-dropdown-item>
                                        </ul>

                                        <ul>
                                            <b-dropdown-item href="#"><p>Banner/Signage</p></b-dropdown-item>

                                            <b-dropdown-item v-for="s in signage" :key="s.key" :to="'/get-quote/' + s.slug">{{ s.name }}</b-dropdown-item>

                                            <ul class="w-200">
                                                <b-dropdown-item href="#"><p>Apparel Branding</p></b-dropdown-item>

                                                <b-dropdown-item v-for="a in apparel" :key="a.key" :to="'/contact'">{{ a.name }}</b-dropdown-item>
                                            </ul>
                                        </ul>

                                        <ul>
                                            <b-dropdown-item href="#"><p>Services</p></b-dropdown-item>
                                            <b-dropdown-item v-for="service in services" :key="service.key" :to="'/business-service/' + service.slug">{{ service.title }}</b-dropdown-item>
                                        </ul>
                                            <!--                                        <ul class="dropdown-list" ref="drop">-->
<!--                                            <i class="fa fa-sort-up"/>-->
<!--                                            <ul>-->
<!--                                                <li>-->
<!--                                                    <a href="#"><p>Print services</p></a>-->
<!--                                                </li>-->
<!--                                                <li v-for="product in products" :key="product.id">-->
<!--                                                    <router-link class="dropdown-item" :to="'/get-quote/' + product.slug">{{ product.name }}</router-link>-->
<!--                                                </li>-->


<!--                                            </ul>-->
<!--                                            <ul>-->
<!--                                                <li>-->
<!--                                                    <a href="#"><p>Banner/Signage</p></a>-->
<!--                                                </li>-->
<!--                                                <li v-for="s in signage" :key="s.key">-->
<!--                                                    <router-link :to="'/get-quote/' + s.slug">{{ s.name }}</router-link>-->
<!--                                                </li>-->

<!--                                                <br>-->
<!--                                                <ul class="w-200">-->
<!--                                                    <li>-->
<!--                                                        <a href="#"><p>Apparel Branding</p></a>-->
<!--                                                    </li>-->
<!--                                                    <li v-for="a in apparel" :key="a.key">-->
<!--                                                        <router-link :to="'/get-quote/' + a.slug" v-html="a.name"></router-link>-->
<!--                                                    </li>-->
<!--                                                </ul>-->

<!--                                            </ul>-->
<!--                                            <ul>-->
<!--                                                <li>-->
<!--                                                    <a href="#"><p>Services</p></a>-->
<!--                                                </li>-->
<!--                                                <li v-for="service in services" :key="service.slug">-->
<!--                                                    <router-link :to="'/business-service/' + service.slug">{{ service.title }}</router-link>-->
<!--                                                </li>-->
<!--                                            </ul>-->
<!--                                        </ul>-->
                                    </b-nav-item-dropdown>
                                    <b-nav-item to="/business-services" class="nav-item">Business Services <i class="fa fa-sort-up fa-sort-up-list"/></b-nav-item>
                                    <b-nav-item to="/contact" class="nav-item">Contact us <i class="fa fa-sort-up fa-sort-up-list"/></b-nav-item>
                                    <b-nav-item to="/special-deals" class="nav-item">Special Deals <i class="fa fa-sort-up fa-sort-up-list"/></b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>

                    </div>
                </header>
            </div>

        </div>
        <div class="content" @click="closeHamburger">
            <router-view/>
        </div>
        <footer class="full-container footer">
            <div class="footer-inner">
                <div class="row m0">
                    <div class="col-lg-1"></div>
                    <div class="col-lg-5">
                        <h2>Useful links</h2>
                        <ul>
                            <li>
                                <router-link to="/privacy-policy">Privacy Policy</router-link>
                            </li>
                            <li>
                                <router-link to="/terms-and-conditions">Terms and Conditions</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5">
                        <h2>Follow us</h2>
                        <ul class="social-list">
                            <li>
                                <a href="https://www.facebook.com/caliprintworks" target="_blank"><img src="./assets/images/fb-icon.png" alt=""></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/caliprintworks" target="_blank"><img src="./assets/images/insta-icon.png" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-1">
                    </div>
                </div>
            </div>
            <p class="d-flex align-items-center justify-content-center flex-wrap">©Copyright 2019 CaliPrintWorks. <span>All rights reserved</span></p>
        </footer>
    </div>
</template>
<script>
    import axios from "axios"

    export default {
        data: () => {
            return {
                static_url: process.env.VUE_APP_STATIC_URL,
                products: [],
                signage: [],
                apparel: [],
                services: []
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            axios.get(process.env.VUE_APP_DATA_URL + "api/get-business-services").then(r => {
                if(r.data) {
                    this.services = r.data.services;
                    this.products = r.data.printServices;
                    this.signage = r.data.signage;
                    this.apparel = r.data.apparel;
                }
            })
        },
        methods: {
            handleClick(e) {
                e.stopPropagation()
                this.$refs.drop.classList.remove("d-none");
            },
            closeHamburger(){
                if(this.$refs.hamburger.toggleState) {
                    document.getElementById("hamb").click();
                }
                // this.$refs.hamburger.style.display = 'none';
            },
            handleLeave(e){
                e.stopPropagation()
                // this.$refs.drop.classList.add("d-none");
            },
            openDrop(e) {
                e.trigger("click")
            },
            handleScroll () {
                let header = document.getElementById("menu-header");
                let sticky = header.offsetTop;
                if (window.pageYOffset - 90 > sticky) {
                    header.classList.add("sticky");
                } else {
                    header.classList.remove("sticky");
                }
            }
        },
        watch:{
            $route (to, from){
                window.scrollTo(0, 0);
                // setTimeout(() => {
                //     this.$refs.drop.classList.remove("d-none");
                // }, 100)
            }
        }
    }
</script>
<style>
    @font-face {
        font-family: 'FontAwesome';
        src: url('./assets/fonts/FontAwesome.otf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Regular';
        src: url('./assets/fonts/Poppins-Regular/Poppins-Regular.eot');
        src: url('./assets/fonts/Poppins-Regular/Poppins-Regular.eot') format('embedded-opentype'),
        url('./assets/fonts/Poppins-Regular/Poppins-Regular.woff') format('woff'),
        url('./assets/fonts/Poppins-Regular/Poppins-Regular.ttf') format('truetype'),
        url('./assets/fonts/Poppins-Regular/Poppins-Regular.svg#PFDinTextProMedium') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Bold';
        src: url('./assets/fonts/Poppins-Bold/Poppins-Bold.ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins-Medium';
        src: url('./assets/fonts/Poppins-Bold/Poppins-Medium.ttf');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'PTSans-Bold';
        src: url('./assets/fonts/PTSans-Bold/PTSans-Bold.eot');
        src: url('./assets/fonts/PTSans-Bold/PTSans-Bold.eot') format('embedded-opentype'),
        url('./assets/fonts/PTSans-Bold/PTSans-Bold.woff') format('woff'),
        url('./assets/fonts/PTSans-Bold/PTSans-Bold.ttf') format('truetype'),
        url('./assets/fonts/PTSans-Bold/PTSans-Bold.svg#PFDinTextProMedium') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    .dropdown-item:active{
        background-color: transparent!important;
    }
    .sticky {
        position: fixed;
        top: 0;
        z-index: 10;
        background-color: #fff;
        left: 50%;
        transform: translateX(-50%);
        /*transition: .5s;*/
        width: 100%;
    }
    /*.menu-cont {*/
    /*    background: #fff;*/
    /*    width: 100%;*/
    /*}*/
    .sticky + div {
        padding-top: 90px;
    }
    .nav-item{
        cursor: pointer;
    }
    .dropdown-menu{
        cursor: initial;
        text-transform: capitalize;
        padding: 0!important;
    }
    .navbar-nav .dropdown-menu{
        float: left!important;
        overflow-y: scroll;
    }
    *{
        font-family: 'Poppins-Regular', sans-serif;
    }
    header{
        padding: 10px 0;
    }

    /********* header ***********/

    ul.navbar-nav{
        right:0;
        bottom: 0;
    }
    .navbar-expand-lg .navbar-collapse{
        justify-content: flex-end;
    }
    .nav-item {
        position: relative;
        border-bottom: 2px solid transparent;
        margin: 0 9px;
        color: #000;

    }
    .navbar-light .navbar-nav .nav-link{
        color: #3a3938 !Important;
        text-transform: uppercase;
        font-family: 'Poppins-Regular', sans-serif;
    }
    .nav-item:hover {
        border-bottom:2px solid #009fe4;
        transition: width .2s;
    }
    .navbar-brand img{
        max-height: 50px;
    }
    .nav-item:hover .fa-sort-up-list {
        visibility: visible;
        position: absolute;
        top: 34px;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
    }
    .fa-sort-up-list{
        visibility:hidden;
    }

    .nav-dropdown{
        position:relative;
    }
    .nav-dropdown .dropdown-menu {
        position: absolute;
        width: 580px;
        background: #fff;
        z-index: 300000;
        border: 2px solid #009fe4;
        padding-top: 20px!important;
        color: #1c1b1a;
        left: 0;
        height: 400px;
    }
    /*.dropdown-menu{*/
    /*    display:none;*/
    /*}*/

    .nav-dropdown .dropdown-menu  a{
        color: #1c1b1a;
        font-family: 'Poppins-Regular', sans-serif;
        font-size: 14px;
    }
    .nav-dropdown .dropdown-menu  a:hover{
        text-decoration:none;
    }
    .nav-dropdown .dropdown-menu  p{
        color: #1c1b1a;
        font-family: 'Poppins-Regular', sans-serif;
        font-weight: bold;
    }
    .nav-dropdown ul {
        float: left;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width:180px;
    }
    .fa-sort-up{
        position: absolute;
        top: -8px;
        left: 60px;
        color: #009fe4;
        font-size: 19px;
    }

    /********* header end ***********/
    /********************/



    .services-single-banner {
        clear: both;
        margin-bottom: 40px;
    }
    .services-single-banner  .demo {
        width:450px;
    }


    .bussines-details h3{
        font-size:20px;
        font-style:italic;
    }
    .blue-btn{
        background: #009fe4;
        height: 50px;
        width: 190px;
        display: block;
        text-align: center;
        line-height: 48px;
        color: #fff;
        border-radius: 14px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
    }
    .blue-btn:hover{
        text-decoration:none;
        color: #fff;
    }
    .services-single-banner   .demo .lSAction > a {
        background-image: url('/assets/images/controls.png') !important;
        background-repeat: no-repeat;
    }
    .services-single-banner  .demo  .lSAction > .lSNext {
        background-position: -16px;
        right: 0;
        width: 30px;
    }
    .services-single-banner  .demo .lSAction > .lSPrev {
        background-position: 14px 0;
        left: 0;
        width: 30px;
    }
    .bussines-details p{
        font-size:14px;
        font-style:italic;
    }

    footer {
        background: #1c1b1a;
        border-top: 1px solid #fff;
        padding: 30px 0;
    }
    footer ul {
        list-style-type: none;
        margin: 0;
        padding: 0;

    }
    .social-list li{
        display:inline-block;
        margin-right:10px;
    }
    footer ul li a{
        color:#fff;
        font-size: 14px;
    }
    footer h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 16px;
        border-bottom: 2px solid #fff;
        position: relative;
        padding-bottom: 20px;
        margin-bottom: 10px;
    }
    footer h2:after {
        content: "";
        background: #fff;
        text-transform: uppercase;
        font-size: 20px;
        border-bottom: 1px solid;
        display: block;
        width: 32%;
        height: 4px;
        top: 35px;
        position: absolute;
    }
    footer p{
        color: #fff;
        margin: 26px;
    }
    footer .social-list{
        margin-top: 17px;
    }

    .m0{
        margin:0;
    }

    /* Custom Select */
    .select-item{
        margin: 80px 0 40px;
        float: right;
        width: 100%;
        text-align: right;
    }
    .select-item label{
        margin: 4px 20px;
        font-style: italic;
    }
    .select {
        position: relative;
        display: flex;
        width: 20em;
        height: 34px;
        border: 1px solid #1c1b1a;
        overflow: hidden;
        float: right;
    }
    .select::after {
        content: '\f078';
        font-family: 'FontAwesome';
        position: absolute;
        top: 6px;
        right: 0;
        padding: 0 1em;
        cursor: pointer;
        font-style: normal;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
        font-size: 13px;
    }
    @media (min-width: 992px) {
        /*.nav-dropdown:hover  .dropdown-menu{*/
        /*    display:block;*/
        /*}*/
    }
    @media only screen  and (max-width:1200px) {
        .top-title {
            padding-top: 35px;
        }
        .slider-title {
            padding: 50px 0 35px;
            font-size: 35px;
        }
        .banner {
            padding-bottom: 20px;
        }
        .section2 {
            margin-top: 0;
        }
        .services-single-banner .demo {
            width: auto;
        }
        .services-single-banner .demo img{
            width:100%;
        }
    }
    @media only screen  and (max-width:1024px) {
        .contact-us-inner {
            display: block;
        }
        .navbar-brand img{
            height: 25px;
        }
    }
    @media only screen  and (max-width:991px) {
        .box-bg {

            margin: 15px auto;
        }
        .dropdown-menu{
            height: 300px;
        }
        .nav-dropdown .dropdown-menu p{
            margin-top: 1rem;
        }
        .slider-inner-box {
            line-height: 20px;
            font-size: 14px;
        }
        .banner-inner {
            left: 34px;
            width: 92%;
            min-height: 377px;
        }
        img.about-logo{
            height: 100px;
        }
        section.our-story{
            padding-top: 20px;
        }
        .ab-logo-cont{
            text-align: center;
            padding-bottom: 25px;
        }
    }
    @media  (min-width:768px) and (max-width:991px) {
        .navbar-brand {
            width: 37%;

        }
        .nav-item:hover .fa-sort-up-list {
            top: 27px !important;
        }
        .nav-item {
            font-size:12px;
            margin:0;
        }
    }

    @media only screen and (max-width:768px) {
        .navbar-nav {
            display: block;
        }
        ul.navbar-nav {
            position: relative !important;
            right: 0 !important;
        }
    }
    @media only screen and (max-width: 600px) {
        .navbar-brand{
            float: left;
            width: 70%;
        }

        .section2 {
            padding: 0;
        }
        .name-details {
            left: 49px;
        }
        .whatwedo-inner {
            display: block;
        }
        h2.title  , .slider-title{
            font-size: 20px;
        }
        .form-details {
            display: block !important;
        }
        .form-details div {
            width: 100% !important;
            margin-bottom: 20px !important;

        }
        .label {
            width: 100% !important;
        }
        .select-blue{
            width:100% !important;
        }
        .slider-banner1 {
            padding: 20px;
        }

        .banner-inner {
            position: inherit;
            left: 0;
            width: auto;
            background: #fff;
            z-index: 3;
            top: 12px;
            height: auto;
            padding: 10px;
        }
        .lSSlideOuter{
            text-align:center;
        }
        .boxes, .contact-us-inner {
            display: block;
        }
        .boxes div {
            margin: 40px auto;
            text-align: center;
        }
        .navbar.navbar-expand-md.navbar-light{
            padding:0;
        }
        .nav-dropdown .dropdown-menu {
            max-width: 580px !important;
            width: auto !important;
        }
        .select {
            width: 15em;
        }
        .more-btn {
            margin: 0 auto;
        }
        .banner .lSSlideOuter .lSPager.lSpg {
            margin: 20px 0 5px 0 !important;
        }

        .slider-banner .lSSlideOuter .lSPager.lSpg , .slider-banner1 .lSSlideOuter .lSPager.lSpg {
            position: relative;
            left: 0;
            right: 0;
            margin: 0 auto !important;
            text-align: center;
            width: 100px;
            height: 90px;
            top: 25px;
        }
    }

    @media only screen and (max-width: 600px) {

        .banner-inner {
            position: inherit;
            left: 0;
            width: auto;
            background: #fff;
            z-index: 3;
            top: 87px;
            height: auto;
            padding: 40px;
        }
        .boxes, .contact-us-inner {
            display: block;
        }
        .boxes div {
            margin: 40px auto;
            text-align: center;
        }
    }
    ul.w-200{
        width: 250px;
    }
    .dropdown-menu a:hover{
        color: #007bff;
        background-color: none!important;
    }
    .nav-item.b-nav-dropdown.dropdown.nav-dropdown:hover  > a > span > i, .show > a > span > i {
        display: block!important;
    }

    .b-nav-dropdown.dropdown > a > span > i{
        top: 34px;
        left: 69px;
        display: none;
    }
    .mb-30{
         margin-bottom: 30px;
     }
    .mb-40{
        margin-bottom: 40px;
    }
    .order-btn{
        font-weight: bold;
    }
    .dropdown-item:hover{
        background-color: transparent!important;
    }
</style>
