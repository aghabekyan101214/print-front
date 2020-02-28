<template>
    <section class="popular-products container">
        <h2 class="title text-center">Most <span class="blue">Popular</span> Products</h2>
        <p class="decoration text-center">Focus on a products you love and we will handle the rest.</p>
        <div class="row">

            <div v-for="i in 4" class="col-md-3 col-sm-2 col-xs-2 prod-cont">
                <div class="product-box">
                    <p class="text-center mt-2 mb-1 pre-title">16pt Premium</p>
                    <h5 class="text-center  product-title">Most Popular</h5>
                    <p class="m-0 text-center">
                        <i class="fa fa-caret-down"/>
                    </p>
                    <div class="price-box">
                        <h5 class="font-weight-bold ls-1">Size 2"x3.5"</h5>
                        <h3 class="price-qnt">$34.50/ <span class="qty">Qty 1000</span> </h3>
                    </div>
                    <div class="services-box">
                        <table class="table table-striped m0">
                            <tr>
                                <td>
                                    <img class="check" src="../../assets/images/check.svg" alt="Check Icon">
                                    <p class="pl-2 m0 d-inline-block">100 Corporate Cards</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img class="check" src="../../assets/images/check.svg" alt="Check Icon">
                                    <p class="pl-2 m0 d-inline-block">Printing </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img class="check" src="../../assets/images/check.svg" alt="Check Icon">
                                    <p class="pl-2 m0 d-inline-block">Cutting </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img class="check" src="../../assets/images/check.svg" alt="Check Icon">
                                    <p class="pl-2 m0 d-inline-block">Packaging </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img class="check" src="../../assets/images/check.svg" alt="Check Icon">
                                    <p class="pl-2 m0 d-inline-block">Free Economy Shipping </p>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="detail-box pl-2 pr-2 pt-3 pb-2">
                        <div class="d-flex">
                            <p>&mdash;</p>
                            <p class="ml-2">Eye Catching Premium Quality Cards</p>
                        </div>
                        <div class="d-flex">
                            <p>&mdash;</p>
                            <p class="ml-2">Eye Catching Premium Quality Cards</p>
                        </div>
                        <div class="d-flex">
                            <p>&mdash;</p>
                            <p class="ml-2">Eye Catching Premium Quality Cards</p>
                        </div>
                        <div class="d-flex">
                            <p>&mdash;</p>
                            <p class="ml-2">Eye Catching Premium Quality Cards</p>
                        </div>
                        <div class="d-flex">
                            <p>&mdash;</p>
                            <p class="ml-2">Eye Catching Premium Quality Cards</p>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    </section>
</template>

<script>
    export default {
        name: "PopularProducts"
    }
</script>

<style scoped>
    .popular-products{
        padding: 80px 0;
    }
    .price-qnt, .qty{
        font-family: 'PTSans-Bold', sans-serif;
    }
    .qty{
        font-size: 20px;
    }
    tr:nth-child(odd){
        background-color: #fafafa;
    }
    .ls-1 {
        letter-spacing: 1px;
    }
    p {
        font-family: Poppins-Regular, sans-serif;
    }
    .popular-products > .row{
        margin: 15px!important;
    }
    .pre-title {
        color: #009fe4;
    }
    .product-title{
        font-family: 'Poppins-Bold', sans-serif;
        font-size: 16px;
    }
    .product-box > p{
        position: relative;
    }
    .product-box{
        height: 100%;
        width: 100%;
        border: 1px solid #009fe4;
        border-radius: 8px;
        overflow: hidden;
    }
    .prod-cont{
        padding: 15px;
    }
    .price-box{
        background-color: #009fe4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        height: 130px;
    }
    .trial-box{
        background-color: #0183ce;
        color: white;
    }
    .buy-btn{
        color: white;
        background-color: #009fe4;
        padding: 10px 20px 10px 3.75rem;
        font-size: 22px;
        font-weight: 700;
        text-decoration: none;
    }
    i.fa-caret-down{
        position: absolute;
        color: white;
        transform: translateX(-50%);
        font-size: 40px;
        top: -16px;

    }
    .check {
        height: 15px;
        color: white;
    }
    .detail-box{
        background: #009fe4;
        height: 100%;
    }
    .detail-box p{
        color: white;
        line-height: 22px;
        font-family: Poppins-Medium, sans-serif;
        margin-bottom: 10px;
    }

</style>
