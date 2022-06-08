<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";

const videoStore = useVideos();
</script>

<template>
  <SearchBar placeholder="Search for TV series"/>
  <VideoList v-if="!videoStore.search" class="tv-series" title="TV Series" :videos="videoStore.series"/>
  <VideoList v-else class="results" :title="`Found ${videoStore.filteredSeries.length} results for '${videoStore.search}'`" :videos="videoStore.filteredSeries"/>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';
  .tv-series,
  .results {
    margin-top: 0.625rem;

    @include mixins.md {
      margin-top: 1.125rem;
    }
    @include mixins.lg {
      margin-top: 1.25rem;
    }
  }
</style>