<script setup>
const achievements = [
  'Excellent Student - Fall 2023',
  'Maintained Good/Excellent academic performance for 4 consecutive semesters',
]

const activities = [
  {
    time: '11/2024',
    title: 'Professional talk show: Real-world Spring Boot Project Implementation',
    detail:
      'Gained practical insights into backend architecture and enterprise development processes.',
    icon: 'https://api.iconify.design/material-symbols:record-voice-over-rounded.svg',
  },
  {
    time: '10/2023',
    title: 'Enterprise exploration field trip at FPT Software Hoa Lac',
    detail: 'Learned about real-world software development workflows and company environment.',
    icon: 'https://api.iconify.design/material-symbols:domain-rounded.svg',
  },
]
</script>

<template>
  <section id="education" class="section-spacing">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal mb-8 sm:mb-10">
        <h2 class="section-title">Education</h2>
      </div>

      <div class="grid gap-5 lg:grid-cols-3">
        <article class="reveal rounded-3xl border border-white/10 bg-slate-900/60 p-6 lg:col-span-1">
          <h3 class="text-xl font-bold text-slate-100">School Info</h3>
          <div class="mt-4 space-y-2 text-slate-300">
            <p><span class="font-semibold text-slate-100">School:</span> FPT Polytechnic</p>
            <p><span class="font-semibold text-slate-100">Major:</span> Software Development</p>
            <p><span class="font-semibold text-slate-100">Duration:</span> 08/2023 - 05/2025</p>
            <p><span class="font-semibold text-slate-100">GPA:</span> 3.6/4.0</p>
          </div>
          <p class="mt-5 inline-flex rounded-full border border-indigo-300/30 bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200">
            Backend-focused learning path
          </p>
        </article>

        <article class="reveal rounded-3xl border border-emerald-300/25 bg-emerald-500/8 p-6 lg:col-span-2">
          <h3 class="text-xl font-bold text-slate-100">Achievements</h3>
          <ul class="mt-4 space-y-3">
            <li
              v-for="(item, index) in achievements"
              :key="item"
              class="reveal flex items-start gap-3 rounded-2xl border border-emerald-300/20 bg-slate-900/60 p-4 text-slate-200"
              :style="{ transitionDelay: `${120 + index * 90}ms` }"
            >
              <img
                src="https://api.iconify.design/mdi:medal-outline.svg"
                alt="achievement icon"
                class="mt-0.5 h-5 w-5 shrink-0"
                loading="lazy"
              />
              <span class="text-sm leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>

      <article class="reveal mt-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-7">
        <h3 class="text-xl font-bold text-slate-100">Activities</h3>
        <div class="mt-5 space-y-4">
          <div
            v-for="(activity, index) in activities"
            :key="activity.time"
            class="reveal flex gap-4 rounded-2xl border border-white/10 bg-slate-950/65 p-4"
            :style="{ transitionDelay: `${120 + index * 90}ms` }"
          >
            <div class="flex w-24 shrink-0 flex-col items-start">
              <span class="rounded-full border border-indigo-300/30 bg-indigo-500/15 px-2.5 py-1 text-xs font-semibold text-indigo-200">
                {{ activity.time }}
              </span>
            </div>
            <div class="flex-1">
              <div class="flex items-start gap-2.5">
                <img :src="activity.icon" :alt="activity.title" class="mt-0.5 h-5 w-5 shrink-0" loading="lazy" />
                <h4 class="text-sm font-semibold leading-relaxed text-slate-100">{{ activity.title }}</h4>
              </div>
              <p class="mt-2 text-sm leading-relaxed text-slate-300">{{ activity.detail }}</p>
            </div>
          </div>
        </div>
      </article>

      <article class="reveal mt-5 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-7">
        <h3 class="text-xl font-bold text-slate-100">Continuous Improvement</h3>
        <ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
          <li class="flex items-start gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300" />
            <span>Actively improving backend development skills through hands-on projects.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-300" />
            <span>Continuously learning Spring Boot, security, and system design.</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
