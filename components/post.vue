<template>
  <NuxtLink class="post" :to="post.slug">
    <NuxtImg :src="post.image" :alt="post.title" />

    <div class="post__content">
      <div class="post__content__legend">
        <Text as="span" type="legend" color="black">{{ post.date }}</Text>
        <Text as="span" type="text-14" variant="bold" color="black">
          {{ post.category }}
        </Text>
      </div>

      <Text as="h3" type="title" color="black">
        {{ post.title }}
      </Text>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    post: Post
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post {
    display: flex;
    gap: 20px;
    width: 100%;
    background: $color-white;
    transition: $transition-default;
    padding: 20px;

    @include tablet {
      flex-direction: column;
      gap: 10px;
    }

    &:hover,
    &:focus {
      background: $color-igor;
    }

    img {
      width: 180px;
      height: 100px;
      object-fit: cover;

      @include tablet {
        width: 100%;
        height: 120px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      &__legend {
        display: flex;
        gap: 10px;
      }
    }
  }
</style>
