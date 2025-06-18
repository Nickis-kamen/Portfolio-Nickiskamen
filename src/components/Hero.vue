<script setup>
import { ref } from 'vue'
import bg from '../assets/bg-red.gif'
import cv from '../assets/CV-kamen.pdf'
import moi from '../assets/moi.png'


const showMobileMenu = ref(false)

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}
</script>


<template>
  <section
    class="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
    :style="`background-image: url(${bg})`"
  >
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 px-6 py-4 z-50 backdrop-blur-md bg-black/50 shadow-sm w-full">
      <div class="w-full flex justify-between items-center max-w-6xl mx-auto">
        <!-- Logo -->
        <div class="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-transparent bg-clip-text">
          Nickis<span class="text-gray-300">Kamen</span>
        </div>

        <!-- Menu desktop -->
        <ul class="hidden md:flex gap-8 text-sm md:text-base text-white font-medium">
          <li><a href="#" class="hover:text-red-400 transition duration-300">Accueil</a></li>
          <li><a href="#projects" class="hover:text-red-400 transition duration-300">Projets</a></li>
          <li><a href="#skills" class="hover:text-red-400 transition duration-300">Compétences</a></li>
          <li><a href="#contact" class="hover:text-red-400 transition duration-300">Contact</a></li>
        </ul>

        <!-- Bouton mobile -->

        <button @click="toggleMobileMenu" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Menu mobile -->
      <transition name="fade">
        <ul
          v-if="showMobileMenu"
          class="md:hidden mt-4 flex flex-col items-center gap-4 text-white font-medium bg-black/80 backdrop-blur-md rounded-xl px-6 py-4"
        >
          <li><a href="#" @click="toggleMobileMenu" class="hover:text-red-400 transition">Accueil</a></li>
          <li><a href="#projects" @click="toggleMobileMenu" class="hover:text-red-400 transition">Projets</a></li>
          <li><a href="#skills" @click="toggleMobileMenu" class="hover:text-red-400 transition">Compétences</a></li>
          <li><a href="#contact" @click="toggleMobileMenu" class="hover:text-red-400 transition">Contact</a></li>
        </ul>
      </transition>
    </nav>


    <!-- Contenu principal -->
    <div class="bg-black/90 backdrop-blur-sm py-10 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 w-full min-h-screen pt-32">
      <!-- Texte -->
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
        class="w-full md:w-2/3 text-left"
      >
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-6">
          Salut, je suis
          <span class="bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-transparent bg-clip-text font-bold">
            Nickiskamen
          </span>
        </h1>
        <p class="text-lg md:text-lg text-gray-300 mb-8">
          Développeur web spécialisé en <span class="text-red-500 font-semibold">Back-end</span>, je conçois des architectures solides, sécurisées et évolutives. Mon expertise porte sur la gestion de bases de données complexes, ainsi que l’intégration fluide avec les interfaces front-end.
        </p>
        <div class="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#projects"
            class="px-6 py-3 hover:bg-red-700 hover:text-white bg-white text-red-700 font-medium rounded-full transition"
          >
            Voir mes projets
          </a>
          <a
            :href="cv"
            download
            class="flex gap-2 px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Télécharger mon CV
          </a>
        </div>
      </div>

      <!-- Image -->
      <div
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
        class="w-full md:w-1/2 flex justify-center"
      >
        <div class="w-56 h-56 md:w-90 md:h-90 relative">
          <div class="bg-red-800 opacity-20 blur-2xl absolute inset-0 rounded-full z-0"></div>
          <img
            :src="moi"
            alt="Nickis"
            class="relative z-10 w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
