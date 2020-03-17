<template>
    <div class="privacy">
        <breadcrumb :endpoint="title"/>
        <div class="container">
            <p>This privacy policy provides information about the personal information that we collect, and the ways in which we use that personal information.</p>
            <p class="mb-1"><b>What information do we collect?</b></p>
            <p>We collect information from you when you fill out your personal information on <router-link to="/">Caliprintworks.com </router-link> site.
                When you purchase on our site, as appropriate, you may be asked to enter your name, email address, mailing address, phone number or credit card information. All mentioned information’s are used to complete the purchase transaction.
            </p>
            <p class="mb-1"><b>What do we use your information for?</b></p>
            <p class="mb-0">Any of the information we collect from you may be used in one of the following ways:</p>
            <ul>
                <li>Your information helps us to better respond to your individual needs.</li>
                <li>We continually strive to improve our website offerings based on the information and feedbacks we receive from you.</li>
                <li>Your information helps us to more effectively respond to your customer service requests and support needs.</li>
                <li>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product service requested.</li>
                <li>The email address you provide for order processing will only be used to send you information and updates pertaining to your order.</li>
            </ul>
            <p class="mb-1"><b>How do we protect your information?</b></p>
            <p>We implement a variety of security measures to maintain safety of your personal information when you place an order.
                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via secure socket layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
            </p>
            <p class="mb-1"><b>Do we use cookies?</b></p>
            <p>Cookies are a feature of web browser software that allows web servers to recognize the computer or laptop used to access a website.. Cookies can remember what information a user accesses on our webpage to simplify subsequent interactions or to use the information to streamline the user’s transactions.
                This makes it easier for a user to move from one page to another and to complete his/her transactions over the Internet. Cookies should make your online experience easier and more personalized.
            </p>
            <p class="mb-1"><b>Do we disclose any information to outside parties?</b></p>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business. Or servicing you, caliprintworks will not share that information with third parties without your permission.</p>
            <p class="mb-1"><b>Third party links</b></p>
            <p>We do not include or offer third party products or services on our website.</p>
            <p class="mb-1"><b>Children’s online privacy protection</b></p>
            <p>We do not collect any information from anyone under 13 years of age. <router-link to="/">Caliprintworks.com </router-link> products and services are all directed to people who are at least 13 years old or older. User’s under the age of 13 must ask for assistance of a parent or guardian before they use, visit or fill out any information on our website.</p>
            <p class="mb-1"><b>Online privacy policy only</b></p>
            <p>This online privacy policy applies only to information collected through our website and not to information collected offline.</p>
            <p class="mb-1"><b>Terms and conditions</b></p>
            <p>Please also visit our <router-link to="terms-and-conditions">terms and conditions</router-link> page establishing the use, disclaimers, and limitations of liability governing the use of caliprintworks website.</p>
            <p class="mb-1"><b>Your consent</b></p>
            <p>By using our site, you consent to our websites privacy policy.</p>
            <p class="mb-1"><b>Changes to our privacy policy</b></p>
            <p>If we decide to change our privacy policy, we will update the privacy policy modification date below.
                This policy was last modified on 02/28/2020
            </p>
            <p class="mb-1"><b>Contacting us</b></p>
            <p>Caliprintworks welcomes your comments regarding this statement of privacy. If you believe that caliprintworks has not adhered to this statement, please <router-link to="contact">contact us</router-link> at order@caliprintworks.com we will
                Use commercially reasonable efforts to promptly determine and remedy the problem.
            </p>
        </div>
    </div>
</template>

<script>
    import Breadcrumb from "../components/Breadcrumb";

    export default {
        name: "Privacy",
        components: {
            Breadcrumb
        },
        data: () => {
            return {
                title: "Privacy Policy"
            }
        }
    }
</script>

<style scoped>
    ul li{
        list-style-type: none;
    }
    li:before {
        content: "\f0da"; /* FontAwesome Unicode */
        font-family: FontAwesome;
        display: inline-block;
        /*margin-left: -1.3em; !* same as padding-left set on li *!*/
        width: 1.3em; /* same as padding-left set on li */
        color: #009fe4;
    }
    ul{
        padding-left: 15px;
    }
    a{
        color: #009fe4;
    }
    .privacy{
        padding-bottom: 75px;
    }
</style>
