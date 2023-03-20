<template>

  <div class="column">
    <div class="ItemCard">
      <figure class="ItemCard__thumb">
        <img :src="image" height="340" width="510" alt="">
        <span class="shadow cover"></span>
      </figure>
    </div>
  </div>

</template>


<script>
export default {
  name: "showcaseItem",
  props: [
      'imageUrl',
  ]
}
</script>

<!--<style scoped>-->
<!--.section&#45;&#45;featured .column {-->
<!--  width: 50%;-->
<!--  max-width: 50%;-->
<!--  padding: 20px;-->
<!--  flex: 1 1 50%;-->
<!--}-->

<!--.section&#45;&#45;featured .row,-->
<!--.section&#45;&#45;featured .column,-->
<!--.section&#45;&#45;featured .ItemCard,-->
<!--.section&#45;&#45;featured .ItemCard__thumb {-->
<!--  backface-visibility: hidden;-->
<!--  transform-style: preserve-3d;-->
<!--}-->

<!--.ItemCard {-->
<!--  position: relative;-->
<!--  max-width: 510px;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  align-items: center;-->
<!--}-->
<!--.ItemCard__thumb {-->
<!--  position: relative;-->
<!--  padding: 0;-->
<!--}-->
<!--.ItemCard__thumb img {-->
<!--  display: block;-->
<!--}-->
<!--</style>-->