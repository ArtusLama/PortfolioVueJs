<script setup>
import { RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
    <div class="NavbarAndView">
        <NavBar/>
        <RouterView/>
    </div>
    <Footer/>
</template>

<style scoped>

    .NavbarAndView {
        min-height: 100vh;
    }

</style>
