<template>
    <div class="special-deals">
        <breadcrumb :endpoint="title"/>
        <div class="container text-center pb-5">
            <div class="row">
                <div class="col-md-12">
                    <h2>Special Deals</h2>
                </div>
                <div class="col-md-6 pb-3">
                    <img class="img-fluid" src="../assets/images/special/open-house-min.jpg" alt="">
                </div>
                <div class="col-md-6 pb-3">
                    <img class="img-fluid" src="../assets/images/special/t-shirt-min.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Breadcrumb from "../components/Breadcrumb";


    export default {
        data() {
            return {
                title: "Special Deals",

            }
        },
        name: "BusinessServiceDetail",
        components: {
            Breadcrumb,
        },
        watch:{
            $route (to, from){
                this.getTitle();
            }
        }
    }
</script>

<style scoped>
    .gallery-top {
        height: 80%!important;
        width: 100%;
    }
    .title{
        text-transform: capitalize;
    }
    .gallery-thumbs {
        height: 20%!important;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
        width: 100%;
        height: 100px;
    }

</style>
