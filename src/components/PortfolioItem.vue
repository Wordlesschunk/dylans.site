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

<template>
  <div class="card">
    <div class="card_image"><img :src="imageSrc"></div>
    <div class="card_content">
      <h2 class="card_title">{{ title }}</h2>
      <p class="card_text">{{ about }}</p>
      <button class="btn card_btn">Read More</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}
.card_content {
  padding: 1rem;
  background: #FFFFFF;
}
.card_title {
  color: #080808;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}
.card_text {
  color: #080808;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>