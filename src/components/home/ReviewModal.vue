<template>
    <b-modal id="review" size="lg" centered title="Leave A Review">
        <div class="row">
            <div class="col-md-4 d-flex align-items-center justify-content-center">
                <div class="img-cont text-center">
                    <img @click="$refs.file.click()" ref="preview" class="img-fluid" src="../../assets/images/upload-icon.png" alt="asd">
                    <p class="mt-3">Upload Your Image</p>
                </div>
                <input type="file" @change="handleFileUpload()" ref="file" accept="image/*" class="d-none">
            </div>
            <div class="col-md-8 input-cont">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name Or Company Name:">
                </div>
                <div class="form-group">
                    <textarea name="" class="form-control" placeholder="Write A Review:" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn submit-btn">SUBMIT</button>
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
                image: null
            }
        },
        methods: {
            handleFileUpload(){
                this.image = this.$refs.file.files[0];
                this.$refs.preview.setAttribute("src", URL.createObjectURL(this.image));
            },
            sendReview() {
                let formData = new FormData();
                formData.append('file', this.image);
                axios.post( '/single-file',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){

                }).catch(function(){

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
        height: 150px;
    }
</style>
