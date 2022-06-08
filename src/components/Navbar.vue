<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HomeIcon from './Icons/HomeIcon.vue';
import MoviesIcon from './Icons/MoviesIcon.vue';
import TvIcon from './Icons/TvIcon.vue';
import BookmarkIcon from './Icons/BookmarkFullIcon.vue';
</script>

<template>
  <nav class="navbar">
    <RouterLink to="/">
      <img src="@/assets/images/logo.svg" class="navbar__logo" alt="Logo">
      <h1 class="sr-only">Logo</h1>
    </RouterLink>

    <div class="navbar__primary">
      <RouterLink to="/">
        <HomeIcon />
        <span class="sr-only">Home</span>
      </RouterLink>
      <RouterLink to="/movies">
        <MoviesIcon />
        <span class="sr-only">Movies</span>
      </RouterLink>
      <RouterLink to="/series">
        <TvIcon />
        <span class="sr-only">TV Series</span>
      </RouterLink>
      <RouterLink to="/bookmarks">
        <BookmarkIcon />
        <span class="sr-only">Bookmarks</span>
      </RouterLink>
    </div>

    <RouterLink to="/" class="navbar__avatar-container">
      <img src="@/assets/images/image-avatar.png" alt="User Profile">
      <span class="sr-only">Profile</span>
    </RouterLink>
  </nav>
</template>

<style scoped lang="scss">
  @use '@/assets/scss/mixins';
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding-inline: 1rem;
    background-color: var(--clr-foreground);

    a {
      outline: none;
      transition: transform 0.2s;

      &:where(:focus, :hover) {
        transform: scale(1.1);
      }
    }

    @include mixins.md {
      height: 72px;
      margin: 1.5rem;
      margin-bottom: 0;
      padding-inline: 1.5rem; 
      border-radius: 10px;
    }

    @include mixins.lg {
      height: auto;
      flex-direction: column;
      justify-content: start;
      padding: 0;
      width: 96px;
      padding-top: 2.25rem;
      padding-bottom: 2rem;
      margin: 0;
      border-radius: 20px;
    }

    &__logo {
      width: 25px;

      @include mixins.md {
        width: 32px;
      }

      @include mixins.lg {
        margin-bottom: 75px;
      }
    }

    &__primary {    
      display: flex;
      gap: 1.5rem;

      @include mixins.md {
        gap: 2rem;
      }

      @include mixins.lg {
        flex-direction: column;
        gap: 2.5rem 
      }
      
      a:not(.router-link-active) {
        color: var(--clr-grayish-blue);
      }

      svg {
        height: 1rem;

        @include mixins.md {
          height: 1.25rem;
        }
      }
    }

    &__avatar-container {
      display: inline-block;
      border: 1px solid;
      border-radius: 50%;
      width: 1.5rem;
      aspect-ratio: 1;

      @include mixins.md {
        width: 2rem;
      }

      @include mixins.lg {
        margin-top: auto;
        width: 2.5rem;
      }

      img {
        height: 100%;
        @include mixins.lg {
          width: 100%;
        }
      }
    }
  }
</style>