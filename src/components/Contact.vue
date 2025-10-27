<script setup>
  // import bg from '../assets/bg-red.gif'
  import { ref } from 'vue'
  import { toast } from 'vue3-toastify'
  import 'vue3-toastify/dist/index.css'

  const name = ref('')
  const email = ref('')
  const message = ref('')
  const loading = ref(false)

  const submitForm = async () => {
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
        toast.success('Message envoyé avec succès')
        name.value = ''
        email.value = ''
        message.value = ''
      } else {
        toast.error('Une erreur est survenue. Réessayez.')
      }
    } catch (err) {
      toast.error('Erreur réseau.')
    } finally {
      loading.value = false
    }
  }
</script>
<template>
  <section
    id="contact"
    class="text-white bg-cover bg-no-repeat"
    :style="`background-image: url(${bg})`"
  >
    <div class="bg-black/90 backdrop-blur-sm py-20 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Contactez-moi
        </h2>

        <form
          @submit.prevent="submitForm"
          class="space-y-6 text-left bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-800"
          data-aos="zoom-in-up"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block mb-2 text-sm font-semibold text-red-300">Nom</label>
              <input
                id="name"
                type="text"
                v-model="name"
                placeholder="Votre nom"
                class="w-full px-4 py-3 rounded-xl bg-gray-800/80 text-white border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label for="email" class="block mb-2 text-sm font-semibold text-red-300">Email</label>
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="votre@email.com"
                class="w-full px-4 py-3 rounded-xl bg-gray-800/80 text-white border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div>
            <label for="message" class="block mb-2 text-sm font-semibold text-red-300">Message</label>
            <textarea
              id="message"
              v-model="message"
              rows="5"
              placeholder="Votre message..."
              class="w-full px-4 py-3 rounded-xl bg-gray-800/80 text-white border border-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none placeholder-gray-400"
              required
            ></textarea>
          </div>

          <div class="text-center pt-4">
            <button
              type="submit"
              :disabled="loading"
              class="cursor-pointer px-10 py-3 bg-gradient-to-r from-red-600 via-red-400 to-red-600 hover:from-red-700 hover:to-red-500 rounded-full font-semibold text-white shadow-md transition duration-300"
            >
              {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

