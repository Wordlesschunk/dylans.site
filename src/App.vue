<script setup lang="ts">
import site from "@/data/site.json"
import StickyNav from "@/components/StickyNav.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import { useScrollReveal } from "@/composables/useScrollReveal"

useScrollReveal()
</script>

<template>
  <StickyNav
    :initials="site.nav.initials"
    :links="site.nav.links"
  />
  <ScrollToTop />

  <div class="page-container">
    <router-view class="page-content" />

    <footer>
      <div class="footer-content">
        <p class="footer-text">{{ site.footer.text }}</p>
        <p class="footer-copy">{{ site.footer.copy }}</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.page-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(46, 204, 113, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 10%, rgba(52, 152, 219, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 35%, rgba(26, 188, 156, 0.05) 0%, transparent 50%);
}

.page-content {
  flex: 1;
}

footer {
  background-color: var(--color-bg);
  padding: 2rem;
  text-align: center;
  border-top: 1px solid var(--color-border);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-text {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.footer-copy {
  color: #555;
  font-size: 0.8rem;
}
</style>
