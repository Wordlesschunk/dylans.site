<script setup lang="ts">
import site from "@/data/site.json"
import LandingHeader from "@/components/LandingHeader.vue"
import Divider from "@/components/Divider.vue"
import PortfolioCard from "@/components/PortfolioCard.vue"
import ContactCTA from "@/components/ContactCTA.vue"
</script>

<template>
  <div>
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
  </div>
</template>

<style scoped>
header {
  text-align: left;
}

main {
  background-color: var(--color-surface);
  padding: 3rem 2rem;
  flex: 1;
}

@media (min-width: 768px) {
  main { padding: 4rem 4rem; }
}

@media (min-width: 1024px) {
  main { padding: 4rem 6rem; }
}
</style>
