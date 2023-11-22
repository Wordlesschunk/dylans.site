<template>
  <div class="column">
    <div class="ItemCard">
      <figure class="ItemCard__thumb">
        <img :src="imageSrc" height="350" width="510" alt="">
        <span class="shadow cover"></span>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "showcaseItem",
  props: [
      'imageSrc',
  ]
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
figure {
  margin: 0;
  padding: 10px;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.section--featured {
  height: 860px;
  background-color: #212121;
}
.section--featured .row,
.section--featured .column,
.section--featured .ItemCard,
.section--featured .ItemCard__thumb {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.section--featured .row {
  position: absolute;
  top: -400px;
  right: 60vh;
  width: 960px;
  transform: rotateX(60deg) rotateZ(-45deg) scale(1.2);
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
@media screen and (min-width: 720px) {
  .section--featured .row {
    right: 70vh;
  }
}
@media screen and (min-width: 860px) {
  .section--featured .row {
    top: -450px;
    right: 90vh;
  }
}
@media screen and (min-width: 1000px) {
  .section--featured .row {
    right: 110vh;
  }
}
.section--featured .column {
  width: 50%;
  max-width: 50%;
  padding: 20px;
  flex: 1 1 50%;
}
.section--featured .shadow {
  display: block;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: .9;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  animation: 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) shadow 2;
}
.section--featured .ItemCard__thumb img {
  position: relative;
  z-index: 1;
}

.hero {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  padding: 160px 40px 0 40px;
  font-family: 'Roboto', sans-serif;
  color: #FFFFFF;
}

@media screen and (min-width: 1200px) {
  .hero {
    width: 40vw;
    top: -15%;
  }
}

/* =========== */
.hero h1 {
  margin: 0;
  font-size: 3em;
  font-weight: 900;
  color: #FFFFFF;
}
.hero h2 {
  font-size: 1.2em;
  font-weight: 400;
  opacity: .6;
  color: #FFFFFF;
}
.hero button {
  margin-top: 40px;
  padding: 20px 60px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #FFFFFF;
  border: 0;
  border-radius: 30px;
  background-color: #ec3e3a;
}
/* =========== */

.ItemCard {
  position: relative;
  max-width: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ItemCard__thumb {
  position: relative;
  padding: 0;
}
.ItemCard__thumb img {
  display: block;
}
</style>