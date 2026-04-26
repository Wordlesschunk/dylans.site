<template>
  <Transition name="slide">
    <nav v-if="visible" class="sticky-nav" aria-label="Main navigation">
      <span class="nav-name">{{ initials }}</span>
      <div class="nav-links">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </div>
    </nav>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  initials: string
  links: { label: string; href: string }[]
}>()

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 300
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.sticky-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background: rgba(15, 15, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav-name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
  font-weight: 500;
}

.nav-links a:hover {
  color: var(--color-primary);
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

@media (min-width: 768px) {
  .sticky-nav { padding: 0.75rem 4rem; }
}
@media (min-width: 1024px) {
  .sticky-nav { padding: 0.75rem 6rem; }
}
</style>
