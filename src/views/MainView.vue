<script setup>

import HeaderText from "@/components/HeaderText.vue";
import Divisor from "@/components/Divisor.vue";
import {ParticlesComponent} from "vue3-particles";
import Tst from "@/components/tst.vue";
import Stars from "@/components/Stars.vue";
import BlankPanel from "@/components/BlankPanel.vue";
import Portfolio from "@/components/Portfolio.vue";
import PortfolioNew from "@/components/PortfolioNew.vue";
import PortfolioNewNew from "@/components/PortfolioNewNew.vue";

</script>

<template>
  <main>

    <stars/>

    <header>
      <HeaderText />
    </header>

    <section class="section-1">
      <Divisor />
    </section>

    <section class="section-2">
      <PortfolioNewNew/>
    </section>

    <BlankPanel/>

<!--    <section class="section-2">-->
<!--      <Portfolio/>-->
<!--    </section>-->


    <footer>
      <p>Copyright © 2022 <span>DBMJ</span></p>
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
  text-align: center;
  height: 10vh;
  background-color: #212121;
}










.posts {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  -moz-align-items: -moz-stretch;
  -webkit-align-items: -webkit-stretch;
  -ms-align-items: -ms-stretch;
  align-items: stretch;
}


.wrapper {
  padding: 4em 0 2em 0;
  position: relative;
}

.wrapper>.inner {
  margin: 0 auto;
  max-width: 90em;
  width: 90%;
}

.wrapper+.wrapper {
  border-top: solid 1px #e6e6e6;
}

.wrapper.style2 {
  background-color: #121212;
  color: #444;
  border-top: 0;
}

.wrapper.style2 textarea {
  color: #444;
}

.wrapper.style2 a {
  color: #444;
}

.wrapper.style2 b {
  color: #444;
}

.wrapper.style2 h1,
.wrapper.style2 h2,
.wrapper.style2 h3,
.wrapper.style2 h4,
.wrapper.style2 h5,
.wrapper.style2 h6 {
  color: #444;
}

.wrapper.style2 hr {
  border-bottom-color: #e6e6e6;
}

.wrapper.style2 textarea {
  -moz-transition: border-color 0.2s ease-in-out;
  -webkit-transition: border-color 0.2s ease-in-out;
  -ms-transition: border-color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out;
  border-color: #e6e6e6;
}

.wrapper.style2 textarea:focus {
  border-color: #444;
}


.wrapper.style2 ul.alt li {
  border-top-color: #e6e6e6;
}

.wrapper.style2 .post .content {
  background-color: #fff;
  border: 0;
}

.wrapper.style2+.wrapper {
  border-top: 0;
}

@media screen and (max-width: 1280px) {
  .wrapper {
    padding: 3em 0 1em 0;
  }

  .wrapper>.inner {
    width: 100%;
    padding: 0 3em;
  }
}

@media screen and (max-width: 980px) {
  .wrapper>.inner>* {
    width: 100%;
    padding-left: 0 !important;
  }
}

@media screen and (max-width: 736px) {
  .wrapper {
    padding: 2.5em 0 0.5em 0;
  }

  .wrapper>.inner {
    padding: 0 1.5em;
  }
}
</style>