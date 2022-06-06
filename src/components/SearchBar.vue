<script setup lang="ts">
import SearchIcon from "./Icons/SearchIcon.vue";
  defineProps<{
    placeholder: string
  }>()
</script>

<template>
  <div class="search-bar">
    <SearchIcon />
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<style scoped lang="scss">
  .search-bar {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    svg {
      width: 1.5rem;
    }

    input {
      position: relative;
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      caret-color: var(--clr-accent);
      padding-bottom: 14px;

      &:focus {
        border-bottom: 1px solid var(--clr-grayish-blue);
      }

      &::placeholder {
        opacity: 0.5;
        color: inherit;
      }
    }
  }
</style>