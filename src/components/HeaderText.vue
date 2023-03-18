<script setup>
import Stars from "@/components/Stars.vue";
import Divisor from "@/components/Divisor.vue";
</script>

<template>
    <div class="text">
      <h1>Dylan Jennings</h1>
      <h2>Software Developer</h2>
      <a id="twitter" class="fab fa-twitter" rel="noreferrer" href="https://twitter.com/wordlesschunk" target="_blank"
         aria-hidden="true">Twitter</a>
      <a id="github" class="fab fa-github" rel="noreferrer" href="https://github.com/wordlesschunk" target="_blank"
         aria-hidden="true">Github</a>
      <a id="discord-icon" class="fab fa-discord" rel="noreferrer" href="https://discord.gg/K4k6wyh5Mf" target="_blank"
         aria-hidden="true">Discord</a>
    </div>

</template>

<style scoped>
.text {
  position: absolute;
  left: 7%;
  top: 55%;
}

.text h1, #section-0 .text h2 {
  font-weight: 300;
  /*text-shadow: rgba(0, 0, 0, 0.75) -8px 5px;*/
  color: white;
  text-transform: uppercase;
}

.text h1 {
  font-size: 5.1vw;
  line-height: 85%;
}

 .text h2 {
  font-size: 2.2vw;
}

.fab {
  margin-top: 10px;
  text-decoration: none;
  margin-left: 8px;
  font-size: 0;
}

.fab::before {
  font-size: 30px;
}

#github {
  color: #F4CBB2;
}

#twitter {
  color: #1DA1F2;
}

#discord-icon {
  color: #ccc;
}
</style>
