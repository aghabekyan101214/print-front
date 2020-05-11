<template>
    <div class="get-quote">
        <Breadcrumb/>
        <div class="container">
<!--            <div class="row">-->

<!--                <div class="col-xl-6 col-md-6">-->
<!--                    <label for="pr-p">Step 1: Select A Print Product</label>-->
<!--                    <select @change="changeRoute" v-model="product" class="form-control print-product" id="pr-p">-->
<!--                        <option v-for="product in products" :key="product.id" :value="product.slug">{{ product.name }}</option>-->
<!--                    </select>-->
<!--                </div>-->

<!--            </div>-->

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
                        <b-form-input class="LoginInput" v-model="full_name" placeholder="Full Name*">
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
                        <b-form-input class="LoginInput" v-model="email" placeholder="Email*">
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
                        <b-form-input class="LoginInput" v-model="company_name" placeholder="Company Name">
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
                        <b-form-input class="LoginInput" v-model="phone" placeholder="Phone">
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
                        <b-form-input class="LoginInput" v-model="deliver_to" placeholder="Deliver To">
                        </b-form-input>
                    </b-input-group>

                </div>

                <div class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-0"><b>How May We Contact You</b></p>
                    <div class="group d-flex">
                        <div class="custom-control custom-checkbox">
                            <input type="radio" checked value="0" v-model="contact_method" name="contact-type" class="custom-control-input" id="phone">
                            <label class="custom-control-label" for="phone">Phone</label>
                        </div>
                        <div class="custom-control custom-checkbox ml-2">
                            <input type="radio" name="contact-type" v-model="contact_method" value="1" class="custom-control-input" id="email">
                            <label class="custom-control-label" for="email">Email</label>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row mt-5">

                <div class="col-xl-12 mb-3">
                    <label for="">Step 2: Select Product Options</label>
                </div>

                <div v-for="(form, i) in forms" :key="form.id" class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">{{ form.form.name }}</p>
                    <select @change="chF" :data-form_id="form.form_id" ref="sel" class="form-control print-product" id="stock">
                        <option v-for="val in form.values" :key="val.id" :value="val.id">{{ val.name }}</option>
                    </select>
                </div>

                <div v-if="time.values" class="col-xl-6 col-md-6 mb-3">
                    <p class="mb-1">Production Time</p>
                    <div class="radio-toolbar d-flex">

                        <div v-for="(t, i) in time.values" :key="t.id" class="rad-span">
                            <input type="radio" @change="chF" ref="rad" :id="t.id" v-model="productionTime" :value="t.id">
                            <label class="d-flex align-items-center justify-content-center" :for="t.id">
                                {{ t.name }}
                            </label>
                        </div>

                    </div>
                </div>

            </div>

            <div class="row mt-5">
                <div class="col-xl-5 col-md-5 col-9">
                    <p>
                        <label for="" class="sub">Subtotal (excludes shipping): </label>
                    </p>
                </div>
                <div class="col-xl-3 col-md-3 col-3">
                    <p class="sub">
                        <b v-if="price != 0">$ {{ price }}</b>
                        <b v-else>No Price</b>
                    </p>
                </div>
            </div>

            <div class="row bg-white mt-5">
                <div class="col-xl-2 col-12 col-md-2 center-xs">
                    <div class="img-cont text-center">
                        <img @click="$refs.file.click()" ref="preview" class="img-fluid uplaod-img" src="../assets/images/upload.png" alt="asd">
                        <p class="mt-3 text-center">Upload Your Image</p>
                    </div>
                    <input type="file" @change="handleFileUpload()" ref="file" accept="image/*" class="d-none">
                </div>
                <div class="col-xl-10 col-12 col-md-10 center-xs">
                    <p>Accepted File Format</p>
                    <div class="detail-box pl-3">
                        <p>Bleed: 0.125</p>
                        <p>Resolution: 300 dpi</p>
                        <p>Color Mode: CMYK</p>
                        <p>AI in File Type: PDF, EPS, TIFF & All(created outline)</p>
                        <p>Maximum Upload Size: 10 MB</p>
                    </div>
                </div>
            </div>

            <div class="row bg-white mt-3">
                <div class="col-xl-12 text-center">
                    <button v-if="!loading" class="submit filled btn" @click="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";
    // import {products} from "../data/printProducts"
    import axios from "axios"

    export default {
        name: "Privacy",
        components: {
            Breadcrumb
        },
        data: () => {
            return {
                title: "Get Quote",
                // products: [],
                forms: [],
                product: "",
                data:[],
                productionTime: 0,
                time: {},
                productId: 0,
                countForm: 0,
                price: 0,
                image: [],
                oldImage: "",
                full_name: "",
                company_name: "",
                phone: "",
                email: "",
                comment: "",
                contact_method: "0",
                deliver_to: "",
                combinationId: 0,
                loading: false,

            }
        },
        created: function() {
            this.getForms();
        },
        methods: {
            async getForms(){
              await axios.get(process.env.VUE_APP_DATA_URL + "api/get-form/" + this.$route.params.product).then(r => {
                    if(r.data) {
                        this.countForm = r.data.data.forms.length;
                        this.time = r.data.data.forms.find(e => e.form_id == 10) || {}; // If form id is 10 it is radio button
                        this.forms = r.data.data.forms.filter(e => e.form_id != 10) || [];
                        if(this.forms.length) this.productId = this.forms[0].product_id;
                        this.productionTime = this.time.values[0].id || 0;
                    }
                })
                this.getValues();
            },
            getPrice(){
                if(this.data.length != (this.countForm)){
                    return false;
                }
                let formData = new FormData();
                formData.append('arr', this.data);
                formData.append('productId', this.productId);
                axios.post(process.env.VUE_APP_DATA_URL + "api/get-price", formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(r => {
                    this.price = r.data.price;
                    this.combinationId = r.data.obj.id || 0;
                });
            },
            submit() {

                let err = this.validate();
                if(err) {
                    alert(err);
                    return false;
                }

                this.loading = true;
                let formData = new FormData();
                if(this.image != "") {
                    formData.append('uploaded_files[0]', this.image);
                }
                formData.append('full_name', this.full_name);
                formData.append('company_name', this.company_name);
                formData.append('phone', this.phone);
                formData.append('email', this.email);
                formData.append('deliver_to', this.deliver_to);
                formData.append('combination_id', this.combinationId);
                formData.append('product_id', this.product_id);
                axios.post( process.env.VUE_APP_DATA_URL + '/api/contact',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then( () => {
                    this.full_name = "";
                    this.company_name = "";
                    this.phone = "";
                    this.email = "";
                    this.comment = "";
                    this.image = [];
                    this.$refs.preview.setAttribute("src", this.oldImage);
                    alert("Your Form Has Been Sent Successfully");
                }).catch((e) => {
                    if(e.response.status == 422){
                        alert(e.response.data.message);
                    } else {
                        alert("Something Went Wrong, Please Try Again Later.");
                    }
                }).finally( () => {
                    this.loading = false;
                });

            },
            validate(){
                if(this.full_name == ""){
                    return "Please, Fill in The Full Name Field";
                } else if(this.contact_method == 0 && this.phone == "") {
                    return "Please, Fill in Phone Field";
                } else if(this.contact_method == 1 && this.email == "") {
                    return "Please, Fill in Email Field";
                } else if(this.data.length != (this.countForm)) {
                    return "Please, Select Product Options";
                }
                return false;
            },
            chT(t){
                if(this.time.values) {
                    this.time.values.forEach(e => {
                        let id = e.id;
                        if(this.data.indexOf(id) != -1) {
                            this.data.splice(this.data.indexOf(id), 1);
                        }
                    });
                    this.data.push(Number(t.target.value));
                    this.getPrice();

                }

            },
            chF(e){
                this.data = [];
                for(let i = 0; i < this.forms.length; i++) {
                    if(this.$refs.sel[i].value != "") {
                        this.data.push(this.$refs.sel[i].value);
                    }
                }
                if(this.time.values) {
                    this.time.values.forEach(e => {
                        let id = e.id;
                        if(this.data.indexOf(id) != -1) {
                            this.data.splice(this.data.indexOf(id), 1);
                        }
                    });
                    this.data.push(this.productionTime);

                }
                this.getPrice();
            },
            getValues() {
                for(let i = 0; i < this.forms.length; i++) {
                    this.data.push(this.$refs.sel[i].value);
                }

                if(this.productionTime) this.data.push(this.productionTime);

                this.getPrice();
            },
            changeProduct(product) {
                this.product = product
            },
            changeRoute() {
                this.$router.push(`/print-services/get-quote/${this.product}`);
            },
            handleFileUpload(){
                this.image = this.$refs.file.files[0];
                this.oldImage = this.$refs.preview.getAttribute("src");
                this.$refs.preview.setAttribute("src", URL.createObjectURL(this.image));
            },
        },
        watch: {
            $route(to, from) {
                this.changeProduct(this.$route.params.product);
                this.getForms();
                this.price = 0;
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
        height: 50px;
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
    .uplaod-img{
        cursor: pointer;
    }
    .sub{
        font-size: 18px;
    }
    .img-cont{
        border-radius: 8px;
        border: 1px solid #009fe4;
        overflow: hidden;
    }
    .rad-span{
        margin-right: 10px;
    }
</style>
