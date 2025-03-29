<template>
  <main class="search">
    <div class="search__wrapper container">
      <section class="search__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">
          Resultados da pesquisa para
          <strong>“{{ route.params.search }}”</strong>
        </Text>

        <PostsGrid
          :posts="postsFound"
          :pagination="postsFoundPagination"
          :loading="isPostsFoundLoading"
          @set-page="
            (page) => getPostsFound(page, route.params.search as string)
          "
          @next-page="
            (page) => getPostsFound(page, route.params.search as string)
          "
          @prev-page="
            (page) => getPostsFound(page, route.params.search as string)
          "
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import usePostsFound from '@/composables/posts-found'

  const {
    postsFound,
    postsFoundPagination,
    isPostsFoundLoading,
    getPostsFound,
    getPostsFoundPagination,
  } = usePostsFound()

  const route = useRoute()

  onMounted(async () => {
    await getPostsFound(1, route.params.search as string)
    await getPostsFoundPagination()
  })
</script>

<style lang="scss" scoped>
  .search {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 80px;
      padding-top: 60px;

      &__section {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-20;
          background: $color-igor;
          margin-top: 10px;
        }
      }
    }
  }
</style>
