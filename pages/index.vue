<template>
  <main class="home">
    <Carousel :loading="isSlidesLoading" :slides="slides" />

    <CardsGrid
      :cards="lastPosts"
      :pagination="lastPostsPagination"
      :loading="isLastPostsLoading"
      @set-page="(page) => getLastPosts(page)"
      @next-page="(page) => getLastPosts(page)"
      @prev-page="(page) => getLastPosts(page)"
    />

    <section class="home__rankings">
      <div class="home__rankings__wrapper container">
        <div class="home__rankings__wrapper__ranking">
          <Text as="h2" type="title-h1" color="igor">
            As
            <strong>mais lidas</strong>
          </Text>

          <PostsGrid
            :loading="isPostsMostReadLoading"
            :number-of-cards="4"
            :posts="postsMostRead"
            :columns="1"
          />
        </div>

        <div class="home__rankings__wrapper__ranking">
          <Text as="h2" type="title-h1" color="igor">
            Últimas
            <strong>críticas</strong>
          </Text>

          <PostsGrid
            :loading="isLastReviewsLoading"
            :number-of-cards="4"
            :posts="lastReviews"
            :columns="1"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import useSlides from '@/composables/slides'
  import useLastPosts from '@/composables/last-posts'
  import usePostsMostRead from '@/composables/posts-most-read'
  import useLastReviews from '@/composables/last-reviews'

  const { slides, isSlidesLoading, getSlides } = useSlides()

  const {
    lastPosts,
    lastPostsPagination,
    isLastPostsLoading,
    getLastPosts,
    getLastPostsPagination,
  } = useLastPosts()

  const { postsMostRead, isPostsMostReadLoading, getPostsMostRead } =
    usePostsMostRead()

  const { lastReviews, isLastReviewsLoading, getLastReviews } = useLastReviews()

  onMounted(async () => {
    await getSlides()
    await getLastPosts(1)
    await getLastPostsPagination()
    await getPostsMostRead()
    await getLastReviews()
  })
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 80px;

    &__rankings {
      &__wrapper {
        display: flex;
        padding: 0 115px;
        gap: 100px;

        @include tablet {
          padding: 0 20px;
          gap: 60px;
        }

        @include mobile {
          flex-direction: column;
        }

        &__ranking {
          display: flex;
          flex-direction: column;
          width: 100%;
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
  }
</style>
