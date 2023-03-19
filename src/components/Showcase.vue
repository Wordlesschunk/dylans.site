<script setup>
import Stars from "@/components/Stars.vue";
</script>

<template>
  <section id="three" class="wrapper style2">
    <div class="inner">
      <!-- <h2>Etiam sed tellus</h2> -->
      <div class="posts">
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Congue portitor</h3>
            <p>Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien.
            </p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Duis nisl euismod</h3>
            <p>Ultrices nec metus. Aenean ultricies magna et sapien rhoncus ac ullamcorper lorem convallis.
              Quisque at venenatis nisi amet finibus mauris. Sed sodales ultricies magna etiam.</p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Elementum auctor</h3>
            <p>Quis interdum. Lorem quis lacus justo. Sed libero condimentum vehicula sem vel, mattis amet
              mauris. Nullam lacinia sit amet felis vel vestibulum. Morbi aliquam aenean.</p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Urna vel lacinia</h3>
            <p>Integer vel tincidunt lacus. Nulla augue nunc, eleifend quis leo ac, maximus interdum tellus.
              Etiam at vestibulum felis, id efficitur risus. Praesent ac nulla ex. Duis elementum.</p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Neque et suscipit</h3>
            <p>Libero condimentum, vehicula sem vel, mattis mauris. Nullam lacinia sit amet felis vel
              vestibulum. Morbi in aliquam est. Aenean dapibus porttitor nulla ultrices venenatis.</p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
        <section class="post"><span class="image"><img src="https://dylans.site/_2023/portfolio/images/pic01.jpg" alt=""></span>
          <div class="content">
            <h3>Vestibulum placerat</h3>
            <p>Tristique tellus et ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Praesent mauris risus, pellentesque eu leo non, tincidunt.
            </p>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </section>

</template>

<style scoped>
#three {
  background: #212121;
}

@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css);
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600|Raleway:500,700,800");
html,
body,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

body {
  -webkit-text-size-adjust: none;
}
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

@-ms-viewport {
  width: device-width;
}

body {
  -ms-overflow-style: scrollbar;
}

@media screen and (max-width: 480px) {

  html,
  body {
    min-width: 320px;
  }
}

html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background: #fff;
}

body {
  background-color: #fff;
  color: #444;
}

body,
textarea {
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 13pt;
  font-weight: 400;
  line-height: 1.65em;
}

@media screen and (max-width: 1680px) {
  body,
  textarea {
    font-size: 11pt;
  }
}

a {
  -moz-transition: border-bottom-color 0.2s ease-in-out;
  -webkit-transition: border-bottom-color 0.2s ease-in-out;
  -ms-transition: border-bottom-color 0.2s ease-in-out;
  transition: border-bottom-color 0.2s ease-in-out;
  border-bottom: dotted 1px;
  text-decoration: none;
}

em,
i {
  font-style: italic;
}

p {
  margin: 0 0 2em 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1em;
  margin: 0 0 1.5em 0;
  padding-bottom: 1.25em;
  position: relative;
  text-transform: uppercase;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  border-bottom: 0;
  color: inherit;
  text-decoration: none;
}

h1.alt,
h2.alt,
h3.alt,
h4.alt,
h5.alt,
h6.alt {
  margin: 0 0 1em 0;
  padding-bottom: 0;
}

h1.alt:after,
h2.alt:after,
h3.alt:after,
h4.alt:after,
h5.alt:after,
h6.alt:after {
  display: none;
}

h2 {
  font-size: 1.25em;
  line-height: 1.25em;
}

h3 {
  font-size: 1em;
  line-height: 1.5em;
}

h4 {
  font-size: 1.1em;
  line-height: 1.5em;
}

h5 {
  font-size: 0.9em;
  line-height: 1.5em;
}

h6 {
  font-size: 0.7em;
  line-height: 1.5em;
}

@media screen and (max-width: 736px) {
  h2 {
    line-height: 1.5em;
  }
}

sub {
  font-size: 0.8em;
  position: relative;
  top: 0.5em;
}

sup {
  font-size: 0.8em;
  position: relative;
  top: -0.5em;
}

hr {
  border: 0;
  border-bottom: solid 1px;
  margin: 2em 0;
}

hr.major {
  margin: 3em 0;
}

.align-left {
  text-align: left;
}

.align-center {
  text-align: center;
}

.align-right {
  text-align: right;
}


textarea {
  color: #444;
}

a {
  color: #444;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #444;
}

hr {
  border-bottom-color: #e6e6e6;
}


textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border: none;
  border: solid 1px;
  border-radius: 0;
  background-color: transparent;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}


textarea:invalid {
  box-shadow: none;
}

textarea {
  padding: 0.75em 1em;
}

textarea {
  -moz-transition: border-color 0.2s ease-in-out;
  -webkit-transition: border-color 0.2s ease-in-out;
  -ms-transition: border-color 0.2s ease-in-out;
  transition: border-color 0.2s ease-in-out;
  border-color: #e6e6e6;
}


textarea:focus {
  border-color: #444;
}


.image {
  /*border: 0;*/
  display: inline-block;
  position: relative;
  border: 1px black;

}

.image img {
  display: block;
  border: 1px black;
}

.image.left,
.image.right {
  max-width: 40%;
}

.image.left img,
.image.right img {
  width: 100%;
}

.image.left {
  float: left;
  margin: 0 1.5em 1em 0;
  top: 0.25em;
}

.image.right {
  float: right;
  margin: 0 0 1em 1.5em;
  top: 0.25em;
}

.image.fit {
  display: block;
  margin: 0 0 2em 0;
  width: 100%;
}

.image.fit img {
  width: 100%;
}

ol {
  list-style: decimal;
  margin: 0 0 2em 0;
  padding-left: 1.25em;
}

ol li {
  padding-left: 0.25em;
}

ul {
  list-style: disc;
  margin: 0 0 2em 0;
  padding-left: 1em;
}

ul li {
  padding-left: 0.5em;
}

ul.alt {
  list-style: none;
  padding-left: 0;
}

ul.alt li {
  border-top: solid 1px;
  padding: 0.5em 0;
}

dl {
  margin: 0 0 2em 0;
}

dl dt {
  display: block;
  font-weight: 600;
  margin: 0 0 1em 0;
}

dl dd {
  margin-left: 2em;
}

ul.alt li {
  border-top-color: #e6e6e6;
}

ul.actions {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  cursor: default;
  list-style: none;
  margin-left: -1em;
  padding-left: 0;
}

ul.actions li {
  padding: 0 0 0 1em;
  vertical-align: middle;
}

ul.actions.special {
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  width: 100%;
  margin-left: 0;
}

ul.actions.stacked {
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: 0;
}

ul.actions.stacked li {
  padding: 1.3em 0 0 0;
}

ul.actions.fit {
  width: calc(100% + 1em);
}

ul.actions.fit li {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 100%;
}

ul.actions.fit li>* {
  width: 100%;
}

ul.actions.fit.stacked {
  width: 100%;
}

@media screen and (max-width: 480px) {
  ul.actions:not(.fixed) {
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0;
    width: 100% !important;
  }

  ul.actions:not(.fixed) li {
    -moz-flex-grow: 1;
    -webkit-flex-grow: 1;
    -ms-flex-grow: 1;
    flex-grow: 1;
    -moz-flex-shrink: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-shrink: 1;
    flex-shrink: 1;
    padding: 1em 0 0 0;
    text-align: center;
    width: 100%;
  }

  ul.actions:not(.fixed) li>* {
    width: 100%;
  }
}

.post {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -moz-align-items: -moz-stretch;
  -webkit-align-items: -webkit-stretch;
  -ms-align-items: -ms-stretch;
  align-items: stretch;
  margin-bottom: 2em;
}

.post .image {
  display: block;
  /* margin-bottom: 1em; */
  width: 100%;
  -ms-flex: 0 0 auto;
}

.post .image img {
  width: 100%;
}

.post .content {
  padding: 2.5em 2.5em 0.5em 2.5em;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
}

@media screen and (max-width: 1280px) {
  .post .content {
    padding: 2em 2em 0.1em 2em;
  }
}

@media screen and (max-width: 736px) {
  .post {
    display: block;
  }

  .post .content {
    padding: 2em 1.5em 0.1em 1.5em;
  }
}

.post .content {
  background-color: transparent;
  border: solid 1px #e6e6e6;
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

.posts .post {
  width: calc(33.33333333% - 1.25em);
}

@media screen and (max-width: 1280px) {
  .posts .post {
    width: calc(50% - 1em);
  }
}

@media screen and (max-width: 736px) {
  .posts {
    display: block;
  }

  .posts .post {
    width: 100%;
  }
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
