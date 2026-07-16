<script setup lang="ts"></script>

<template>
  <section class="pt-15 relative w-full h-160 flex items-center bg-cover bg-center bg-no-repeat">
    <img
      src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Gedung kantor pusat modern perusahaan"
      class="absolute inset-0 w-full h-full object-cover object-[center_30%] -z-10"
    />
<div class="absolute inset-0 bg-slate-900/40" aria-hidden="true"></div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6">
      <header class="max-w-2xl drop-shadow-lg">
        <h1
          id="hero-heading"
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 leading-tight mb-6"
        >
          Innovating Today <br />
          <span class="text-teal-300">Inspiring Tomorrow</span>
        </h1>
        <p class="text-base md:text-lg text-slate-100 mb-8 leading-relaxed max-w-xl">
          We deliver intelligent solutions that drive growth, empower businesses, and create lasting
          impact.
        </p>

        <nav aria-label="Hero navigation" class="flex flex-wrap items-center gap-4">
          <RouterLink
            to="/services"
            class="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all"
          >
            Our Services
          </RouterLink>
          <button
            type="button"
            class="px-8 py-3 border border-teal-300 hover:bg-slate-700/40 backdrop-blur-sm text-teal-300 font-semibold  rounded-lg flex items-center gap-2 transition duration-300 cursor-pointer"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd"
              />
            </svg>
            Watch Overview
          </button>
        </nav>
      </header>
    </div>
  </section>
</template>
