<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section aria-label="about-heading" class="pt-12 pb-20 bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        <!-- Kiri -->
        <article class="flex flex-col">
          <header class="mb-6">
            <span class="text-teal-500 font-bold uppercase text-xs md:text-sm mb-3 block"
              >Tentang Kami</span
            >
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Mitra Terpercaya <br class="hidden lg:block" />Untuk
              <span class="text-teal-500">Pertumbuhan Berkelanjutan</span>
            </h1>
          </header>
          <p class="text-base text-slate-600 mb-8 leading-relaxed max-w-lg">
            Di OMEGA, kami memadukan inovasi, keahlian, dan kolaborasi untuk membantu bisnis Anda
            membuka peluang baru dan mencapai kesuksesan jangka panjang.
          </p>
          <ul class="space-y-4 mb-10" aria-label="Keunggulan kami">
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-icon lucide-circle-check text-teal-500 h-5 w-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span class="text-slate-700 text-sm md:text-base font-medium"
                >Pendekatan Berpusat Pada Klien</span
              >
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-icon lucide-circle-check text-teal-500 h-5 w-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span class="text-slate-700 text-sm md:text-base font-medium"
                >Solusi Inovatif dan Terukur</span
              >
            </li>
            <li class="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-circle-check-icon lucide-circle-check text-teal-500 h-5 w-5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span class="text-slate-700 text-sm md:text-base font-medium"
                >Komitmen pada Keunggulan</span
              >
            </li>
          </ul>
          <footer>
            <router-link
              to="/about-us"
              class="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition duration-300 w-fit"
              >Pelajari Lebih Lanjut
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </router-link>
          </footer>
        </article>
        <!-- Kanan -->
        <figure class="relative group m-0 lg:ml-10 mt-8 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop"
            alt="Gedung perusahaan modern"
            class="relative rounded-2xl object-cover w-full h-110"
          />
                    <figcaption
            class="absolute -top-6 left-5 md:-left-8 bg-teal-50 p-4 pr-6 rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-4 animate-bounce-slow"
          >
            <strong class="block text-lg font-extrabold text-teal-900">500+</strong>
            <span class="block text-sm font-bold text-slate-800">Klien Puas</span>
          </figcaption>


          <figcaption
            class="absolute -bottom-10 right-5 lg:-right-10 bg-teal-50 p-5 rounded-xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.15)] max-w-60 animate-bounce-slow [animation-delay:-2.5s]"
          >
            <strong class="block text-2xl font-extrabold text-teal-900 mb-1">10+</strong>
            <span class="block text-sm font-bold text-teal-800 mb-2">Tahun Pengalaman</span>
            <span class="block text-xs text-slate-600"
              >Memberikan nilai tambah dan membangun kemitraan yang bertahan lama.</span
            >
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>


<style scoped>
.animate-bounce-slow {
  will-change: transform;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -15px, 0); 
  }
}
</style>

