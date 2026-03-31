import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '.reveal') {
  let observer

  onMounted(() => {
    const elements = document.querySelectorAll(selector)

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
