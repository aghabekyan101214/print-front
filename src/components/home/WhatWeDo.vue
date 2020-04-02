<template>
    <section class="whatwedo container text-center">
        <h2 class="title text-center">
            What <span class="blue">we do</span>
        </h2>
        <p class="decoration text-center">
            We love what we do. We do what we love. Nothing prints until you’re 100% satisfied!
        </p>
        <div class="whatwedo-inner">
            <div class="mb-5 hover">
                <img src="../../assets/images/free-file.png" alt="File Icon">
                <h2>Free File Review</h2>
                <p>
                    We ensure your designs and materials are in top shape before they hit the press.
                </p>
            </div>
            <div class="mb-5 hover">
                <img src="../../assets/images/quality-res.png" alt="Badge Icon">
                <h2>Quality Results</h2>
                <p>
                    We are committed to providing both quality of products and customer service.
                </p>
            </div>
            <div class="mb-5 hover">
                <img src="../../assets/images/mailing.png" alt="Envelope Icon">
                <h2>Mailing And Posting</h2>
                <p>
                    Allow us to lead your marketing campaign print-related projects to success.
                </p>
            </div>
            <div class="mb-5 hover">
                <img src="../../assets/images/custom.png" alt="T-shirt Icon">
                <h2>Apparel Branding</h2>
                <p>
                    Our prints lasts the lifetime of the garment with no cracking, peeling or fading.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "WhatWeDo"
    }
</script>

<style scoped>
    .whatwedo-inner{
        display: flex;
        text-align: center;
        justify-content: space-between;
    }
    .whatwedo {
        margin-top:50px;
    }
    .whatwedo-inner h2{
        font-size:20px;
        margin-top:10px;
        text-transform:uppercase;
    }
    .whatwedo-inner p{
        width: 76%;
        text-align: center;
        display: block;
        margin: 0 auto;
    }
    @media only screen and (max-width: 600px) {
        .whatwedo-inner {
            display: block;
        }
    }
    .hover{
        transition: .3s;
        padding: 10px 0;
    }
    .hover:hover{
        background-color: #e2e2e2;
    }
</style>
