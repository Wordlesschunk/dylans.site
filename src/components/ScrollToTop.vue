<template>
  <Transition name="fade">
    <button v-if="visible" class="scroll-top" @click="scrollUp" aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollUp() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 100;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  color: var(--color-text-muted);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.scroll-top:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-3px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
