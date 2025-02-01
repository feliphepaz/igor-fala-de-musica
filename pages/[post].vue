<template>
  <main class="post">
    <Breadcrumb />

    <article class="post__article">
      <PostHeader />
      <PostBody />
      <PostReview />
      <PostFooter />
    </article>

    <section class="post__related-posts">
      <div class="container">
        <Text as="h2" type="title-h1" color="white">Relacionados</Text>
      </div>

      <CardsGrid :cards="POSTS.list" />
    </section>
  </main>
</template>

<script setup lang="ts">
  import { POSTS } from '@/mocks/home/posts'
</script>

<style lang="scss" scoped>
  .post {
    &__article {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 840px;
      margin: 0 auto;
      padding: 0 20px;
    }

    &__related-posts {
      margin-top: 80px;

      @include mobile {
        margin-top: 60px;
      }

      h2 {
        margin-bottom: 20px;

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-40;
          background: $color-white;
          margin-top: 10px;
        }
      }
    }
  }
</style>
