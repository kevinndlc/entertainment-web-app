<script setup lang="ts">
import SearchBar from "../components/SearchBar.vue";
import TrendingSection from "../components/TrendingSection.vue";

</script>

<template>
  <SearchBar placeholder="Search for movies or TV series"/>
  <TrendingSection />
</template>

<style lang="scss">
  .trending {
    margin-top: 2rem;
  }
</style>
