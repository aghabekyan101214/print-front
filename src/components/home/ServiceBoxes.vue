<template>
    <div class="service-boxes">
        <h2 class="title text-center">Everything you need: <span class="blue">Ask For!</span></h2>
        <section class="container service-section">
            <div class="box-bg box1">
                <div class="box-bg-inner">
                    <h3>Custom Vehicle Vinyl Lettering & </h3>
                    <p>
                        We ensure that your materials are printed and mailed according to the most current postal regulations.
                    </p>
                    <a href="#" class="order-btn">Order now</a>
                </div>
            </div>
            <div class="box-bg box2">
                <div class="box-bg-inner">
                    <h3>Custom Vehicle Vinyl Lettering & </h3>
                    <p>
                        We ensure that your materials are printed and mailed according to the most current postal regulations.
                    </p>
                    <a href="#" class="order-btn">Order now</a>
                </div>
            </div>
            <div class="box-bg box3">
                <div class="box-bg-inner">
                    <h3>Custom Vehicle Vinyl Lettering & </h3>
                    <p>
                        We ensure that your materials are printed and mailed according to the most current postal regulations.
                    </p>
                    <a href="#" class="order-btn">Order now</a>
                </div>
            </div>
            <div class="box-bg box4">
                <div class="box-bg-inner">
                    <h3>Custom Vehicle Vinyl Lettering & </h3>
                    <p>
                        We ensure that your materials are printed and mailed according to the most current postal regulations.
                    </p>
                    <a href="#" class="order-btn">Order now</a>
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
    .box1{
        background: url('../../assets/images/box-bg1.png') no-repeat 0px;
    }
    .box2{
        background: url('../../assets/images/box-bg2.png') no-repeat 0px;
    }
    .box3{
        background: url('../../assets/images/box-bg3.png') no-repeat 0px;
    }
    .box4{
        background: url('../../assets/images/box-bg4.png') no-repeat 0px;
    }

    .box1 .box-bg-inner {
        background:rgb(237, 96, 174, 0.8);

    }
    .box2 .box-bg-inner {
        background:rgb(57,98,131, 0.8);

    }
    .box3 .box-bg-inner {
        background:rgb(66,158,209, 0.8);

    }
    .box4 .box-bg-inner {
        background:rgb(38,34,32, 0.8);

    }
    .box1 .box-bg-inner:hover {
        background:rgb(237, 96, 174, 0.5);
        height: 100%; -webkit-transition: width 4s; /* Safari prior 6.1 */
    }
    .box2 .box-bg-inner:hover {
        background:rgb(57,98,131, 0.5);
        height: 100%; -webkit-transition: width 4s; /* Safari prior 6.1 */
    }

    .box3 .box-bg-inner:hover {
        background:rgb(66,158,209, 0.5);
        height: 100%; -webkit-transition: width 4s; /* Safari prior 6.1 */
    }

    .box4 .box-bg-inner:hover {
        background:rgb(38,34,32,0.5);
        height: 100%; -webkit-transition: width 4s; /* Safari prior 6.1 */
    }
    .box-bg {
        height: 350px;
        width: 525px;
        background-size: 100%;
        margin: 15px;
    }
    .box-bg-inner {
        height: 100%;
        transition: 0.3s;
        padding-top: 107px;
        text-align: center;
        color: #fff;
        border-radius: 10px;
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
</style>
