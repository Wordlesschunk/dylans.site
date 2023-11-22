<template>
  <div class="header-text">
    <h1>Dylan Jennings</h1>
    <h2>Software Developer</h2>
  </div>

  <div class="icons">
    <a id="github" class="fab fa-github" href="https://github.com/wordlesschunk">Github</a>
  </div>

</template>
<style scoped>
.header-text {
  margin-bottom: 20px;
}

.header-text h1 {
  font-weight: 300;
  font-size: 5.1vw;
  line-height: 85%;
  color: white;
  text-transform: uppercase;
}

.header-text h2 {
  font-size: 2.2vw;
}

@media screen and (max-width: 600px) {
  .header-text h1 {
    font-size: 8.1vw;
  }

  .header-text h2 {
    font-size: 4.2vw;
  }
}

.icons {
  display: block;
  margin-top: -26px;
  margin-bottom: 10px;
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
</style>
<script setup>
</script>