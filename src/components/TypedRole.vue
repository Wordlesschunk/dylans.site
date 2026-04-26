<template>
  <span class="scroll-role">
    <span class="scroll-track" :style="trackStyle">
      <span v-for="(role, i) in roles" :key="i" class="scroll-item">{{ role }}</span>
    </span>
  </span>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  roles: string[]
}>()

const currentIndex = ref(0)
let timeout: ReturnType<typeof setTimeout>

const trackStyle = computed(() => ({
  transform: `translateY(-${currentIndex.value * 1.5}em)`,
  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
}))

function advance() {
  if (currentIndex.value < props.roles.length - 1) {
    currentIndex.value++
    timeout = setTimeout(advance, 900)
  }
}

onMounted(() => {
  timeout = setTimeout(advance, 800)
})

onUnmounted(() => clearTimeout(timeout))
</script>

<style scoped>
.scroll-role {
  display: inline-block;
  height: 1.5em;
  overflow: hidden;
  vertical-align: bottom;
}

.scroll-track {
  display: flex;
  flex-direction: column;
}

.scroll-item {
  height: 1.5em;
  line-height: 1.5em;
  flex-shrink: 0;
}
</style>
