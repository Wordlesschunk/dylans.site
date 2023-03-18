<script setup>
import Stars from "@/components/Stars.vue";
</script>

<template>

  <div id="section-0">
    <div class="text">
      <h1>Portfolio</h1>
    </div>

    <ul class="grid">
      <li class="one"><img src="../images/servershards_logo.jpg" width="320" height="568"><span class="s"></span></li>
      <li class="two"><img src="../images/hydrusholdings_phone.jpg" width="320" height="568"><span class="s"></span>
      </li>
      <li class="three"><img src="../images/mab_phone.jpg" width="320" height="568"><span class="s"></span></li>
      <li class="four"><img src="../images/mab_phone.jpg" width="320" height="568"><span class="s"></span></li>
      <li class="five"><img src="../images/mab_phone.jpg" width="320" height="568"><span class="s"></span></li>
      <li class="six"><img src="../images/mab_phone.jpg" width="320" height="568"><span class="s"></span></li>
    </ul>

  </div>




</template>

<style scoped>
#section-0 {
  position: relative;
  height: 90vh;
  width: 100%;
  background-color: #282828;
}

#section-0 .text {
  position: absolute;
  left: 4% !important;
  top: 30%;
  z-index: 1;
}

#section-0 .text h1 {
  font-size: 5.1vw;
}

#section-0 .text h1, #section-0 .text h2 {
  font-weight: 800;
  text-shadow: rgba(0, 0, 0, 0.75) -8px 5px;
  color: white;
  text-transform: uppercase;
}

.grid {
  position: absolute;
  top: -80px;
  left: 45.5%;
  /*Width = (225 + 20 + 20) * 4 = 1060*/
  width: 895px;
  /*3D Transform*/
  transform: rotateX(60deg) rotateZ(-50deg);
  /*Preserve 3D style for children*/
  transform-style: preserve-3d;
}

.grid img {
  border: none;
  transform: scale(0.703125);
  transform-origin: 0 0;
  background-color: #fff;
  overflow-x: hidden;
}

/* Medium devices (desktops, 992px and up)  */
@media (min-width: 992px) {
  .grid {
    position: absolute;
    top: -14%;
    left: 37%;
    width: 72%;
    transform: rotateX(60deg) rotateZ(-50deg);
    transform-style: preserve-3d;
  }
}

/* Large devices (large desktops, 1500px and up) */
@media (min-width: 1500px) {
  .grid {
    /* position: absolute; top: -80px; left: 45.5%;
    width: 895px;
    transform: rotateX(60deg) rotateZ(-50deg);
    transform-style: preserve-3d; */

    position: absolute;
    top: -5%;
    left: 42%;
    width: 50%;
    transform: rotateX(60deg) rotateZ(-50deg);
    transform-style: preserve-3d;

  }
}

.grid li {
  height: 400px;
  width: 225px;
  float: left;
  margin: 20px;
  list-style-type: none;
  /*Hide the lighting gradient from the front face*/
  background-size: 0, cover;
  /*Preserve 3D style for children(pseudo elements)*/
  transform-style: preserve-3d;
}

/*Left and Bottom Sides*/
.grid li:before,
.grid li:after {
  content: '';
  position: absolute;
  /*100% height and width*/
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: inherit;
  background-size: cover;
}

/*Left Side*/
.grid li:before {
  transform-origin: left center;
  transform: rotateY(90deg);
  /*Reducing the width of the left side for a flat feel*/
  width: 5px;
}

/*Bottom Side*/
.grid li:after {
  transform-origin: bottom center;
  transform: rotateX(90deg);
  /*Reducing the height*/
  height: 5px;
  top: auto;
  bottom: 0;
  /*Background fix - start the background from the bottom*/
  background-position: bottom center;
}

/*Shadow time - sadly all pseudo elements are used so we will have to add an HTML element in each LI*/
.s {
  position: absolute;
  /*30px smaller from each side*/
  /*!*top: 30px; left: 30px; right: 30px; bottom: 30px;*! OLD VALUES*/
  top: -1px;
  left: 40px;
  right: 190px;
  bottom: 30px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.5);
  /*Pushing down the shadow to give an elevated feel*/
  transform: translateZ(-50px);
}

.one {
  background:
      linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  /*		url("http://thecodeplayer.com/uploads/media/m1.png");*/
}

.two {
  background:
      linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  /*
    url("http://thecodeplayer.com/uploads/media/m2.png");*/
}

.three {
  background:
      linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  /*	url("http://thecodeplayer.com/uploads/media/m3.png");*/
}

.four {
  background:
      linear-gradient(45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  /*	url("http://thecodeplayer.com/uploads/media/m4.png");*/
}

iframe {
  border: none;
  transform: scale(0.703125);
  transform-origin: 0 0;
  background-color: #fff;
  overflow-x: hidden;
}

@media screen and (max-width: 600px) {
  #section-0 {
    display: none;
    /* visibility: hidden; */
    /* clear: both; */
    /* float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none; */
  }
}

</style>
