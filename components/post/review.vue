<template>
  <div class="post-review">
    <div class="post-review__data">
      <NuxtImg
        class="post-review__data__cover"
        :src="review.album.cover"
        :alt="review.album.name"
        quality="100"
      />

      <div class="post-review__data__info">
        <Text
          v-if="review.album.year"
          class="post-review__data__info__year"
          as="span"
          type="caption"
          variant="bold"
          color="black"
        >
          {{ review.album.year }}
        </Text>
        <Text as="h4" type="title-h1" color="black">
          {{ review.album.name }}
        </Text>
        <Text as="h5" type="title" color="black">
          {{ review.album.artist }}
        </Text>
      </div>
    </div>

    <div class="post-review__rating">
      <div class="post-review__rating__score">
        <Text as="span" type="title-h1" color="cherry">
          {{ review.review.score }}
        </Text>
      </div>

      <Text class="post-review__rating__text" type="title" color="cherry">
        {{ review.review.ratingText }}
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    review: Review
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post-review {
    display: flex;
    justify-content: space-between;
    gap: 80px;
    padding: 40px;
    max-width: 700px;
    background: linear-gradient($left-to-right, $color-igor, $color-queen);

    @include mobile {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      max-width: 100%;
      background: linear-gradient($top-to-bottom, $color-igor, $color-queen);
    }

    &__data {
      display: flex;
      gap: 20px;

      @include mobile {
        flex-direction: column;
        gap: 10px;
      }

      &__cover {
        width: 200px;
        height: 200px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &__year {
          opacity: $opacity-40;
        }
      }
    }

    &__rating {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      &__score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        border: 4px solid $color-cherry;
        border-radius: $radius-rounded;

        @include tablet {
          width: 100px;
          height: 100px;
        }
      }

      &__text {
        text-align: center;
      }
    }
  }
</style>
