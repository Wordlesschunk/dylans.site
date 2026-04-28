<template>
  <section class="portfolio" id="portfolio">
    <h2 class="section-title fade-in-up">{{ title }}</h2>
    <p class="section-subtitle fade-in-up" style="animation-delay: 0.1s">{{ subtitle }}</p>

    <div class="filters fade-in-up" style="animation-delay: 0.15s">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="['filter-btn', activeFilter === cat ? 'active' : '']"
        @click="activeFilter = cat"
      >
        {{ cat }}
      </button>
    </div>

    <TransitionGroup name="card" tag="div" class="cards-grid">
      <article
        v-for="card in filtered"
        :key="card.title"
        class="project-card"
        :class="{ 'has-image': card.image, 'has-case-study': caseStudySlugs.has(card.title) }"
        @click="navigateToCaseStudy(card)"
      >
        <div v-if="card.image" class="card-image" @click.stop="openLightbox(card)">
          <img :src="card.image" :alt="card.title" loading="lazy" />
          <div class="image-overlay">
            <i class="fas fa-expand"></i>
          </div>
        </div>

        <div class="card-body">
          <div class="card-header">
            <div class="card-icon">
              <i :class="card.icon"></i>
            </div>
            <div class="card-links">
              <a v-if="card.github" :href="card.github" aria-label="View source" class="card-link" target="_blank" rel="noopener noreferrer" @click.stop>
                <i class="fab fa-github"></i>
              </a>
              <a v-if="card.url" :href="card.url" aria-label="View live" class="card-link" target="_blank" rel="noopener noreferrer" @click.stop>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>

          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-description">{{ card.description }}</p>

          <div class="card-tags">
            <span v-for="tag in card.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <span v-if="caseStudySlugs.has(card.title)" class="case-study-link">
            View Case Study <i class="fas fa-arrow-right"></i>
          </span>
        </div>
      </article>
    </TransitionGroup>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightbox" class="lightbox-backdrop" @click="closeLightbox">
          <button type="button" class="lightbox-close" aria-label="Close" @click="closeLightbox">
            <i class="fas fa-times"></i>
          </button>
          <div class="lightbox-content" @click.stop>
            <img :src="lightbox.image" :alt="lightbox.title" />
            <p class="lightbox-caption">{{ lightbox.title }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import projectsData from "@/data/projects.json";
import caseStudies from "@/data/case-studies.json";

const router = useRouter()

interface Project {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  category: string;
  github?: string;
  url?: string;
  image?: string;
}

const caseStudySlugs = new Map(
  caseStudies.map((cs) => [cs.title, cs.slug])
)

function navigateToCaseStudy(card: Project) {
  const slug = caseStudySlugs.get(card.title)
  if (slug) {
    router.push({ name: 'case-study', params: { slug } })
  }
}

defineProps<{
  title: string;
  subtitle: string;
  categories: string[];
}>()

const activeFilter = ref("All")
const cards = ref<Project[]>(projectsData)

const filtered = computed(() =>
  activeFilter.value === "All"
    ? cards.value
    : cards.value.filter((c) => c.category === activeFilter.value)
)

const lightbox = ref<Project | null>(null)

function openLightbox(card: Project) {
  lightbox.value = card
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightbox.value = null
  document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeLightbox()
}

watch(lightbox, (val) => {
  if (val) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.portfolio {
  padding: 2rem 0;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: var(--color-text-muted);
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.filters {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.45rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #000;
  font-weight: 500;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  cursor: default;
  overflow: hidden;
}

.project-card.has-case-study {
  cursor: pointer;
}

.project-card:not(.has-image) {
  padding: 1.75rem;
  gap: 0.75rem;
}

.project-card.has-image .card-body {
  padding: 1.25rem 1.75rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.card-image {
  width: 100%;
  height: 180px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.25s ease;
  color: #fff;
  font-size: 1.25rem;
}

.card-image:hover .image-overlay {
  opacity: 1;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.project-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 0 20px rgba(46, 204, 113, 0.1), 0 8px 30px rgba(46, 204, 113, 0.06);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-icon {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.card-links {
  display: flex;
  gap: 0.75rem;
}

.card-link {
  color: var(--color-text-muted);
  font-size: 1.1rem;
  transition: color 0.2s ease;
}

.card-link:hover {
  color: var(--color-primary);
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-heading);
}

.card-description {
  font-size: 0.925rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  background: rgba(46, 204, 113, 0.1);
  color: var(--color-primary);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.case-study-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-primary);
  transition: gap 0.2s ease;
}

.case-study-link:hover {
  gap: 0.7rem;
}

/* TransitionGroup animations */
.card-enter-active {
  transition: all 0.35s ease-out;
}
.card-leave-active {
  transition: all 0.25s ease-in;
  position: absolute;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.card-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.card-move {
  transition: transform 0.35s ease;
}

/* Lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-close {
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.lightbox-close:hover {
  opacity: 1;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 78vh;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
}

.lightbox-caption {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  font-weight: 500;
}

.lightbox-enter-active {
  transition: opacity 0.25s ease;
}
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
