<template>
    <div class="get-quote">
        <Breadcrumb/>
        <div class="container">
            <div class="row">

                <div class="col-xl-6 col-md-6">
                    <label for="pr-p">Step 1: Select A Print Product</label>
                    <select @change="changeRoute" v-model="product" class="form-control print-product" id="pr-p">
                        <option v-for="product in products" :key="product" :value="product.toLocaleLowerCase().replace(' ', '-')">{{ product}}</option>
                    </select>
                </div>

            </div>

            <div class="row pt-5">
                <div class="col-xl-12">
                    <p class="mb-1"><label for="">How Can We Reach You</label> ( Your Contact Information Will Only Be Used For This Quote )</p>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-6 col-md-6 mb-3">

                    <b-input-group>
                        <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../assets/images/quote/users.png" alt="User Icon">
                            </span>
                        </b-input-group-prepend>
                        <b-form-input class="LoginInput" placeholder="Full Name*">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">

                    <b-input-group>
                        <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../assets/images/quote/email.png" alt="Email Icon">
                            </span>
                        </b-input-group-prepend>
                        <b-form-input class="LoginInput" placeholder="Email*">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">

                    <b-input-group>
                        <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../assets/images/quote/portfolio.png" alt="Company Icon">
                            </span>
                        </b-input-group-prepend>
                        <b-form-input class="LoginInput" placeholder="Company Name">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">

                    <b-input-group>
                        <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../assets/images/quote/phone.png" alt="Phone Icon">
                            </span>
                        </b-input-group-prepend>
                        <b-form-input class="LoginInput" placeholder="Phone">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">

                    <b-input-group>
                        <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../assets/images/quote/globe.png" alt="Deliver Icon">
                            </span>
                        </b-input-group-prepend>
                        <b-form-input class="LoginInput" placeholder="Deliver To">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-0"><b>How May We Contact You</b></p>
                    <div class="group d-flex">
                        <div class="custom-control custom-checkbox">
                            <input type="radio" checked name="contact-type" class="custom-control-input" id="phone">
                            <label class="custom-control-label" for="phone">Phone</label>
                        </div>
                        <div class="custom-control custom-checkbox ml-2">
                            <input type="radio" name="contact-type" class="custom-control-input" id="email">
                            <label class="custom-control-label" for="email">Email</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row mt-5">

                <div class="col-xl-12 mb-3">
                    <label for="">Step 2: Select Product Options</label>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Size*</p>
                    <select class="form-control print-product" id="size">
                        <option value="">1300*100</option>
                        <option value="">1300*1300</option>
                        <option value="">1600*1600</option>
                        <option value="">2100*1700</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Shape</p>
                    <select class="form-control print-product" id="quantity">
                        <option value="">Shape1</option>
                        <option value="">Shape2</option>
                        <option value="">Shape3</option>
                        <option value="">Shape4</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Print Side Type*</p>
                    <select class="form-control print-product" id="stock">
                        <option value="0">Side1</option>
                        <option value="0">Side2</option>
                        <option value="0">Side3</option>
                        <option value="0">Side4</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Thickness</p>
                    <select class="form-control print-product" id="colors">
                        <option value="">2</option>
                        <option value="">4</option>
                        <option value="">6</option>
                        <option value="">8</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Material Type</p>
                    <select class="form-control print-product" id="finishing">
                        <option value="">Type1</option>
                        <option value="">Type2</option>
                        <option value="">Type3</option>
                        <option value="">Type4</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Finishing</p>
                    <select class="form-control print-product" id="duration">
                        <option value="">100</option>
                        <option value="">1000</option>
                        <option value="">10000</option>
                        <option value="">100000</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Quantity</p>
                    <select class="form-control print-product" id="duration">
                        <option value="">100</option>
                        <option value="">1000</option>
                        <option value="">10000</option>
                        <option value="">100000</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Production Time</p>
                    <div class="radio-toolbar">
                        <input type="radio" id="radioApple" name="radioFruit" value="apple" checked>
                        <label for="radioApple">
                            Regular
                            <br>
                            <small>4-6 Business Days</small>
                        </label>

                        <input type="radio" id="radioBanana" name="radioFruit" value="banana">
                        <label for="radioBanana" class="text-center ml-1">
                            Rush
                            <br>
                            <small>Not Available</small>
                        </label>

                    </div>
                </div>

            </div>

            <div class="row bg-white mt-5">
                <div class="col-xl-3 col-md-3 col-9">
                    <p>
                        <label for="">Subtotal (excludes shipping): </label>
                    </p>
                </div>
                <div class="col-xl-3 col-md-3 col-3">
                    <p>
                        <b>$150</b>
                    </p>
                </div>
            </div>

            <div class="row bg-white mt-3">
                <div class="col-xl-12 center-xs">
                    <button class="submit filled btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";
    import {signage} from "../data/printProducts"

    export default {
        name: "Get Quote Signage",
        components: {
            Breadcrumb
        },
        data: () => {
            return {
                title: "Get Quote",
                products: signage,
                product: "",
                image: ""
            }
        },
        created: function() {
          this.changeProduct(this.$route.params.product);
        },
        methods: {
            changeProduct(product) {
                this.product = product
            },
            changeRoute() {
                this.$router.push(`/banners/get-quote/${this.product}`);
            },
            handleFileUpload(){
                this.image = this.$refs.file.files[0];
                this.$refs.preview.setAttribute("src", URL.createObjectURL(this.image));
            },
        },
        watch: {
            $route(to, from) {
                this.changeProduct(this.$route.params.product);
            }
        }
    }
</script>

<style scoped>
    .get-quote{
        padding-bottom: 80px;
    }
    label{
        color: #009fe4;
        font-weight: 600;
        font-size: 13px;
    }
    .form-control{
        font-size: 13px;
        border-radius: 8px!important;
        border: 1px solid #009fe4!important;
    }
    .input-group-prepend + .form-control{
        border-bottom-left-radius: 0!important;
        border-top-left-radius: 0!important;
    }
    p{
        font-size: 12px;
    }
    .input-group-text{
        background-color: #009fe4!important;
        border: 1px solid #009fe4!important;
        border-bottom-left-radius: 8px!important;
        border-top-left-radius: 8px!important;
    }
    .input-group-text img{
        height: 18px;
    }
    .row{
        background-color: #fafafa;
    }
    .custom-control-label{
        color: black;
        font-weight: 300;
        font-size: 11px;
    }
    .custom-control{
        display: flex;
        align-items: center;
    }
    .submit{
        border: 1px solid #009fe4;
        font-size: 12px;
        color: #009fe4;
        font-weight: 600;
        margin-top: 22px;
        width: 110px;
    }
    button.filled{
        background-color: #009fe4;
        color: white;
        margin-top: 0;
    }
    .radio-toolbar input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
    .radio-toolbar label {
        display: inline-block;
        cursor: pointer;
        padding: 7px 0;
        text-align: center;
        width: 130px;
        font-family: Poppins-Regular, sans-serif;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid #009fe4;
        border-radius: 4px;
        color: black;
        line-height: 15px;
    }
    .radio-toolbar input[type="radio"]:checked + label {
        background-color: #009fe4;
        color: white;
    }
    @media (max-width: 480px) {
        .center-xs{
            text-align: center;
        }
    }
    .img-cont img{
        height: 150px;
    }
    .submit.upload{
        width: auto;
    }
</style>
