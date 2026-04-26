<script setup lang="ts">
import site from "@/data/site.json"
import StickyNav from "@/components/StickyNav.vue"
import ScrollToTop from "@/components/ScrollToTop.vue"
import LandingHeader from "@/components/LandingHeader.vue"
import Divider from "@/components/Divider.vue"
import PortfolioCard from "@/components/PortfolioCard.vue"
import ContactCTA from "@/components/ContactCTA.vue"
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
    <header>
      <LandingHeader
        :name="site.name"
        :roles="site.roles"
        :socials="site.socials"
      />
    </header>

    <Divider />

    <main>
      <PortfolioCard
        :title="site.projects.title"
        :subtitle="site.projects.subtitle"
        :categories="site.projects.categories"
      />
      <ContactCTA
        :title="site.contact.title"
        :text="site.contact.text"
        :button-text="site.contact.buttonText"
        :email="site.socials.email"
      />
    </main>

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

header {
  text-align: left;
}

main {
  background-color: var(--color-surface);
  padding: 3rem 2rem;
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

@media (min-width: 768px) {
  main { padding: 4rem 4rem; }
}

@media (min-width: 1024px) {
  main { padding: 4rem 6rem; }
}
</style>
