<script setup>
import { reactive, ref } from 'vue'

const socials = [
  { name: 'GitHub', icon: 'https://api.iconify.design/simple-icons:github.svg', link: 'https://github.com/cuccucthuii' },
  { name: 'Facebook', icon: 'https://api.iconify.design/logos:facebook.svg', link: 'https://www.facebook.com/kien.phan.394682' },
  { name: 'Instagram', icon: 'https://api.iconify.design/skill-icons:instagram.svg', link: 'https://www.instagram.com/neik.nahp?igsh=ZXJmMW01dnJya3N0&utm_source=qr' },
  { name: 'Threads', icon: 'https://api.iconify.design/simple-icons:threads.svg', link: 'https://www.threads.com/@neik.nahp?igshid=NTc4MTIwNjQ2YQ==' },
]

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const isSubmitting = ref(false)
const submitState = ref('idle')
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = async () => {
  if (!formspreeEndpoint) {
    submitState.value = 'error'
    errorMessage.value = 'Missing Formspree endpoint. Please set VITE_FORMSPREE_ENDPOINT in .env.'
    return
  }

  isSubmitting.value = true
  submitState.value = 'idle'
  errorMessage.value = ''

  try {
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to send message.')
    }

    form.name = ''
    form.email = ''
    form.message = ''
    submitState.value = 'success'
  } catch (error) {
    submitState.value = 'error'
    errorMessage.value = error instanceof Error ? error.message : 'Failed to send message.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="section-spacing pb-20">
    <div class="mx-auto w-full max-w-6xl px-6 sm:px-8">
      <div class="reveal rounded-3xl border border-white/10 bg-slate-900/45 p-7 sm:p-10">
        <h2 class="section-title">Contact</h2>
        <p class="mt-4 text-slate-300">
          Open to freelance and full-time opportunities. Let us build something meaningful together.
        </p>

        <form class="mt-8 grid gap-4 sm:grid-cols-2" @submit.prevent="handleSubmit">
          <input
            v-model.trim="form.name"
            class="input-field sm:col-span-1"
            type="text"
            placeholder="Your name"
            required
          />
          <input
            v-model.trim="form.email"
            class="input-field sm:col-span-1"
            type="email"
            placeholder="Your email"
            required
          />
          <textarea
            v-model.trim="form.message"
            class="input-field sm:col-span-2"
            rows="5"
            placeholder="Your message"
            required
          />
          <button :disabled="isSubmitting" type="submit" class="btn-primary sm:col-span-2 sm:w-fit disabled:opacity-70">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
          <p v-if="submitState === 'success'" class="sm:col-span-2 text-sm text-emerald-300">
            Message sent successfully. I will get back to you soon.
          </p>
          <p v-if="submitState === 'error'" class="sm:col-span-2 text-sm text-rose-300">
            {{ errorMessage }}
          </p>
        </form>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.link"
            target="_blank"
            rel="noreferrer"
            class="btn-secondary inline-flex items-center gap-2 text-sm"
          >
            <img :src="social.icon" :alt="social.name" class="h-4 w-4" loading="lazy" />
            <span>{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
