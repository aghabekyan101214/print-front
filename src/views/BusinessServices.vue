<template>
    <div class="business-services">
        <Breadcrumb endpoint="Business Services" />
        <section class="services-banner container">
            <div class="row services-banner-img">
                <div class="col-lg-12 padding0">
                    <img src="../assets/images/services-bg.png" alt="banner" >
                </div>
            </div>
            <div class="select-item">
                <label>Sort by : </label>
                <div class="select">
                    <select name="slct" id="slct">
                        <option selected disabled>Select</option>
                        <option value="1">item1</option>
                        <option value="2">item1</option>
                        <option value="3">item1</option>
                    </select>
                </div>
            </div>
            <div class="services-panel row">
                <div v-for="service in services" :key="service.slug" @click="goTo(`${'/business-service/' + service.slug}`)" class="services-box col-lg-4">
                    <p>{{ service.title }} <i class="fa fa-sort-down"/></p>
                    <i class="fa fa-sort-down img-icon"/>
                    <img :src="service.image" alt="banner" >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";
    import axios from "axios";

    export default {
        name: "BusinessServices",
        data: () => {
            return {
                services: []
            }
        },
        components: {
            Breadcrumb
        },
        methods: {
            goTo(url){
                this.$router.push(url)
            }
        },
        created() {
            axios.get(process.env.VUE_APP_DATA_URL + "api/get-business-services").then(r => {
                if(r.data) {
                    this.services = r.data;
                }
            })
        }
    }
</script>

<style scoped>
    .services-banner {
        margin: 0 auto 80px;
        clear: both;
    }
    .services-banner-img img{
        width:100%;
    }
    .services-panel {
        display:flex;
    }
    .services-panel img{
        width:100%;
    }
    .services-panel p{
        background: #009fe4;
        height: 60px;
        text-align: center;
        line-height: 60px;
        position:relative;
        margin:0;
        color: #fff;
        z-index: 5;
        transition: .5s;
    }
    .services-panel p .fa{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 47px auto 0;
        color: #009fe4;
        font-size: 23px;
    }
    .img-icon.fa {
        position: relative;
        top: 10px;
        margin: auto;
        display: block;
        bottom: 0;
        font-size: 23px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
    }

    /* Reset Select */
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        border:1px solid #1c1b1a;
        background-image: none;
    }
    /* Remove IE arrow */
    select::-ms-expand {
        display: none;
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
    select {
        flex: 1;
        padding: 0 15px;
        cursor: pointer;
        font-style: italic;
    }
    /* Arrow */
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
    .services-box:hover  p{
        cursor: pointer;
        transform: translateY(23px);
    }
    .services-box{
        cursor: pointer;
    }
</style>
