<template>
    <div class="contact-us">
        <section class="menu">
            <ul class="container">
                <li><i class="fa fa-caret-right"/>
                    <router-link to="/">Home / </router-link>
                </li>
                <li>
                    <p> Contact Us</p>
                </li>
            </ul>
        </section>
        <section class="container">
            <p>We are adding new products all the time. Contact us at CPW for any information on our new products and we will always reply to you the same day to ensure you receive the best service ever.</p>
            <div class="row pt-3">
                <div class="col-4 col-md-2">
                    <p class="blue">Phone number:</p>
                </div>
                <div class="col-6 col-md-4 pl-0">
                    <p>+1(818) 814-4220</p>
                </div>

                <div class="col-4 col-md-2">
                    <p class="blue">Postal Address:</p>
                </div>
                <div class="col-6 col-md-4 pl-0">
                    <p>PO Box 11174 Glendale, CA 91226</p>
                </div>
            </div>
            <div class="row">
                <div class="col-4 col-md-2">
                    <p class="blue">Email:</p>
                </div>
                <div class="col-6 col-md-4 pl-0">
                    <p>info@caliprintworks.com, production@caliprintworks.com</p>
                </div>

                <div class="col-4 col-md-2">
                    <p class="blue">Hours:</p>
                </div>
                <div class="col-6 col-md-4 pl-0">
                    <p> M - F </p>
                </div>
            </div>
        </section>
        <section class="quote">
            <quote-form/>
        </section>
        <section class="boxes container">
            <p class="text-center mb-40">Follow us on our social media profiles and special deals page and keep an eye out for our latest offers and promotions.</p>
            <div class="row">
                <div class="col-xl-3 col-md-3 col-sm-6 col-12">
                    <a href="mailto:info@caliprintworks.com">
                        <img src="../assets/images/box1.png" class="h75" alt="Envelope">
                        <img src="../assets/images/box1-hover.png" class="h75 d-none" alt="Envelope">
                    </a>
                </div>
                <div class="col-xl-3 col-md-3 col-sm-6">
                    <a href="tel:8188144220">
                        <img src="../assets/images/box2.png" class="h50" alt="Phone">
                        <img src="../assets/images/box2-hover.png" class="h50 d-none" alt="Phone">
                    </a>
                </div>
                <div class="col-xl-3 col-md-3 col-sm-6">
                    <a href="https://www.facebook.com/caliprintworks/" target="_blank">
                        <img src="../assets/images/box3.png" class="h50" alt="Facebook">
                        <img src="../assets/images/box3-hover.png" class="h50 d-none" alt="Facebook">
                    </a>
                </div>
                <div class="col-xl-3 col-md-3 col-sm-6">
                    <a href="https://instagram.com/caliprintworks?igshid=1j930zipis304" target="_blank">
                        <img src="../assets/images/box4.png" class="h75" alt="Instagram">
                        <img src="../assets/images/box4-hover.png" class="h75 d-none" alt="Instagram">
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import QuoteForm from "../components/quote/QuoteForm";

    export default {
        name: "ContactUs",
        components: {QuoteForm}
    }
</script>

<style scoped>
    .boxes {
        margin:80px auto 40px auto;
    }
    .quote{
        margin-top: 70px;
    }
    .boxes a > img:first-child:hover {
        display: none;
    }
    .h50 {
        height: 150px;
    }
    .h75{
        height: 200px;
    }
    .boxes a > img:first-child:not(.d-none):hover + .d-none{
        display: inline-block!important;
    }
    .contact-us-inner{
        margin:50px 0;
        flex-wrap: wrap;
    }
    .contact-us-inner{
        display:flex;
        justify-content: space-between;
    }
    .flex{
        display:flex;
    }
    .padding0{
        padding:0;
    }
    .menu li .fa-caret-right{
        color:#0083cd;
    }

    .banner-inner{
        position: absolute;
        left: 328px;
        width: 541px;
        background: #fff;
        z-index: 3;
        top: 87px;
        height: 377px;
        padding: 40px;
    }
    .menu{
        background:#fafafa;
        height:44px;
        margin-bottom:40px;
    }
</style>
