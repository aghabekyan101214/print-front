<template>
    <div class="service-boxes">
        <h2 class="title text-center">Everything you need: <span class="blue">Ask For!</span></h2>
        <section class="container service-section">
            <div class="box-bg box1">
                <div class="box-bg-inner">
                    <div class="bg-layout">
                        <a href="#" class="order-btn">Order now</a>
                    </div>
                    <img class="img-fluid" src="../../assets/images/banners/lt-min.jpg" alt="">
                </div>
            </div>
            <div class="box-bg box2">
                <div class="box-bg-inner">
                    <div class="bg-layout">
                        <a href="#" class="order-btn">Order now</a>
                    </div>
                    <img class="img-fluid" src="../../assets/images/banners/rt-min.jpg" alt="">
                </div>
            </div>
            <div class="box-bg box3">
                <div class="box-bg-inner">
                    <div class="bg-layout">
                        <a href="#" class="order-btn">Order now</a>
                    </div>
                    <img class="img-fluid" src="../../assets/images/banners/lb-min.jpg" alt="">
                </div>
            </div>
            <div class="box-bg box4">
                <div class="box-bg-inner">
                    <div class="bg-layout">
                        <a href="#" class="order-btn">Order now</a>
                    </div>
                    <img class="img-fluid" src="../../assets/images/banners/rb-min.jpg" alt="">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "ServiceBoxes"
    }
</script>

<style scoped>
    .service-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 40px;
    }
    /*.box1{*/
    /*    background: url('../../assets/images/banners/lt-min.jpg') no-repeat 0px;*/
    /*}*/
    /*.box2{*/
    /*    background: url('../../assets/images/banners/rt-min.jpg') no-repeat 0px;*/
    /*}*/
    /*.box3{*/
    /*    background: url('../../assets/images/banners/lb-min.jpg') no-repeat 0px;*/
    /*}*/
    /*.box4{*/
    /*    background: url('../../assets/images/banners/rb-min.jpg') no-repeat 0px;*/
    /*}*/
    .bg-layout{
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: #000000b0;
        opacity: 0;
        transition: .3s;
    }
    .box-bg:hover .box-bg-inner .bg-layout{
        opacity: 1;
    }
    .box-bg {
        width: 525px;
        margin: 15px;
    }
    .box-bg-inner {
        height: 100%;
        transition: 0.3s;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        position: relative;
    }
    .order-btn:hover{
        color:#fff;
        text-decoration:none;
    }
    .order-btn{
        border: 2px solid #fff;
        padding: 10px 31px;
        border-radius: 8px;
        color: #fff;
        margin-top: 20px;
        display: block;
        width: 167px;
        margin: 0 auto;
    }
    @media all and (max-width: 991px) {
        .service-section{
            display: flex;
            justify-content: center;
        }
    }
</style>
