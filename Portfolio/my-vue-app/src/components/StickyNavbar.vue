<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition-all duration-500"
    :class="
      isScrolled
        ? 'border-white/10 bg-slate-950/80 backdrop-blur-xl'
        : 'border-transparent bg-transparent'
    "
  >
    <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
      <a href="#hero" class="text-sm font-semibold tracking-[0.15em] text-slate-100 uppercase">
        Phan Chí Kiên
      </a>
      <ul class="flex items-center gap-5 text-sm text-slate-300">
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#education">Education</a></li>
        <li><a class="nav-link" href="#tech-stack">Tech Stack</a></li>
        <li><a class="nav-link" href="#backend-expertise">Expertise</a></li>
        <li><a class="nav-link" href="#projects">Projects</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>
