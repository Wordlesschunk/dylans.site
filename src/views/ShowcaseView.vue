<template>

  <div class="top-blanker-panel"></div>


  <div class="mobile-view">
    <portfolio-view/>
  </div>

  <div class="desktop-view">
  <div class="section section--featured">
    <div class="hero">
      <h1>My Portfolio</h1>
      <h2>Come take a deeper dive into some of the projects I've been working on!</h2>
      <RouterLink to="/portfolio">
        <button>Learn More</button>
      </RouterLink>
    </div>

    <div class="row">
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
      <showcase-item :imageSrc="hhl"/>
    </div>
  </div>
  </div>

</template>

<style scoped>
.top-blanker-panel {
  height: 20vh;
  background-color: #212121;
  z-index: 100;
  bottom: -3px;
}

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

/*Mobile phones*/
@media screen and (max-width: 700px) {
  .desktop-view {
    display: none;
  }
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

  .mobile-view {
    display: none;
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

.ItemCard__thumb img {
  display: block;
}

</style>
<script setup>
import ShowcaseItem from "@/components/ShowcaseItem.vue";
import hhl from "@/assets/hhl-website.png"
import PortfolioView from "@/views/PortfolioView.vue";
</script>