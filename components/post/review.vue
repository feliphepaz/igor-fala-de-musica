<template>
  <div class="post-review">
    <div class="post-review__data">
      <NuxtImg
        class="post-review__data__cover"
        src="/images/covers/tangk.png"
        alt="Tangk"
        quality="100"
      />

      <div class="post-review__data__info">
        <Text
          class="post-review__data__info__year"
          as="span"
          type="caption"
          variant="bold"
          color="black"
        >
          2024
        </Text>
        <Text as="h4" type="title-h1" color="black">Tangk</Text>
        <Text as="h5" type="title" color="black">IDLES</Text>
      </div>
    </div>

    <div class="post-review__rating">
      <div class="post-review__rating__score">
        <Text as="span" type="title-h1" color="cherry">9.6</Text>
      </div>

      <Text type="title" color="cherry">Ótimo!</Text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-review {
    display: flex;
    gap: 80px;
    padding: 40px;
    max-width: 620px;
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
    }
  }
</style>
