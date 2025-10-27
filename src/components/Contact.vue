<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const name = ref('')
const email = ref('')
const message = ref('')
const loading = ref(false)

const submitForm = async () => {
  if (loading.value) return
  
  loading.value = true

  try {
    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('email', email.value)
    formData.append('message', message.value)

    const response = await fetch('https://formspree.io/f/manjbeyq', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })

    if (response.ok) {
      toast.success('Message envoyé avec succès !', {
        position: 'top-right',
        duration: 4000
      })
      name.value = ''
      email.value = ''
      message.value = ''
    } else {
      throw new Error('Erreur lors de l\'envoi')
    }
  } catch (err) {
    toast.error('❌ Une erreur est survenue. Veuillez réessayer.', {
      position: 'top-right',
      duration: 4000
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen text-white overflow-hidden "
  >

    <div class="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <!-- En-tête -->
        <div class="text-center mb-16" data-aos="fade-up">
          <h2
            class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-transparent bg-clip-text"
          >
            Travaillons Ensemble
          </h2>
          <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Prêt à donner vie à votre prochain projet ? 
            <span class="text-red-400 font-semibold">Discutons-en</span>
          </p>
          <div class="flex justify-center items-center gap-6 mt-8">
            <div class="flex items-center gap-3 text-red-300">
              <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span class="text-sm font-medium">Disponible immédiatement</span>
            </div>
          </div>
        </div>

        <!-- Formulaire seul -->
        <div data-aos="fade-up" data-aos-delay="200">
          <div class="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
            <form
              @submit.prevent="submitForm"
              class="space-y-6"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="name" class="text-sm font-semibold text-red-300 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Votre nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    v-model="name"
                    placeholder="Votre nom"
                    class="w-full px-4 py-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-sm font-semibold text-red-300 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Votre email
                  </label>
                  <input
                    id="email"
                    type="email"
                    v-model="email"
                    placeholder="votre@email.com"
                    class="w-full px-4 py-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    required
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="message" class="text-sm font-semibold text-red-300 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                  Votre message
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  rows="6"
                  placeholder="Décrivez votre projet, vos objectifs, ou toute question que vous pourriez avoir..."
                  class="w-full px-4 py-4 rounded-xl bg-gray-800/50 text-white border border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:outline-none placeholder-gray-400 transition-all duration-300 resize-none backdrop-blur-sm"
                  required
                ></textarea>
              </div>

              <div class="text-center pt-6">
                <button
                  type="submit"
                  :disabled="loading"
                  class="group relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl font-semibold text-white shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden cursor-pointer"
                >
                  <!-- Effet de brillance au survol -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  <span class="relative flex items-center justify-center gap-3">
                    <svg v-if="loading" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader-icon lucide-loader"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>
                    <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
                  </span>
                </button>
                
                <!-- Email en bas du formulaire -->
                <div class="mt-8 pt-6 border-t border-gray-700/50">
                  <div class="flex items-center justify-center gap-3 text-gray-300">
                    <svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="text-lg font-semibold">nickiskamen@gmail.com</span>
                  </div>
                  <p class="text-gray-400 text-sm mt-2">
                    ⚡ Réponse garantie sous 24 heures
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation de pulsation lente */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Styles pour le focus visible */
input:focus, textarea:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.3);
}

/* Améliorations pour mobile */
@media (max-width: 768px) {
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  .text-xl {
    font-size: 1.125rem;
  }
}
</style>