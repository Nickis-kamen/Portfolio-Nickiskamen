<script setup>
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Skills from './components/Skills.vue'
import BgParticules from './components/BgParticules.vue'
</script>
<template>
  <main class="app">
    <BgParticules />
    <div class="content-overlay">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  </main>
</template>


<style scoped>
.app {
  position: relative;
}

.content-overlay {
  position: relative;
  z-index: 10;
}

</style>