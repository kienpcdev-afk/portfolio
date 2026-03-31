<script setup>
const stackGroups = [
  {
    title: 'Backend',
    featured: true,
    items: [
      { name: 'Java', icon: 'https://api.iconify.design/logos:java.svg' },
      { name: 'Spring Boot', icon: 'https://api.iconify.design/logos:spring-icon.svg' },
      { name: 'Spring Security', icon: 'https://api.iconify.design/logos:spring-icon.svg' },
      { name: 'JWT', icon: 'https://api.iconify.design/logos:jwt-icon.svg' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'PostgreSQL', icon: 'https://api.iconify.design/logos:postgresql.svg' },
      { name: 'SQL Server', icon: 'https://api.iconify.design/logos:microsoft-sql-server.svg' },
      { name: 'MySQL', icon: 'https://api.iconify.design/logos:mysql.svg' },
    ],
  },
  {
    title: 'Frontend (Secondary)',
    items: [
      { name: 'Vue.js', icon: 'https://api.iconify.design/logos:vue.svg' },
      { name: 'React', icon: 'https://api.iconify.design/logos:react.svg' },
      { name: 'HTML/CSS', icon: 'https://api.iconify.design/logos:html-5.svg' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'https://api.iconify.design/logos:git-icon.svg' },
      { name: 'Postman', icon: 'https://api.iconify.design/logos:postman-icon.svg' },
      { name: 'IntelliJ', icon: 'https://api.iconify.design/logos:intellij-idea.svg' },
      { name: 'DataGrip', icon: 'https://api.iconify.design/logos:datagrip.svg' },
      { name: 'VSCode', icon: 'https://api.iconify.design/logos:visual-studio-code.svg' },
      { name: 'Figma', icon: 'https://api.iconify.design/logos:figma.svg' },
    ],
  },
]
</script>

<template>
  <section id="tech-stack" class="section-spacing">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal mb-8 sm:mb-10">
        <h2 class="section-title">Tech Stack</h2>
        <p class="mt-3 text-slate-300">Backend technologies are prioritized in my engineering workflow.</p>
      </div>

      <div class="grid gap-5 lg:grid-cols-2">
        <article
          v-for="(group, groupIndex) in stackGroups"
          :key="group.title"
          class="reveal rounded-3xl border p-6 transition duration-500 hover:-translate-y-1"
          :class="
            group.featured
              ? 'border-indigo-300/35 bg-indigo-500/8 shadow-[0_20px_50px_-30px_rgba(129,140,248,0.8)]'
              : 'border-white/10 bg-slate-900/55'
          "
          :style="{ transitionDelay: `${100 + groupIndex * 80}ms` }"
        >
          <h3 class="mb-5 text-xl font-bold text-slate-100">{{ group.title }}</h3>
          <div class="grid gap-2.5 sm:grid-cols-2">
            <div v-for="item in group.items" :key="item.name" class="stack-card">
              <img :src="item.icon" :alt="item.name" class="h-5 w-5" loading="lazy" />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
