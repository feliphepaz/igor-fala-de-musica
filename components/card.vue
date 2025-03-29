<template>
  <NuxtLink class="card" :to="`/posts/${card.slug}`">
    <NuxtImg :src="card.images[1].file" :alt="card.title" />

    <div class="card__content">
      <div class="card__content__legend">
        <Text as="span" type="legend" color="black">{{ date }}</Text>
        <Text as="span" type="text-14" variant="bold" color="black">
          {{ category }}
        </Text>
      </div>

      <Text as="h3" type="title" color="black">
        {{ card.title }}
      </Text>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    card: Post
  }

  const { card } = defineProps<Props>()

  const date = computed(() => {
    const date = new Date(card.created_at)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${date.getDate()}/${month}/${date.getFullYear()}`
  })
  const category = computed(() => {
    if (card.category === 'critica') return 'Crítica'
    else return card.category.charAt(0).toUpperCase() + card.category.slice(1)
  })
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background: $color-white;
    transition: $transition-default;
    padding: 20px;

    &:hover,
    &:focus {
      background: $color-igor;
    }

    img {
      height: 200px;
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
