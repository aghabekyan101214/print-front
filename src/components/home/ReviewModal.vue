<template>
    <b-modal id="review" size="lg" centered title="Leave A Review">
        <div class="row">
            <div class="col-md-4 d-flex justify-content-center">
                <div class="img-cont text-center">
                    <img @click="$refs.file.click()" ref="preview" class="img-fluid" src="../../assets/images/upload-icon.png" alt="asd">
                    <p class="mt-3">Upload Your Image</p>
                </div>
                <input type="file" @change="handleFileUpload()" ref="file" accept="image/*" class="d-none">
            </div>
            <div class="col-md-8 input-cont">
                <div class="form-group" v-show="error">
                    <p style="color: red"><strong>{{ error }}</strong></p>
                </div>
                <div class="form-group" v-show="success">
                    <p style="color: #155724"><strong>{{ success }}</strong></p>
                </div>
                <div class="form-group">
                    <input type="text" v-model="name" class="form-control" placeholder="Name Or Company Name:">
                </div>
                <div class="form-group position-relative">
                    <textarea @input="countLen" name="" v-model="text" class="form-control text-area" placeholder="Write A Review:"></textarea>
                    <span ref="count" class="count"> {{ text.length }} / {{ maxLength }}</span>
                </div>
                <div class="form-group">
                    <button ref="submit" v-show="!loading" @click="sendReview" class="btn submit-btn">SUBMIT</button>
                    <img style="position: relative; height: 50px; left: 50%; transform: translateX(-50%)" src="../../assets/images/loading.gif" v-show="loading" alt="loading">
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
    import axios from "axios";

    export default {
        name: "ReviewModal",
        data: () => {
            return {
                image: "",
                name: "",
                text: "",
                error: false,
                success: false,
                loading: false,
                maxLength: 175
            }
        },
        methods: {
            handleFileUpload(){
                this.image = this.$refs.file.files[0];
                this.$refs.preview.setAttribute("src", URL.createObjectURL(this.image));
            },
            countLen() {
                if(this.text.length >= this.maxLength){
                    this.text = this.text.slice(0, this.maxLength);
                    this.$refs.count.style.color = "red";
                } else {
                    this.$refs.count.style.color = "#009fe3";
                }
            },
            sendReview() {
                this.loading = true;
                this.error = false;
                let formData = new FormData();
                formData.append('image', this.image);
                formData.append('name', this.name);
                formData.append('text', this.text);
                axios.post( process.env.VUE_APP_DATA_URL + '/api/leave-review',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then((r) => {
                    this.success = "You Have Successfully Reviewed.";
                    this.name = "";
                    this.text = "";
                    this.image = "";
                }).catch((e) => {
                    if(e.response.status == 422){
                        this.error = e.response.data.message
                    } else {
                        this.error = "Something Went Wrong, Please Try Again Later."
                    }
                }).finally( e => {
                    this.loading = false;
                });
            }
        }
    }
</script>

<style>
    .modal-header{
        background: #009fe3!important;
        text-align: center;
    }
    .modal-title {
        text-align: center;
        color: white;
    }
    #review .input-cont input, #review .input-cont textarea {
        border: 1px solid #009fe3;
    }
    #review .submit-btn {
        background: white;
        color: #009fe3;
        font-weight: 700;
        border: 1px solid #009fe3;
    }
    #review footer {
        display: none;
    }
    #review .img-cont img{
        cursor: pointer;
    }
    #review .close{
        color: white;
    }
    .img-cont img{
        height: 170px;
    }
    .count{
        position: absolute;
        bottom: 0;
        right: 20px;
        font-size: 12px;
        color: #009fe3;
    }
    .text-area{
        height: 115px!important;
    }
</style>
