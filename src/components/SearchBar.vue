<script setup lang="ts">
import { useVideos } from "@/stores/videoStore";
import SearchIcon from "./Icons/SearchIcon.vue";

defineProps<{
  placeholder: string
}>()

const videoStore = useVideos();

function updateSearch(search: string) {
  videoStore.updateSearch(search);
}
</script>

<template>
  <div class="search-bar">
    <SearchIcon />
    <input type="text" @input="updateSearch(($event.target as HTMLInputElement).value)" :placeholder="placeholder">
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';
  .search-bar {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    @include mixins.md {
      gap: 1.5rem;
    }

    svg {
      width: 1.5rem;

      @include mixins.md {
        width: 2rem;
      }
    }

    input {
      position: relative;
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      caret-color: var(--clr-accent);
      padding-bottom: 14px;
      border-bottom: 1px solid transparent;

      @include mixins.md {
        font-size: 1.5rem;
      }

      &:focus {
        border-color: var(--clr-grayish-blue);
      }

      &::placeholder {
        opacity: 0.5;
        color: inherit;
      }
    }
  }
</style>