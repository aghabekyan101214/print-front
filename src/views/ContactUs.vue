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
            <p class="text-center">Our specialists stay late to answer and reply to all your needs. To get your order in advance and make sure everything is processed correctly, also to ensure  an uninterrupted flow of work for next day early production team.
            </p>
            <div class="contact-us-inner">
                <div>
                    <div class="flex">
                        <p class="blue">Phone number:</p>
                        <p>+1(818)814-4220, +1(818)221-5451</p>
                    </div>
                    <div class="flex">
                        <p class="blue">Address:</p>
                        <p>PO Box 11174 Glendale, CA 91226</p>
                    </div>
                    <div class="flex">
                        <p class="blue">Email:</p>
                        <p>
                            production@caliprintworks.com, Info@caliprintworks.com
                        </p>
                    </div>
                </div>
                <div>
                    <div class="flex">
                        <p class="blue">Horse:</p>
                        <p>Monday-Friday: 8:00am  - 7:00pm </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="boxes container">
            <div>
                <a href="#">
                    <img src="../assets/images/box1.png" class="h75" alt="Envelope">
                    <img src="../assets/images/box1-hover.png" class="h75 d-none" alt="Envelope">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="../assets/images/box2.png" class="h50" alt="Phone">
                    <img src="../assets/images/box2-hover.png" class="h50 d-none" alt="Phone">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="../assets/images/box3.png" class="h50" alt="Facebook">
                    <img src="../assets/images/box3-hover.png" class="h50 d-none" alt="Facebook">
                </a>
            </div>
            <div>
                <a href="#">
                    <img src="../assets/images/box4.png" class="h75" alt="Instagram">
                    <img src="../assets/images/box4-hover.png" class="h75 d-none" alt="Instagram">
                </a>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: "ContactUs"
    }
</script>

<style scoped>
    .boxes {
        margin:40px auto;
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
        display: block!important;
    }
    .contact-us-inner{
        margin:50px 0;
    }
    .boxes , .contact-us-inner{
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
