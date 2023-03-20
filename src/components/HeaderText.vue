<template>
    <div class="header-text">
      <h1>Dylan Jennings</h1>
      <h2>Software Developer</h2>
      <a id="twitter" class="fab fa-twitter" href="https://twitter.com/wordlesschunk">Twitter</a>
      <a id="github" class="fab fa-github" href="https://github.com/wordlesschunk">Github</a>
      <a id="discord-icon" class="fab fa-discord" href="https://discord.gg/K4k6wyh5Mf">Discord</a>
    </div>
</template>

<style scoped>
.header-text {
  position: absolute;
  left: 7%;
  top: 55%;
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