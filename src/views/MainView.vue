<script setup>

import HeaderText from "@/components/HeaderText.vue";
import Divisor from "@/components/Divisor.vue";
import Stars from "@/components/Stars.vue";
import BlankPanel from "@/components/BlankPanel.vue";
import PortfolioNewNew from "@/components/PortfolioNewNew.vue";
import Showcase from "@/components/Showcase.vue";

</script>

<template>
  <main>



    <section class="section-2">
<!--      <Portfolio/>-->
      
      <PortfolioNewNew/>
    </section>

    <BlankPanel/>

<!--    <section class="section-2">-->
<!--      <Portfolio/>-->
<!--    </section>-->


    <footer>
      <p>Copyright &copy; 2023</p>
    </footer>

  </main>

</template>


<style>


header {
  /*border: 3px solid deeppink;*/
  margin: auto;
  padding: 10%;
}

.section-1 {
  /*border: 3px solid red;*/
}

.section-2 {
  /*border: 3px solid blue;*/
}

footer {
  margin: auto;
  padding: 10px;
  text-align: center;
}


</style>