<script setup>
const expertiseItems = [
  {
    title: 'REST API Design',
    icon: 'https://api.iconify.design/material-icon-theme:api.svg',
    description:
      'Designing clean, versionable, and maintainable REST endpoints with consistent request/response contracts.',
  },
  {
    title: 'Authentication & Authorization',
    icon: 'https://api.iconify.design/material-icon-theme:lock.svg',
    description:
      'Implementing secure login flows using JWT and role-based access control with Spring Security.',
  },
  {
    title: 'Database Design & Optimization',
    icon: 'https://api.iconify.design/logos:postgresql.svg',
    description:
      'Modeling relational schemas, writing optimized queries, and improving performance through indexing strategy.',
  },
  {
    title: 'Layered Architecture',
    icon: 'https://api.iconify.design/mdi:layers-triple.svg',
    description:
      'Applying Controller - Service - Repository architecture for scalability, separation of concerns, and testability.',
  },
]
</script>

<template>
  <section id="backend-expertise" class="section-spacing">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal mb-8 sm:mb-10">
        <h2 class="section-title">Backend Expertise</h2>
        <p class="mt-3 text-slate-300">Core backend capabilities I apply to production-style systems.</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="(item, index) in expertiseItems"
          :key="item.title"
          class="reveal rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition duration-500 hover:-translate-y-1 hover:border-indigo-300/35 hover:shadow-[0_20px_44px_-28px_rgba(99,102,241,0.85)]"
          :style="{ transitionDelay: `${120 + index * 90}ms` }"
        >
          <div class="mb-4 inline-flex rounded-xl border border-indigo-300/30 bg-indigo-500/10 p-2.5">
            <img :src="item.icon" :alt="item.title" class="h-6 w-6" loading="lazy" />
          </div>
          <h3 class="text-xl font-bold text-slate-100">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ item.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
