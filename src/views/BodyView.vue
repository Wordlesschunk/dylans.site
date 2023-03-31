<script setup>
import BlankPanel from "@/components/BlankPanel.vue";
import ShowcaseView from "@/views/ShowcaseView.vue";
</script>

<template>
  <main>

<!--    here is where we determine what view to show dependent on screensize for now-->
    <section class="section-3">
      <ShowcaseView/>
    </section>

    <section class="section-4">
      <BlankPanel/>
    </section>
  </main>
</template>

<style scoped>

</style>