<template>
    <section class="menu">
        <ul class="container">
            <li><i class="fa fa-caret-right"/>
                <router-link to="/">Home /</router-link>
            </li>
            <li>
                <p class="text-capitalize">{{ endpoint }}</p>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Breadcrumb",
        props:["endpoint"]
    }
</script>

<style scoped>
    .fa-caret-right{
        color: #009fe4;
    }
    .menu{
        background: #fafafa;
        height: 44px;
        margin-bottom: 40px;
    }
</style>
