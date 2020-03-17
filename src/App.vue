<template>
    <div id="app" @scroll="handleScroll">
        <div class="menu-cont" id="menu-header"  ref="menu">
            <div class="container">
                <header>
                    <div class="header">

                        <b-navbar toggleable="lg">
                            <router-link class="navbar-brand" to="/"><img src="./assets/images/logo.png" alt="logo"></router-link>

                            <b-navbar-toggle target="nav-collapse"/>

                            <b-collapse id="nav-collapse" is-nav>
                                <b-navbar-nav right>
                                    <a class="nav-dropdown nav-item nav-link" @click="handleClick">ALL products <i class="fa fa-angle-down"/>
                                        <div class="dropdown-list" ref="drop">
                                            <i class="fa fa-sort-up"/>
                                            <ul>
                                                <li>
                                                    <a href="#"><p>Print services</p></a>
                                                </li>
                                                <li>
                                                    <a href="#">Booklets</a>
                                                </li>
                                                <li>
                                                    <a href="#">Bookmarks</a>
                                                </li>
                                                <li>
                                                    <a href="#">Brochures</a>
                                                </li>
                                                <li>
                                                    <a href="#">Business cards</a>
                                                </li>
                                                <li>
                                                    <a href="#">Calendars</a>
                                                </li>
                                                <li>
                                                    <a href="#">Door Hangers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Envelopes</a>
                                                </li>
                                                <li>
                                                    <a href="#">Event Tickets</a>
                                                </li>
                                                <li>
                                                    <a href="#">Flyers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Folders</a>
                                                </li>
                                                <li>
                                                    <a href="#">Greeting Cards</a>
                                                </li>
                                                <li>
                                                    <a href="#">Letterheads</a>
                                                </li>
                                                <li>
                                                    <a href="#">Notepads</a>
                                                </li>
                                                <li>
                                                    <a href="#">Postcards</a>
                                                </li>
                                                <li>
                                                    <a href="#">Posters</a>
                                                </li>
                                                <li>
                                                    <a href="#">Rack Cards</a>
                                                </li>
                                                <li>
                                                    <a href="#">Roll Labels</a>
                                                </li>
                                                <li>
                                                    <a href="#">Special Shapes</a>
                                                </li>
                                                <li>
                                                    <a href="#">Stickers</a>
                                                </li>
                                                <li>
                                                    <a href="#">Table Tents</a>
                                                </li>

                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#"><p>Banner/Signage</p></a>
                                                </li>
                                                <li>
                                                    <a href="#">A-Frames</a>
                                                </li>
                                                <li>
                                                    <a href="#">Banners</a>
                                                </li>
                                                <li>
                                                    <a href="#">Car Magnets</a>
                                                </li>
                                                <li>
                                                    <a href="#">Floor Decals </a>
                                                </li>
                                                <li>
                                                    <a href="#">Posters (Large Format)</a>
                                                </li>
                                                <li>
                                                    <a href="#">Retractable stands</a>
                                                </li>
                                                <li>
                                                    <a href="#">Rigid Signs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Window Cling</a>
                                                </li>
                                                <li>
                                                    <a href="#">Window Decals</a>
                                                </li>
                                                <li>
                                                    <a href="#">Window Perfs</a>
                                                </li>
                                                <li>
                                                    <a href="#">Yard Signs</a>
                                                </li>
                                                <br>
                                                <li>
                                                    <a href="#"><p>Apparel</p></a>
                                                </li>
                                                <li>
                                                    <a href="#">Screen Printing</a>
                                                </li>
                                                <li>
                                                    <a href="#">Digital Transfer</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vinyl Heat Transfer </a>
                                                </li>
                                                <li>
                                                    <a href="#">Embroidery</a>
                                                </li>

                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href="#"><p>Services</p></a>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/every-door-direct">Every Door Direct </router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/mail-printing">MailPrinting</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/direct-mail">Direct Mail</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/bulk-mail-letters">Bulk Mail letters
                                                        (Marketing Mail)</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/custom-lettering">Custom Lettering</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/business-service/embroidery">Embroidery</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/graphic-design">Graphic Design</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/web-design">Web Design</router-link>
                                                </li>
                                                <li>
                                                    <router-link to="/web-development">Web Development</router-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </a>
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
        <router-view/>
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
                                <a href="#"><img src="./assets/images/fb-icon.png" alt=""></a>
                            </li>
                            <li>
                                <a href="#"><img src="./assets/images/insta-icon.png" alt=""></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-1">
                    </div>
                </div>
            </div>
            <p class="text-center">CaliPrintWork. All rights reserved</p>
        </footer>
    </div>
</template>
<script>
    export default {
        data: () => {
            return {
                static_url: process.env.VUE_APP_STATIC_URL,
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleClick(e) {
                e.stopPropagation()
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
    .dropdown-list{
        cursor: initial;
        text-transform: capitalize;
    }
    *{
        font-family: 'Poppins-Regular', sans-serif;
    }
    header{
        padding: 10px 0;
    }

    /********* header ***********/

    ul.navbar-nav{
        position:absolute;
        right:0;
        bottom: 0;
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
    .nav-dropdown .dropdown-list {
        position: absolute;
        width: 580px;
        background: #fff;
        z-index: 300000;
        border: 2px solid #009fe4;
        padding: 34px 17px;
        color: #1c1b1a;
        top: 40px;
        left: 0;
    }
    .dropdown-list{
        display:none;
    }
    .nav-dropdown:hover  .dropdown-list{
        display:block;
    }
    .nav-dropdown .dropdown-list  a{
        color: #1c1b1a;
        font-family: 'Poppins-Regular', sans-serif;
        font-size: 14px;
    }
    .nav-dropdown .dropdown-list  a:hover{
        text-decoration:none;
    }
    .nav-dropdown .dropdown-list  p{
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
        padding: 40px 0;
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
    }
    footer h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 20px;
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
        top: 42px;
        position: absolute;
    }
    footer p{
        color: #fff;
        margin: 26px;
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
    }
    @media only screen  and (max-width:991px) {
        .box-bg {

            margin: 15px auto;
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
        .navbar-brand img{
            width: 100%;
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
        .navbar-brand img{
            width: 100%;
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
        .box-bg-inner {
            padding-top: 52px;
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
        .nav-dropdown .dropdown-list {
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


</style>
