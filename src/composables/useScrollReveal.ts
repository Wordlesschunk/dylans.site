import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null
  let mutationObserver: MutationObserver | null = null

  function observeElement(el: Element) {
    if (!el.classList.contains('revealed')) {
      observer?.observe(el)
    }
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.scroll-reveal').forEach(observeElement)

    // Watch for dynamically added scroll-reveal elements
    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('scroll-reveal')) {
              observeElement(node)
            }
            node.querySelectorAll('.scroll-reveal').forEach(observeElement)
          }
        })
      })
    })

    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    observer?.disconnect()
    mutationObserver?.disconnect()
  })
}
