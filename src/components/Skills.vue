<script setup>
import html from '../assets/icons/html.png'
import css from '../assets/icons/css.png'
import js from '../assets/icons/js.png'
import php from '../assets/icons/php.png'
import laravel from '../assets/icons/laravel.png'
import vue from '../assets/icons/vue.png'
import tailwind from '../assets/icons/tailwind.png'
import git from '../assets/icons/git.png'
import ps from '../assets/icons/ps.png'
import github from '../assets/icons/github.png'
import postman from '../assets/icons/postman.png'
import mysql from '../assets/icons/mysql.png'


const skillGroups = [
  {
    title: 'Langages',
    skills: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css},
      { name: 'JavaScript', icon: js },
      { name: 'PHP', icon: php }
    ]
  },
  {
    title: 'Frameworks & Librairies',
    skills: [
      { name: 'Laravel', icon: laravel },
      { name: 'Vue.Js', icon: vue },
      { name: 'TailwindCSS', icon: tailwind }
    ]
  },
  {
    title: 'Outils & Design',
    skills: [
      { name: 'Git', icon: git },
      { name: 'Github', icon: github },
      { name: 'Postman', icon: postman },
      { name: 'Photoshop', icon: ps },
    ]
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'MySQL', icon: mysql }
    ]
  }
]
</script>

<template>
  <section id="skills" class="min-h-screen py-20 ">
    <div class="py-20">
      <div class="max-w-5xl mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Mes Compétences
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            v-for="(group, i) in skillGroups" 
            :key="group.title" 
            class="group"
            :data-aos="'fade-up'"
            :data-aos-delay="i * 100"
          >
            <div class="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg border border-gray-700/50 p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20">
              
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-transparent group-hover:to-red-500/5 transition-all duration-500"></div>
              
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-8">
                  <div class="w-1.5 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>
                  <h3 class="text-2xl font-bold text-white">
                    {{ group.title }}
                  </h3>
                </div>

                <div class="grid grid-cols-2 gap-6">
                  <div
                    v-for="skill in group.skills"
                    :key="skill.name"
                    class="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/30 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/10 cursor-pointer group/skill"
                    data-aos="zoom-in"
                    :data-aos-delay="i * 100 + 200"
                  >
                    <div class="relative w-20 h-20 flex items-center justify-center">
                      <div class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl blur-xl group-hover/skill:blur-2xl transition-all duration-300 opacity-0 group-hover/skill:opacity-100"></div>
                      <img 
                        :src="skill.icon" 
                        :alt="skill.name" 
                        class="w-14 h-14 relative z-10 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-6" 
                      />
                    </div>
              
                    <span class="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                      {{ skill.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Animation subtile pour les cartes */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.group:hover {
  animation: float 3s ease-in-out infinite;
}
</style>