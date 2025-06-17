<script setup>

const skillGroups = [
  {
    title: 'Langages',
    skills: [
      { name: 'HTML', icon: '/src/assets/icons/html.png', percent: 70 },
      { name: 'CSS', icon: '/src/assets/icons/css.png', percent: 60 },
      { name: 'JavaScript', icon: '/src/assets/icons/js.png', percent: 40 },
      { name: 'PHP', icon: '/src/assets/icons/php.png', percent: 68 }
    ]
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Laravel', icon: '/src/assets/icons/laravel.png', percent: 72 },
      { name: 'Vue.Js', icon: '/src/assets/icons/vue.png', percent: 45 },
      { name: 'TailwindCSS', icon: '/src/assets/icons/tailwind.png', percent: 65 }
    ]
  },
  {
    title: 'Outils & Design',
    skills: [
      { name: 'Git', icon: '/src/assets/icons/git.png', percent: 40 },
      { name: 'Photoshop', icon: '/src/assets/icons/ps.png', percent: 50 }
    ]
  },
  {
    title: 'Base de données',
    skills: [
      { name: 'MySQL', icon: '/src/assets/icons/mysql.png', percent: 55 }
    ]
  }
]
</script>

<template>
  <section id="skills" class="text-white bg-gray-900">
    <div class="bg-black/90 backdrop-blur-sm py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2
          class="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-transparent bg-clip-text"
          data-aos="fade-up"
        >
          Mes Compétences
        </h2>

        <div v-for="(group, i) in skillGroups" :key="group.title" class=" text-center mb-16">
          <h3
            class="text-2xl text-red-400 font-semibold mb-8"
            :data-aos="'fade-up'"
            :data-aos-delay="i * 100"
          >
            {{ group.title }}
          </h3>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-auto max-w-4xl">
            <div
              v-for="skill in group.skills"
              :key="skill.name"
              class="flex flex-col items-center justify-center"
              data-aos="fade-up"
            >
              <div class="relative w-28 h-28 mb-4">
                <!-- Circle background -->
                <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                  <circle
                    class="text-gray-600"
                    stroke-width="3"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                  <circle
                    class="text-red-600 animate-skill"
                    :style="`--percent:${skill.percent}`"
                    stroke-width="3"
                    :stroke-dasharray="100"
                    stroke-dashoffset="100"
                    stroke-linecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                </svg>
                <img :src="skill.icon" :alt="skill.name" class="w-16 h-16 absolute top-6 left-6 z-10" />
              </div>
              <span class="text-sm text-red-300">{{ skill.percent }}%</span>
              <span class="text-sm text-gray-200">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
@keyframes circle-fill {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: calc(100 - var(--percent));
  }
}

.animate-skill {
  animation: circle-fill 1.5s ease-out forwards;
}

</style>

