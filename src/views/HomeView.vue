<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchBar from "../components/SearchBar.vue";
import TrendingSection from "../components/TrendingSection.vue";

const videoStore = useVideos();
</script>

<template>
  <SearchBar placeholder="Search for movies or TV series"/>
  <TrendingSection :videos="videoStore.trendingVideos" />
</template>

<style lang="scss">
  .trending {
    margin-top: 0.625rem;
  }
</style>
