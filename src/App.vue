<script setup lang="ts">
import Backgroud from './components/background/main.vue'
import SearchInput from './components/search-input/main.vue'
// import Stars from './components/stars/main.vue'
</script>

<template>
  <main>
    <Backgroud>
      <!-- <Stars></Stars> -->
      <SearchInput></SearchInput>
    </Backgroud>
  </main>
</template>

<style>
.search-input {
  position: relative;
  top: 200px;
  left: 10%;
}

.stars {
  position: relative;
  top:200px;
  left: 10%;
}
</style>
