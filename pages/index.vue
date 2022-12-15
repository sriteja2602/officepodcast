<script setup>
import "animate.css";
import Home from '../components/Home.vue'
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
</script>

<template>
  <div class="app">
    <Header/>
    <Home/>
    <Footer/>
  </div>
</template>
<style>
.app{
  font-family: 'Lato', sans-serif;
}
</style>