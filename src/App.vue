<script setup lang="ts">
import Backgroud from './components/background/main.vue'
import SearchInput from './components/search-input/main.vue'
import Stars from './components/stars/main.vue'
import SourceRep from './components/source-rep/main.vue'
</script>

<template>
  <main>
    <Backgroud>
      <Stars></Stars>
      <SearchInput></SearchInput>

      <SourceRep></SourceRep>
    </Backgroud>
  </main>
</template>

<style>
.search-input {
  position: absolute;
  top: 200px;
  left: 10%;
}

.stars {
  position: absolute;
  top:350px;
  left: 10%;
}

.source-rep {
  position: absolute;
  bottom:20px;
  right:20px;
  z-index: 3;
}
</style>
