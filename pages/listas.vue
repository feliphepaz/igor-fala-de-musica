<template>
  <main class="category">
    <div class="category__wrapper container">
      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">Listas</Text>

        <PostsGrid
          :posts="lists"
          :pagination="listsPagination"
          :loading="isListsLoading"
          @set-page="(page) => getLists(page)"
          @next-page="(page) => getLists(page)"
          @prev-page="(page) => getLists(page)"
        />
      </section>

      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">
          Listas
          <strong>mais lidas</strong>
        </Text>

        <PostsGrid
          :posts="listsMostRead"
          :loading="isListsMostReadLoading"
          :number-of-cards="4"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import useLists from '@/composables/lists'
  import useListsMostRead from '@/composables/lists-most-read'

  const {
    lists,
    listsPagination,
    isListsLoading,
    getLists,
    getListsPagination,
  } = useLists()

  const { listsMostRead, isListsMostReadLoading, getListsMostRead } =
    useListsMostRead()

  onMounted(async () => {
    await getLists(1)
    await getListsPagination()
    await getListsMostRead()
  })
</script>

<style lang="scss" scoped>
  .category {
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
