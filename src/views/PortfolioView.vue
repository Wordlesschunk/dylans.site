<script setup>
import basicImage from "@/assets/img.png";
import PortfolioItem from "@/components/PortfolioItem.vue";
</script>

<template>
  <section id="three" class="wrapper style2">
    <div class="inner">
      <div class="posts">

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />

        <portfolio-item
            title="Test"
            about="Aenean ultricies magna non sapien rhoncus, ac ullamcorper lorem convallis. Quisque at
              venenatis nisi, amet finibus mauris. Sed sodales ultricies eros, sit amet sodales sapien"
            button-link="test link"
            :imageSrc="basicImage"
        />
      </div>

      <RouterLink to="/">
        <button>Back</button>
      </RouterLink>

    </div>
  </section>
</template>

<style scoped>
#three {
  background: #212121;
}

.posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

.posts .post {
  width: calc(33.33333333% - 1.25em);
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

.wrapper > .inner {
  margin: 0 auto;
  max-width: 90em;
  width: 90%;
}

.wrapper + .wrapper {
  border-top: solid 1px #e6e6e6;
}

.wrapper.style2 {
  background-color: #121212;
  color: #444;
  border-top: 0;
}

@media screen and (max-width: 1280px) {
  .wrapper {
    padding: 3em 0 1em 0;
  }

  .wrapper > .inner {
    width: 100%;
    padding: 0 3em;
  }
}

@media screen and (max-width: 980px) {
  .wrapper > .inner > * {
    width: 100%;
    padding-left: 0 !important;
  }
}

@media screen and (max-width: 736px) {
  .wrapper {
    padding: 2.5em 0 0.5em 0;
  }

  .wrapper > .inner {
    padding: 0 1.5em;
  }
}
</style>