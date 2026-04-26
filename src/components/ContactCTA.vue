<template>
  <section class="contact scroll-reveal" id="contact">
    <h2 class="contact-title">{{ title }}</h2>
    <p class="contact-text">{{ text }}</p>
    <a :href="`mailto:${email}`" class="contact-btn">{{ buttonText }}</a>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
  buttonText: string
  email: string
}>()
</script>

<style scoped>
.contact {
  padding: 5rem 0;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.contact-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-heading);
  margin-bottom: 1rem;
}

.contact-text {
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.contact-btn {
  display: inline-block;
  padding: 0.85rem 2.5rem;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
}

.contact-btn:hover {
  background: var(--color-primary);
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(46, 204, 113, 0.25);
}
</style>
