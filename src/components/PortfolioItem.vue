<template>
  <section class="post">
    <span class="image">
      <img :src="imageSrc" alt="">
    </span>
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ about }}</p>
      <button><a href="{{ buttonLink }}"></a>More</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "portfolioItem",
  props: [
      'title',
      'about',
      'buttonLink',
      'imageSrc',
  ]
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 2em;
}

.post .image {
  display: block;
  width: 100%;
}

.post .image img {
  width: 100%;
}

.post .content {
  padding: 2.5em 2.5em 0.5em 2.5em;
  flex-grow: 1;
}

.wrapper.style2 .post .content {
  background-color: #fff;
  border: 0;
}

h1,
h2,
h3 {
  font-family: "Raleway", Helvetica, sans-serif;
  font-weight: 700;
  line-height: 1em;
  margin: 0 0 -0.5em 0;
  padding-bottom: 1.25em;
  position: relative;
  text-transform: uppercase;
}
</style>