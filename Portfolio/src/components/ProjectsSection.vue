<script setup>
const projects = [
  {
    title: 'POLOVERSE - E-commerce Backend System',
    image:
      'https://thietkeweb.vn/uploaded/2-web-thoi-trang-nam-dep.jpg',
    description:
      'Built a backend platform to handle high-volume e-commerce workflows including catalog, cart lifecycle, order processing, and user domain logic.',
    problemSolved:
      'Unified fragmented business operations into a single API-driven backend with consistent contracts and predictable data flow.',
    backendChallenges:
      'Handling secure token lifecycle, enforcing role-based permissions across endpoints, and maintaining transaction consistency in order workflows.',
    architectureUsed:
      'Layered architecture (Controller - Service - Repository) with DTO mapping and centralized exception handling.',
    keyFeatures: [
      'JWT authentication with refresh token rotation',
      'Role-based authorization using Spring Security',
      'REST API design with standardized response envelope',
      'Global exception handling and validation strategy',
    ],
    tech: ['Spring Boot', 'JWT', 'PostgreSQL', 'REST API'],
    github: 'https://github.com/cuccucthuii',
    demo: '#',
    featured: true,
  },
  {
    title: 'DEV CINEMA - Movie Ticket Booking System',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    description:
      'Developed backend services for a movie booking platform supporting seat reservation flows, invoice generation, and online payment integration.',
    problemSolved:
      'Solved manual ticketing and disconnected payment operations by exposing cohesive booking and payment APIs for the client application.',
    backendChallenges:
      'Preventing seat race conditions, integrating VNPay callback verification, and ensuring booking-invoice consistency under concurrent requests.',
    architectureUsed:
      'Controller - Service - Repository with domain-oriented service layer and API-first contracts for frontend integration.',
    keyFeatures: [
      'JWT-based authentication for customer and staff access',
      'Role-based access control for employee operations',
      'RESTful APIs for booking, ticketing, and invoices',
      'VNPay integration with transaction status handling',
    ],
    tech: ['Spring Boot', 'VNPay', 'PostgreSQL', 'Backend APIs'],
    github: 'https://github.com/cuccucthuii',
    demo: '#',
  },
]
</script>

<template>
  <section id="projects" class="section-spacing">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal mb-8 sm:mb-10">
        <h2 class="section-title">Projects</h2>
        <p class="mt-3 text-slate-300">Backend projects with structured APIs, security, and production-ready architecture.</p>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="reveal project-card"
          :class="project.featured ? 'ring-1 ring-indigo-300/40' : ''"
          :style="{ transitionDelay: `${120 + index * 100}ms` }"
        >
          <img :src="project.image" :alt="project.title" class="h-48 w-full object-cover" />
          <div class="space-y-4 p-6">
            <h3 class="text-2xl font-bold text-slate-100">{{ project.title }}</h3>
            <p class="text-sm leading-relaxed text-slate-300">{{ project.description }}</p>
            <div class="space-y-2 text-sm leading-relaxed text-slate-300">
              <p><span class="font-semibold text-slate-100">Problem solved:</span> {{ project.problemSolved }}</p>
              <p><span class="font-semibold text-slate-100">Backend challenges:</span> {{ project.backendChallenges }}</p>
              <p><span class="font-semibold text-slate-100">Architecture:</span> {{ project.architectureUsed }}</p>
            </div>
            <ul class="space-y-1.5 text-sm text-slate-300">
              <li v-for="feature in project.keyFeatures" :key="feature" class="flex items-start gap-2">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2.5">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge">{{ tech }}</span>
            </div>
            <div class="flex flex-wrap gap-2">
              <a :href="project.github" target="_blank" rel="noreferrer" class="btn-secondary inline-flex text-sm">
                GitHub
              </a>
              <a :href="project.demo" class="btn-live-demo inline-flex text-sm">Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
