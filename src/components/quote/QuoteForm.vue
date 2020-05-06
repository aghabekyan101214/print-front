<template>
    <section class="service-quote container">
        <div class="row first">

            <div class="col-xl-6 col-md-6 mb-md-0 mb-3">

                <b-input-group>
                    <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../../assets/images/user-icon.png" alt="User Icon">
                            </span>
                    </b-input-group-prepend>
                    <b-form-input class="LoginInput" v-model="full_name" placeholder="Full Name">
                    </b-form-input>
                </b-input-group>

            </div>

            <div class="col-xl-6 col-md-6 mb-md-0 mb-3">

                <b-input-group>
                    <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../../assets/images/company-icon.png" alt="User Icon">
                            </span>
                    </b-input-group-prepend>
                    <b-form-input class="LoginInput" v-model="company_name" placeholder="Company Name">
                    </b-form-input>
                </b-input-group>

            </div>

        </div>

        <div class="form-more-details row justify-content-center">
                <div class="col-lg-12">
                    <p class="decoration">Contact Information</p>
                    <p>What is the best way to contact you if we have any questions about your project?</p>
                    <div class="container1">
                        <div class="radio">
                            <input type="radio" v-model="contact_method" name="radio" id="radio3" class="radio__input" value="1">
                            <label for="radio3" class="radio__label">Phone</label>
                        </div><br>
                        <div class="radio">
                            <input type="radio" v-model="contact_method" name="radio" id="radio4" class="radio__input" value="2">
                            <label for="radio4" class="radio__label">Email</label>
                        </div><br>
                        <div class="radio">
                            <input type="radio" v-model="contact_method" name="radio" id="radio5" class="radio__input" value="3">
                            <label for="radio5" class="radio__label">Phone and Email</label>
                        </div><br>
                    </div>
                </div>
                <div class="col-lg-6 mb-3">
                    <input type="text" class="form-control" v-model="phone" placeholder="Phone number*">
                </div>
                <div class="col-lg-6">
                    <input type="text" class="form-control" v-model="email" placeholder="Email*">
                </div>
        </div>
        <div class="container pl-0 pr-0 textarea-form mb-5">
            <b-input-group>
                <b-input-group-prepend>
                    <span class="input-group-text">
                        <img src="../../assets/images/message-icon.png" alt="User Icon">
                    </span>
                </b-input-group-prepend>
                <b-form-textarea class="LoginInput" v-model="comment" rows="5" placeholder="Describe Yourself Here">
                </b-form-textarea>
            </b-input-group>
        </div>

        <p class="clear">You are able to add more than 1 file by selecting multiple files at once</p>
        <div class="upload-file" @click="$refs.file.click()"> Upload A file
            <input type="file" ref="file" @change="handleFileUpload" class="custom-file-input" multiple>
        </div>

        <b-row>
            <b-col v-for="(file, i) in preview" :key="i">
                <b-img thumbnail fluid :src="file.url" :alt="file.extension" style="height: 100px;"></b-img>
            </b-col>
        </b-row>

        <button class="btn submit" @click="submit" v-if="!loading">Submit</button>

    </section>
</template>

<script>

    import axios from "axios";

    export default {
        name: "QuoteForm",
        data: () => {
          return {
              full_name: "",
              company_name: "",
              phone: "",
              email: "",
              comment: "",
              files: [],
              preview: [],
              loading: false,
              contact_method: 1
          }
        },
        methods: {
            handleFileUpload(){
                this.files = this.$refs.file.files;
                this.preview = [];
                this.files.forEach(e => {
                    let obj = {
                        "url": URL.createObjectURL(e),
                        "extension": e.name.split('.').pop().toUpperCase()
                    }
                    this.preview.push(obj)
                })
            },
            submit() {
                this.loading = true;
                this.error = false;
                let formData = new FormData();
                this.files.forEach((e, i) => {
                    formData.append(`uploaded_files[${i}]`, e);
                });
                formData.append('full_name', this.full_name);
                formData.append('company_name', this.company_name);
                formData.append('phone', this.phone);
                formData.append('email', this.email);
                formData.append('comment', this.comment);
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
                    this.files = [];
                    this.preview = [];

                }).catch((e) => {
                    if(e.response.status == 422){
                        alert(e.response.data.message);
                    } else {
                        alert("Something Went Wrong, Please Try Again Later.");
                    }
                }).finally( () => {
                    this.loading = false;
                });
            }
        }
    }
</script>

<style scoped>
    .form-details{
        display:flex;

    }
    .form-control{
        font-size: 13px;
        border-radius: 8px!important;
        border: 1px solid #009fe4!important;
    }

    .form-details div {
        width: 50%;
        justify-content: space-between;
        margin: 0;
        display: flex;
    }
    .form-details div:first-child{
        margin-right: 30px;
    }
    .form-details div input {
        width: 90%;
        height: 50px;
        border: 1px solid #009fe4;
        padding-left: 15px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .form-more-details {
        border: 1px solid #009fe4;
        border-radius: 10px;
        margin: 30px 0 !important;
        padding: 20px 0;
        font-size: 14px;
    }
    .generic-input{
        width:100%;
        height:50px;
        border:1px solid #009fe4;
        border-radius:10px;
        padding-left:15px;
    }
    .select-blue {
        margin: 10px 3px;
        height: 50px;
        padding: 6px 0;
    }
    .select-blue:after {
        top: 15px;
    }
    .form-control:focus {
        box-shadow: none;
    }
    .label {
        width: 80px;
        height: 50px;
        line-height: 70px;
        font-size: 14px;
    }
    .form-more-details .form-control {
        padding: 2px 8px;
        font-size: 14px;
        color: #000;
    }
    .col-md-m{
        width:85px;
    }
    .col-sm-m{
        width:75px;
    }
    .col-lg-m{
        width:400px;
    }
    .nopadding{
        padding:0;
    }
    .form-textarea {
        position:relative;
        padding:0;
    }
    .first .input-group-text img{
        height: 18px;
    }
    .form-textarea textarea{
        width: 100%;
        height: 200px;
        border: none
    }
    .form-textarea textarea:focus{
        outline:none;
    }
    .service-quote {
        overflow:hidden;
    }
    .clear{
        clear:both;
    }



    .container1 {
        width: 100%;
        display: flex;
    }

    .title {
        display: block;
        margin: 0 0 20px;
        font-size: 24px;
        text-transform: uppercase;
    }

    .radio {
        display: inline-block;
        position: relative;
        margin: 0 0 10px;
        font-size: 16px;
        line-height: 24px;
    }
    .radio__input {
        position: absolute;
        top: 4px;
        left: 0;
        width: 36px;
        height: 20px;
        opacity: 0;
        z-index: 0;
    }
    .radio__label {
        display: block;
        padding: 0 0 0 17px;
        cursor: pointer;
        margin-right: 13px;
        font-size: 14px;
        line-height: 20px;
    }
    .radio__label:before {
        content: '';
        position: absolute;
        top: 4px;
        left: 0;
        width: 12px;
        height: 12px;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.54);
        border-radius: 14px;
        z-index: 1;
        transition: border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .radio__label:after {
        content: '';
        position: absolute;
        top: 7px;
        left: 3px;
        width: 6px;
        height: 6px;
        background-color: #000;
        border-radius: 50%;
        z-index: 2;
        transform: scale(0, 0);
        transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .radio__input:checked + .radio__label:before {
        border-color: #000;
    }
    .radio__input:checked + .radio__label:after {
        transform: scale(1, 1);
    }
    .decoration {
        font-family: 'PTSans-Bold', sans-serif;
        font-size: 16px;
        margin-bottom: 6px;
        letter-spacing: 0.5px;
    }
    .form-more-details p{
        margin:0;
    }
    .generic-input::placeholder{
        color:#000;
    }

    .custom-file-input::-webkit-file-upload-button {
        visibility: hidden;
    }

    .upload-file{
        background: #009fe4;
        width: 400px;
        border-radius: 10px;
        text-align: center;
        line-height: 50px;
        height: 50px;
        margin-bottom: 15px;
        color: #fff;
        font-weight: bold;
        text-transform: uppercase;
        position:relative;
        font-size: 12px;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .custom-file-input {
        top: -43px;
        cursor: pointer;
        display: none;
    }
    .validate-form [type=submit]{
        margin-bottom: 50px;
        background: #009fe4;
        border: none;
        width: 153px;
        height: 50px;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 12px;
        font-size: 12px;
        letter-spacing: 1px;
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
    .input-group-prepend + .form-control{
        border-bottom-left-radius: 0!important;
        border-top-left-radius: 0!important;
    }
    p{
        font-size: 12px;
    }
 @media (max-width: 480px) {
     .upload-file{
         width: 100%;
     }
 }
    .submit{
        background: #009fe4;
        border: none;
        width: 153px;
        height: 50px;
        border-radius: 10px;
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 12px;
        font-size: 12px;
        letter-spacing: 1px;
    }
</style>
