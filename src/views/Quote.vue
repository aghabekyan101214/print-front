<template>
    <div class="quote">
        <Breadcrumb endpoint="Quote"/>
        <QuoteForm/>
    </div>
</template>

<script>

    import Breadcrumb from "../components/Breadcrumb";
    import QuoteForm from "../components/quote/QuoteForm";
    export default {
        name: "Quote",
        components: {QuoteForm, Breadcrumb}
    }
</script>

<style scoped>
</style>
