<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderText from "@/components/HeaderText.vue";
import Stars from "@/components/Stars.vue";
import Divisor from "@/components/Divisor.vue";

</script>

<template>


  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>


  <stars/>

  <header>
    <HeaderText />
  </header>

  <section class="section-1">
    <Divisor />
  </section>


    <RouterView />
</template>

<style scoped>

</style>
