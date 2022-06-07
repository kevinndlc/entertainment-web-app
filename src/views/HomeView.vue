<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchBar from "../components/SearchBar.vue";
import TrendingSection from "../components/TrendingSection.vue";
import VideoList from "../components/VideoList.vue";

const videoStore = useVideos();
</script>

<template>
  <SearchBar placeholder="Search for movies or TV series"/>
  <template v-if="!videoStore.search">
    <TrendingSection :videos="videoStore.trendingVideos" />
    <VideoList title="Recommanded for you" :videos="videoStore.recommandedVideos"/>
  </template>
  <VideoList v-else class="results" :title="`Found ${videoStore.filteredVideos.length} results for '${videoStore.search}'`" :videos="videoStore.filteredVideos"/>
</template>

<style lang="scss">
  @use '@/assets/scss/mixins';

  .trending,
  .results {
    margin-top: 0.625rem;

    @include mixins.md {
      margin-top: 1.125rem;
    }
  }
</style>
