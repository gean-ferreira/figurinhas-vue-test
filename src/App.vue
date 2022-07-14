<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <img class="app-img" src="../src/assets/img/wave.svg" alt="imagem de fundo" />

    <RouterView />
</template>

<style scoped>
.app-img {
  /* padding-top: 10px; */
  height: 170px;
  transform: scale(1.3);
  position: fixed;
  transform: scale(1.4);
}
</style>
