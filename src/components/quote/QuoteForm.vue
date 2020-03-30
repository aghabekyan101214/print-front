<template>
    <section class="service-quote container">
        <div class="row first">

            <div class="col-xl-6 col-md-6 mb-3">

                <b-input-group>
                    <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../../assets/images/user-icon.png" alt="User Icon">
                            </span>
                    </b-input-group-prepend>
                    <b-form-input class="LoginInput" placeholder="Full Name">
                    </b-form-input>
                </b-input-group>

            </div>

            <div class="col-xl-6 col-md-6 mb-3">

                <b-input-group>
                    <b-input-group-prepend>
                            <span class="input-group-text">
                                <img src="../../assets/images/company-icon.png" alt="User Icon">
                            </span>
                    </b-input-group-prepend>
                    <b-form-input class="LoginInput" placeholder="Company Name">
                    </b-form-input>
                </b-input-group>

            </div>

        </div>

        <div class="form-more-details row">
            <div class="col-lg-4">
                <p class="decoration">Shipping Estimate</p>
                <p>Enter Shipping address or zip code to get an estimate for taxes and shipping with your quote.</p>
                </br>
                </br>
                <input type="text" class="form-control">
            </div>
            <div class="col-lg-4">
                <p class="decoration">Project Deadline Estimate</p>
                <p>Do you have a due date for this project?*</p>
                <div class="container1">
                    <div class="radio">
                        <input type="radio" name="radio" id="radio1" class="radio__input" checked>
                        <label for="radio1" class="radio__label">No</label>
                    </div><br>
                    <div class="radio">
                        <input type="radio" name="radio" id="radio2" class="radio__input">
                        <label for="radio2" class="radio__label">Yes</label>
                    </div><br>
                </div>
                <div class="row m0">
                    <label class="label">
                        Due Date*
                    </label>
                    <div class="select-blue col-md-m">
                        <select class="form-control" id="sel1">
                            <option>Month</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div class="select-blue col-sm-m">
                        <select class="form-control" id="sel1">
                            <option>Day</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div class="select-blue col-sm-m">
                        <select class="form-control" id="sel1">
                            <option>Year</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <p class="decoration">Contact Information</p>
                <p>What is the best way to contact you if we have any questions about your project?</p>
                <div class="container1">
                    <div class="radio">
                        <input type="radio" name="radio" id="radio3" class="radio__input" checked>
                        <label for="radio3" class="radio__label">Phone</label>
                    </div><br>
                    <div class="radio">
                        <input type="radio" name="radio" id="radio4" class="radio__input">
                        <label for="radio4" class="radio__label">Email</label>
                    </div><br>
                    <div class="radio">
                        <input type="radio" name="radio" id="radio5" class="radio__input">
                        <label for="radio5" class="radio__label">Phone and Email</label>
                    </div><br>
                </div>
                <div><input type="text" class="form-control" placeholder="Phone number*"></div>
                </br>
                <div><input type="text" class="form-control" placeholder="Email*"></div>
            </div>
        </div>
        <div class="container pl-0 pr-0 textarea-form">
            <b-input-group>
                <b-input-group-prepend>
                    <span class="input-group-text">
                        <img src="../../assets/images/message-icon.png" alt="User Icon">
                    </span>
                </b-input-group-prepend>
                <b-form-textarea class="LoginInput" rows="5" placeholder="Describe Yourself Here">
                </b-form-textarea>
            </b-input-group>
        </div>
        <div class="select-blue col-lg-m pull-left">
            <select class="form-control" id="sel1">
                <option>Which of our service center is closest to you?</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <p class="clear">You are able to add more than 1 file by selecting multiple files at once</p>
        <div class="upload-file "> Upload A file<input type="file" class="custom-file-input" ></div>

        <form action="" method="post" class="validate-form">
            <vue-recaptcha :loadRecaptchaScript="true" sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ">
            </vue-recaptcha>
<!--            <div class="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>-->
            <input type="submit" value="Submit" class="fb9" />

        </form>

    </section>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha';
    export default {
        name: "QuoteForm",
        components: {
            VueRecaptcha
        },

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
        padding: 40px 0;
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
    .custom-file-input::before {
        content: 'Select some files';
        display: inline-block;
        background: linear-gradient(top, #009fe4, #009fe4);
        border: 1px solid #999;
        border-radius: 3px;
        padding: 5px 8px;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
        text-shadow: 1px 1px #fff;
        font-weight: 700;
        font-size: 10pt;
    }
    .custom-file-input:hover::before {
        border-color: black;
    }
    .custom-file-input:active::before {
        background: -webkit-linear-gradient(top, #009fe4, #009fe4);
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
    }

    .custom-file-input {
        top: -43px;
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
</style>
