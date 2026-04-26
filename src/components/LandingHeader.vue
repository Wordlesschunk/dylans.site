<script setup lang="ts">
import TypedRole from './TypedRole.vue'

defineProps<{
  name: string
  roles: string[]
  socials: {
    github: string
    linkedin: string
    email: string
  }
}>()
</script>

<template>
  <div class="header-content">
    <div class="text-block">
      <p class="greeting fade-in-up">Hey, I'm</p>
      <h1 class="name fade-in-up" style="animation-delay: 0.1s">{{ name }}</h1>
      <h2 class="role fade-in-up" style="animation-delay: 0.2s">
        <TypedRole :roles="roles" />
      </h2>
    </div>

    <nav class="social-links fade-in-up" style="animation-delay: 0.4s" aria-label="Social links">
      <a :href="socials.github" aria-label="GitHub" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a :href="socials.linkedin" aria-label="LinkedIn" class="social-link" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin"></i>
      </a>
      <a :href="`mailto:${socials.email}`" aria-label="Email" class="social-link">
        <i class="fas fa-envelope"></i>
      </a>
    </nav>
  </div>
</template>

<style scoped>
.header-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 6rem 2rem 3rem;
  max-width: 720px;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.greeting {
  font-size: 1.25rem;
  color: var(--color-primary);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.name {
  font-weight: 700;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.15;
  background: linear-gradient(135deg, #2ecc71 0%, #1abc9c 50%, #3498db 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: var(--color-text-muted);
  font-weight: 400;
  margin: 0;
  min-height: 1.8em;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 4px 12px rgba(46, 204, 113, 0.15);
}

@media (min-width: 768px) {
  .header-content { padding: 8rem 4rem 4rem; }
}

@media (min-width: 1024px) {
  .header-content { padding: 8rem 6rem 4rem; }
}
</style>
