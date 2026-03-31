<script setup>
import StickyNavbar from './components/StickyNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import EducationSection from './components/EducationSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import BackendExpertiseSection from './components/BackendExpertiseSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
    <StickyNavbar />
    <main>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechStackSection />
      <BackendExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
