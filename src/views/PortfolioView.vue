<script setup>
import PortfolioItem from "@/components/PortfolioItem.vue";
import basicImage from "@/assets/img.png";
import giga64Landing from "@/assets/image/giga64-landing-page.png"
import hydrusHoldingsLanding from "@/assets/image/hydrusholdings-landing-page.png"
import rustWiperLanding from "@/assets/image/rustWiper-landing-page.png"
import adcLanding from "@/assets/image/ADC-dashboard-page.png"

</script>

<template>
  <section class="wrapper">
    <div class="main">
      <ul class="cards">

          <li class="cards_item">
              <PortfolioItem
                      title="Automated Deployment Checker"
                      about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
                      button-link="test link"
                      :imageSrc="adcLanding"
              />
          </li>

          <li class="cards_item">
          <PortfolioItem
              title="Rust Server Wiper"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="rustWiperLanding"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="HydrusHoldings"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="hydrusHoldingsLanding"
          />
        </li>

        <li class="cards_item">
          <PortfolioItem
              title="Giga64"
              about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
              button-link="test link"
              :imageSrc="giga64Landing"
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

        <div class="mobile-view">
      <RouterLink to="/">
        <button>Back</button>
      </RouterLink>
        </div>


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

@media screen and (max-width: 1000px) {
    .mobile-view {
        display: none;
    }
}
</style>