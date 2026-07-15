<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
