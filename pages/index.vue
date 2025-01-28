<template>
  <main class="home">
    <Carousel :slides="SLIDES" />
    <CardsGrid :cards="POSTS.list" :pagination="POSTS.pagination" />
  </main>
</template>

<script setup lang="ts">
  import { SLIDES } from '@/mocks/home/slides'
  import { POSTS } from '@/mocks/home/posts'
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }
</style>
