<template>
  <footer class="bg-gray-950 text-gray-400 py-12 px-6 border-t border-gray-800">
    <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
      <!-- Copyright -->
      <div class="text-sm">
        <p>© {{ new Date().getFullYear() }} <span class="text-red-500 font-semibold">Nickiskamen</span>. Tous droits réservés.</p>
      </div>

      <!-- Liens réseaux sociaux -->
      <div class="flex justify-center gap-6">
        <a href="https://www.facebook.com/nickis.kamen/" target="_blank" class="hover:text-white transition" >
          <img src="/src/assets/icons/facebook.png" alt="" class="w-8 h-8">
        </a>
        <a href="https://www.instagram.com/nickiskamen/" target="_blank" class="hover:text-white transition">
          <img src="/src/assets/icons/insta.png" alt="" class="w-8 h-8">
        </a>
        <a href="https://x.com/NickisKamen" target="_blank" class="hover:text-white transition" >
          <img src="/src/assets/icons/twitter.png" alt="" class="w-8 h-8">
        </a>
        <a href="https://www.linkedin.com/in/nickis-kamen-a80a91341/" target="_blank" class="hover:text-white transition" >
          <img src="/src/assets/icons/linkedin.png" alt="" class="w-8 h-8">
        </a>
        <a href="https://github.com/Nickis-kamen" target="_blank" class="hover:text-white transition" >
          <img src="/src/assets/icons/github.png" alt="" class="w-8 h-8">
        </a>
      </div>

      <!-- Retour en haut -->
      <div class="flex justify-center md:justify-end">
        <a
          href="#"
          class="flex gap-1 items-center text-sm text-red-400 hover:text-red-300 transition font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        Retour en haut
        </a>
      </div>
    </div>
  </footer>
</template>
