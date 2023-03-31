<script setup>
import { RouterView } from 'vue-router'
import HeaderText from "@/components/HeaderText.vue";
import Stars from "@/components/Stars.vue";
import BlankPanel from "@/components/BlankPanel.vue";
import Divider from "@/components/Divider.vue";
</script>

<template>
<!--  Header Components -->
  <stars/>
  <header>
    <HeaderText />
  </header>

  <section>
    <Divider/>
  </section>
<!--  Header Components -->

<!--  Dynamic Views Component -->
  <section>
    <RouterView />
  </section>
<!--  Dynamic Views Component -->

<!--  Footer Components -->
  <section>
    <BlankPanel/>
  </section>

  <footer>
    <p>Copyright &copy; 2023</p>
  </footer>
<!--  Footer Components -->
</template>

<style scoped>
header {
  margin: auto;
  padding: 10%;
}
footer {
  margin: auto;
  padding: 10px;
  text-align: center;
}
</style>