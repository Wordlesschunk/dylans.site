<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import caseStudies from '@/data/case-studies.json'

const route = useRoute()
const router = useRouter()

const study = computed(() =>
  caseStudies.find((s) => s.slug === route.params.slug)
)
</script>

<template>
  <main class="case-study" v-if="study">
    <button class="back-btn" @click="router.push('/')">
      <i class="fas fa-arrow-left"></i> Back to Projects
    </button>

    <div class="hero">
      <div class="hero-icon"><i :class="study.icon"></i></div>
      <h1 class="hero-title">{{ study.title }}</h1>
      <p class="hero-subtitle">{{ study.subtitle }}</p>
      <div class="hero-tags">
        <span v-for="tag in study.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>

    <img v-if="study.image" :src="study.image" :alt="study.title" class="hero-image" />

    <p class="overview">{{ study.overview }}</p>

    <section v-for="section in study.sections" :key="section.heading" class="content-section">
      <h2>{{ section.heading }}</h2>
      <p>{{ section.content }}</p>
    </section>
  </main>

  <main class="case-study not-found" v-else>
    <h1>Case study not found</h1>
    <button class="back-btn" @click="router.push('/')">
      <i class="fas fa-arrow-left"></i> Back to Projects
    </button>
  </main>
</template>

<style scoped>
.case-study {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 2rem;
}

.back-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-icon {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  background: rgba(46, 204, 113, 0.1);
  color: var(--color-primary);
  font-weight: 500;
}

.hero-image {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  margin-bottom: 2rem;
}

.overview {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-text-heading);
  margin-bottom: 0.75rem;
}

.content-section p {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.not-found {
  text-align: center;
  padding-top: 6rem;
}

.not-found h1 {
  color: var(--color-text-heading);
  margin-bottom: 1.5rem;
}
</style>
