<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed w-full z-50 flex justify-center border-b border-slate-800/10 bg-white">
    <nav
      aria-label="Navigasi Utama"
      class="backdrop-blur-md  w-full max-w-7xl px-6 py-3 md:py-4 flex items-center justify-between"
    >
      <a href="#" class="uppercase text-lg md:text-xl font-bold text-slate-800" aria-label="Logo Mahreen"
        >omega</a
      >
      <div class="hidden lg:flex items-center space-x-8">
        <RouterLink
          to="/"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Home</RouterLink
        >
        <RouterLink
          to="/about-us"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >About Us</RouterLink
        >
        <RouterLink
          to="/services"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Services</RouterLink
        >
        <RouterLink
          to="/industries"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Industries</RouterLink
        >
        <RouterLink
          to="/insight"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Insight</RouterLink
        >

        <RouterLink
          to="/careers"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Careers</RouterLink
        >
        <RouterLink
          to="/contact-us"
          class="text-sm font-bold text-slate-800 hover:text-violet-200 transition-colors"
          >Contact Us</RouterLink
        >
        <RouterLink
          to="/contact-us"
          class="text-sm font-bold text-slate-200 hover:text-violet-200 transition-colors px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-lg cursor-pointer ml-4"
          >Get in Touch</RouterLink
        >
      </div>

      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden text-slate-50 hover:text-slate-100 focus:outline-none relative w-9 h-9 flex items-center justify-center"
        aria-label="Buka Menu Utama"
      >
        <Transition name="rotate-fade">
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 absolute"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Transition>
      </button>
    </nav>
    <transition name="slide-down">
      <div
        v-show="isMobileMenuOpen"
        class="absolute top-16 left-4 right-4 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-5 lg:hidden flex flex-col space-y-2"
      >
        <RouterLink
          to="/"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about-us"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          About Us
        </RouterLink>
        <RouterLink
          to="/services"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Services
        </RouterLink>
        <RouterLink
          to="/industries"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Industries
        </RouterLink>
        <RouterLink
          to="/insight"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Insight
        </RouterLink>
        <RouterLink
          to="/careers"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Careers
        </RouterLink>
        <RouterLink
          to="/contact-us"
          @click="isMobileMenuOpen = false"
          class="text-base font-medium text-slate-50 hover:text-slate-100 p-3 rounded-lg transition-colors"
        >
          Contact Us
        </RouterLink>
      </div>
    </transition>
  </header>
</template>

<style scoped>
/* Animasi Transisi Hamburger ke Tanda Silang */
.rotate-fade-enter-active,
.rotate-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.rotate-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}
.rotate-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

/* Animasi Dropdown Menu HP (Meluncur dari atas) */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px) scaleY(0.95);
}
</style>
