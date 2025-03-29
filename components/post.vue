<template>
  <NuxtLink class="post" :to="`/posts/${post.slug}`">
    <NuxtImg :src="post.images[1].file" :alt="post.title" />

    <div class="post__content">
      <div class="post__content__legend">
        <Text as="span" type="legend" color="black">{{ date }}</Text>
        <Text as="span" type="text-14" variant="bold" color="black">
          {{ category }}
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

  const { post } = defineProps<Props>()

  const date = computed(() => {
    const date = new Date(post.created_at)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${date.getDate()}/${month}/${date.getFullYear()}`
  })
  const category = computed(() => {
    if (post.category === 'critica') return 'Crítica'
    else return post.category.charAt(0).toUpperCase() + post.category.slice(1)
  })
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
      min-width: 180px;
      height: 100px;

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
