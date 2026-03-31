<script setup>
const highlights = ['REST API development', 'JWT Authentication', 'System design mindset']
</script>

<template>
  <section id="about" class="section-spacing">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal rounded-3xl border border-white/10 bg-slate-900/45 p-7 sm:p-10">
        <h2 class="section-title">About</h2>
        <p class="mt-4 max-w-3xl leading-relaxed text-slate-300">
          I am a backend-focused developer using Java and Spring Boot to build robust services,
          secure authentication flows, and maintainable system architecture for real-world products.
        </p>
        <div class="mt-8 grid gap-3 sm:grid-cols-3">
          <span
            v-for="(item, index) in highlights"
            :key="item"
            class="reveal skill-tag"
            :style="{ transitionDelay: `${120 + index * 70}ms` }"
          >
            {{ item }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
