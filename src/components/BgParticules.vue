<template>
  <div id="particles-js" class="particles-container"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const particlesLoaded = ref(false);

onMounted(() => {
  if (window.particlesJS) {
    initParticles();
  } else {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      console.log('Particles.js loaded');
      initParticles();
    };
    script.onerror = () => {
      console.error('Failed to load particles.js');
    };
    document.head.appendChild(script);
  }
});

const initParticles = () => {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#dc2626'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#dc2626',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        // Ajout des événements tactiles pour mobile
        ondiv: {
          enable: true,
          mode: 'grab',
          type: 'touch'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 100,
          size: 0,
          duration: 0.3,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 25,
          duration: 0.5
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });

  particlesLoaded.value = true;
  console.log('Particles initialized');
};
</script>

<style scoped>
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: 1;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

#particles-js {
  width: 100%;
  height: 100%;
  background-color: #000000;
  pointer-events: all;
  transform: translate3d(0, 0, 0);
}
</style>