<script setup>
import Stars from "@/components/Stars.vue";
import BlankPanel from "@/components/BlankPanel.vue";
</script>

<template>

  <div class="top-blanker-panel"></div>


  <div class="demo-content" id="content">


  <div class="section section--featured">
    <div class="hero">
      <h1>My Portfolio</h1>
      <h2>Opens up a world of creative possibilities for all your design projects.</h2>
      <button><RouterLink to="/about">Learn More</RouterLink></button>
    </div>
    <div class="row">

      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
      <div class="column">
        <div class="ItemCard">
          <figure class="ItemCard__thumb">
            <img src="https://dylans.site/_2023/data/img/hhl-website.png" height="340" width="510" alt="">
            <span class="shadow cover"></span>
          </figure>
        </div>
      </div>
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
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
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
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 50%;
  -ms-flex: 1 1 50%;
  flex: 1 1 50%;
}
.section--featured .shadow {
  display: block;
  -webkit-transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  opacity: .9;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  -webkit-animation: 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) shadow 2;
  animation: 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) shadow 2;
}
.section--featured .ItemCard__thumb img {
  position: relative;
  z-index: 1;
  /*-webkit-transition: -webkit-transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);*/
  /*transition: -webkit-transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);*/
  /*transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);*/
  /*transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);*/
  /*-webkit-transform: translate3d(0, 0, 20px);*/
  /*transform: translate3d(0, 0, 20px);*/
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
@media screen and (min-width: 680px) {
  .hero {
    width: 80vw;
    padding: 160px 100px 40px 40px;
  }
}
@media screen and (min-width: 840px) {
  .hero {
    width: 70vw;
  }
}
@media screen and (min-width: 960px) {
  .hero {
    width: 60vw;
  }
}
@media screen and (min-width: 1000px) {
  .hero {
    width: 50vw;
  }
}
@media screen and (min-width: 1200px) {
  .hero {
    width: 40vw;
    top: -15%;
  }
}

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
  display: block;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  border: 0;
  border-radius: 30px;
  background-color: #ec3e3a;
}
/*@media screen and (min-width: 640px) {*/
/*  .column {*/
/*    width: 320px;*/
/*    max-width: 50%;*/
/*    -webkit-box-flex: 1;*/
/*    -webkit-flex: 1 1 320px;*/
/*    -ms-flex: 1 1 320px;*/
/*    flex: 1 1 320px;*/
/*  }*/
/*}*/
/*@media screen and (min-width: 940px) {*/
/*  .column {*/
/*    width: 313.33333333px;*/
/*    max-width: 33.333%;*/
/*    -webkit-box-flex: 1;*/
/*    -webkit-flex: 1 1 313.33333333px;*/
/*    -ms-flex: 1 1 313.33333333px;*/
/*    flex: 1 1 313.33333333px;*/
/*  }*/
/*}*/

.ItemCard {
  position: relative;
  max-width: 510px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
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
