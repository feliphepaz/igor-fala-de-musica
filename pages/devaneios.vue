<template>
  <main class="category">
    <div class="category__wrapper container">
      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">Devaneios</Text>

        <PostsGrid
          :posts="daydreams"
          :pagination="daydreamsPagination"
          :loading="isDaydreamsLoading"
          @set-page="(page) => getDaydreams(page)"
          @next-page="(page) => getDaydreams(page)"
          @prev-page="(page) => getDaydreams(page)"
        />
      </section>

      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">
          Devaneios
          <strong>mais lidos</strong>
        </Text>

        <PostsGrid
          :posts="daydreamsMostRead"
          :loading="isDaydreamsMostReadLoading"
          :number-of-cards="4"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import useDaydreams from '@/composables/daydreams'
  import useDaydreamsMostRead from '@/composables/daydreams-most-read'

  const {
    daydreams,
    daydreamsPagination,
    isDaydreamsLoading,
    getDaydreams,
    getDaydreamsPagination,
  } = useDaydreams()

  const {
    daydreamsMostRead,
    isDaydreamsMostReadLoading,
    getDaydreamsMostRead,
  } = useDaydreamsMostRead()

  onMounted(async () => {
    await getDaydreams(1)
    await getDaydreamsPagination()
    await getDaydreamsMostRead()
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
