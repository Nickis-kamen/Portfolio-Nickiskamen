<script setup>
import bg from '../assets/bg-red.gif'
import market from '../assets/market.png'
import portfolio from '../assets/portfolio.png'
import auto from '../assets/auto.png'

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
    link: 'https://github.com/Nickis-kamen/Market-place-Hopes.git'
  },
  {
    title: 'Portfolio Personnel',
    description: 'Portfolio personnel avec sections projets, compétences, et contact.',
    image: portfolio,
    tech: ['VueJs', 'Tailwind', 'Formspree', 'Vue3Toastify', 'AOS'],
    link: 'https://github.com/Nickis-kamen/Portfolio-Nickiskamen.git'
  },
  {
    title: 'Réparation Auto',
    description: 'Vitrine pour service auto avec galerie, formulaire de contact, et prise de rendez-vous.',
    image: auto,
    tech: ['PHP', 'MySQL', 'HTML','CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://github.com/Nickis-kamen/Reparation-auto.git'
  }
]
</script>

<template>
  <section id="projects" class="relative bg-no-repeat bg-cover text-white">
    <!-- <img
    :src="bg"
    alt="background"
    class="absolute inset-0 w-full h-full object-cover z-0"
    /> -->
    <div class="bg-black backdrop-blur-sm shadow-lg py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Mes Projets
        </h2>

        <div class="grid md:grid-cols-3 gap-10">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="bg-gray-900/40 backdrop-blur-sm hover:bg-gray-900 rounded-3xl shadow-xl transform transition-transform "
            :data-aos="getAnimation(index)"
            :data-aos-delay="index * 100"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            <img :src="project.image" alt="project image" class="h-48 w-full object-cover rounded-tl-3xl rounded-tr-3xl"  />
            <div class="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>

                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="text-xs bg-red-700/80 text-white px-2 py-1 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
                <a
                  :href="project.link"
                  target="_blank"
                  class="block w-full text-center px-4 py-2 mt-auto rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white font-medium transition"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
