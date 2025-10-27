<script setup>
import { ref } from 'vue'
import market from '../assets/market.png'
import portfolio from '../assets/portfolio.png'
import auto from '../assets/auto.png'

const showPopup = ref(false)
const selectedProject = ref(null)

const getAnimation = (index) => {
  if (index % 3 === 0) return 'fade-right'
  if (index % 3 === 1) return 'zoom-in'
  return 'fade-left'
}

const projects = [
  {
    title: 'Marketplace Multivendeur',
    description: 'Marketplace multivendeur avec interface admin, paiements Stripe, et comptes vendeurs.',
    image: market,
    tech: ['Laravel', 'Stripe', 'MySQL', 'Tailwind','Blade','AlpineJs'],
    githubLink: 'https://github.com/Nickis-kamen/Market-place-Hopes.git',
    liveLink: null
  },
  {
    title: 'Portfolio Personnel',
    description: 'Portfolio personnel avec sections projets, compétences, et contact.',
    image: portfolio,
    tech: ['VueJs', 'Tailwind', 'Formspree', 'Vue3Toastify', 'AOS'],
    githubLink: 'https://github.com/Nickis-kamen/Portfolio-Nickiskamen.git',
    liveLink: 'https://portfolio-nickiskamen.vercel.app/'
  },
  {
    title: 'Réparation Auto',
    description: 'Vitrine pour service auto avec galerie, formulaire de contact, et prise de rendez-vous.',
    image: auto,
    tech: ['PHP', 'MySQL', 'HTML','CSS', 'JavaScript', 'Bootstrap'],
    githubLink: 'https://github.com/Nickis-kamen/Reparation-auto.git',
    liveLink: null
  }
]

const openPopup = (project) => {
  selectedProject.value = project
  showPopup.value = true
  document.body.style.overflow = 'hidden'
}

const closePopup = () => {
  showPopup.value = false
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

</script>

<template>
  <section id="projects" class="min-h-screen py-20 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête -->
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-transparent bg-clip-text">
          Mes Projets
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          Découvrez mes réalisations et l'étendue de mes compétences à travers ces projets concrets
        </p>
      </div>

      <!-- Grille des projets -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="group bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 lg:hover:-translate-y-2 active:scale-95 touch-manipulation"
          :data-aos="getAnimation(index)"
          :data-aos-delay="index * 150"
          data-aos-duration="800"
        >
          <!-- Image du projet -->
          <div class="relative h-60 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 lg:group-hover:scale-105 group-active:scale-102"
            />
            <!-- Overlay avec boutons -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 opacity-100 lg:group-hover:opacity-100 group-active:opacity-100">
              <div class="flex gap-3 lg:translate-y-6 lg:group-hover:translate-y-0 transition-transform duration-300 translate-y-0">
                <!-- Bouton Voir le site -->
                <a 
                  v-if="project.liveLink"
                  :href="project.liveLink" 
                  target="_blank"
                  class="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md border border-white/20 touch-manipulation"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Voir le site
                </a>
                <button 
                  v-else
                  @click="openPopup(project)"
                  class="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md border border-white/20 cursor-pointer touch-manipulation"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  Voir le site
                </button>
                <!-- Bouton Code -->
                <a 
                  :href="project.githubLink" 
                  target="_blank"
                  class="flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur-sm text-white rounded-lg font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-md border border-gray-600/50 touch-manipulation"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          <!-- Contenu du projet -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-red-100 lg:group-hover:text-red-100 transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1 bg-red-600/20 text-red-200 text-xs font-medium rounded-full border border-red-500/30 backdrop-blur-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Popup "À venir" -->
    <div 
      v-if="showPopup" 
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 touch-none"
      @click.self="closePopup"
    >
      <div 
        class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-md w-full p-8 border border-gray-700/50 shadow-2xl mx-4"
        data-aos="zoom-in"
        @click.stop
      >
        <!-- Icône et titre -->
        <div class="text-center mb-6">
          <div class="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Non disponible !</h3>
          <p class="text-gray-300">
            Le site de <span class="text-red-400 font-semibold">{{ selectedProject?.title }}</span> n'est pas encore disponible en ligne.
          </p>
        </div>
        <!-- Boutons d'action -->
        <div class="flex flex-col sm:flex-row gap-3">
          <a 
            :href="selectedProject?.githubLink" 
            target="_blank"
            class="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 hover:bg-gray-600 active:bg-gray-500 text-white font-medium rounded-lg transition-all duration-300 touch-manipulation active:scale-95"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Voir le code
          </a>
          <button 
            @click="closePopup"
            class="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 active:from-red-800 active:to-red-900 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 touch-manipulation"
          >
            Compris
          </button>
        </div>
        
        <!-- Bouton de fermeture -->
        <button 
          @click="closePopup"
          class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white active:text-white transition-colors duration-200 touch-manipulation"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Améliorations pour le tactile */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Assurer que les transitions sont fluides sur mobile */
@media (max-width: 1024px) {
  .group {
    transition-duration: 200ms;
  }
}

/* Détection du device tactile */
@media (hover: none) and (pointer: coarse) {
  .group:hover {
    transform: none !important;
  }
}
</style>