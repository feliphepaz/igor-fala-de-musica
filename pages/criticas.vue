<template>
  <main class="category">
    <div class="category__wrapper container">
      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">Críticas</Text>

        <PostsGrid
          :posts="reviews"
          :pagination="reviewsPagination"
          :loading="isReviewsLoading"
          @set-page="(page) => getReviews(page)"
          @next-page="(page) => getReviews(page)"
          @prev-page="(page) => getReviews(page)"
        />
      </section>

      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">
          Críticas
          <strong>mais lidas</strong>
        </Text>

        <PostsGrid
          :posts="reviewsMostRead"
          :loading="isReviewsMostReadLoading"
          :number-of-cards="4"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import useReviews from '@/composables/reviews'
  import useReviewsMostRead from '@/composables/reviews-most-read'

  const {
    reviews,
    reviewsPagination,
    isReviewsLoading,
    getReviews,
    getReviewsPagination,
  } = useReviews()

  const { reviewsMostRead, isReviewsMostReadLoading, getReviewsMostRead } =
    useReviewsMostRead()

  onMounted(async () => {
    await getReviews(1)
    await getReviewsPagination()
    await getReviewsMostRead()
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
