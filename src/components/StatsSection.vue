<script setup lang="ts">
// 1. Definisikan bentuk data yang akan diterima (TypeScript)
interface StatData {
  value: string
  label: string
  icon: string // (Bisa berupa kode SVG)
}

// 2. Terima data 'stats' dari file luar (Parent)
defineProps<{
  stats: StatData[]
}>()
</script>

<template>
  <section
    aria-label="Company Statistic"
    class="relative z-20 max-w-7xl mx-auto px-4 -mt-17 md:-mt-13 mb-24"
  >
    <div
      class="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 py-6 px-4 md:px-8"
    >
      <dl
        class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 divide-x-0 lg:divide-x lg:divide-slate-200"
      >
        <!-- 3. Gunakan v-for untuk melakukan looping (perulangan) otomatis -->
        <div
          v-for="(item, index) in stats"
          :key="index"
          class="flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-4 group cursor-pointer lg:px-6"
        >
          <!-- Ikon SVG dinamis -->
          <div
            aria-hidden="true"
            class="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex shrink-0 items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-all duration-300"
            v-html="item.icon"
          ></div>
          <div class="flex flex-col">
            <!-- Angka dinamis -->
            <dd class="text-base font-extrabold text-slate-600 mb-1">{{ item.value }}</dd>

            <!-- Teks dinamis -->
            <dt class="text-xs font-medium text-slate-600 tracking-wider">
              {{ item.label }}
            </dt>
          </div>
        </div>
      </dl>
    </div>
  </section>
</template>
