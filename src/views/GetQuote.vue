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
                    <p class="mb-1">Step 1: Select A Print Product*</p>
                    <select class="form-control print-product" id="stock">
                        <option value="0">100# Dull Cover</option>
                        <option value="">Another Product</option>
                        <option value="">One more Product</option>
                    </select>
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
                    <p class="mb-1">Colors</p>
                    <select class="form-control print-product" id="colors">
                        <option value="">4/1 Full Color Front/Black</option>
                        <option value="">White</option>
                        <option value="">Green</option>
                        <option value="">Yellow</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Finishing</p>
                    <select class="form-control print-product" id="finishing">
                        <option value="">4/1 Full Color Front/Black</option>
                        <option value="">White</option>
                        <option value="">Green</option>
                        <option value="">Yellow</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Quantity</p>
                    <select class="form-control print-product" id="quantity">
                        <option value="">4/1 Full Color Front/Black</option>
                        <option value="">10</option>
                        <option value="">100</option>
                        <option value="">100y</option>
                    </select>
                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Production Time</p>
                    <select class="form-control print-product" id="duration">
                        <option value="">13/11/2020</option>
                        <option value="">15/11/2020</option>
                        <option value="">17/11/2020</option>
                        <option value="">19/11/2020</option>
                    </select>
                </div>

            </div>

            <div class="row bg-white mt-3">
                <div class="col-xl-3 col-md-3">
                    <p>
                        <label for="">Price</label> <b>150$</b>
                    </p>
                </div>
            </div>

            <div class="row bg-white mt-3">
                <div class="col-xl-12">
                    <button class="submit filled btn">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";
    import products from "../data/printProducts"

    export default {
        name: "Privacy",
        components: {
            Breadcrumb
        },
        data: () => {
            return {
                title: "Get Quote",
                products,
                product: "",
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
                this.$router.push(`/get-quote/${this.product}`);
            }
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
</style>
