<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";
import basicImage from "@/assets/img.png";
</script>

<template>
  <section class="wrapper">
    <div class="main">
      <ul class="cards">

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Test"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="basicImage"
          />
        </li>
      </ul>

      <RouterLink to="/">
        <button>Back</button>
      </RouterLink>

    </div>
  </section>
</template>

<style scoped>
.wrapper {
  background-color: #212121;
}
.main {
  max-width: 1200px;
  margin: 0 auto;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}
.cards_item {
  display: flex;
  padding: 1rem;
}
@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}
@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}
</style>