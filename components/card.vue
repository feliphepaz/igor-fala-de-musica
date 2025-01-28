<template>
  <NuxtLink class="card" :to="card.slug">
    <NuxtImg :src="card.image" :alt="card.title" />
    <div class="card__content">
      <div class="card__content__legend">
        <Text as="span" type="legend" color="black">{{ card.date }}</Text>
        <Text as="span" type="text-14" variant="bold" color="black">
          {{ card.category }}
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

  defineProps<Props>()
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
      object-fit: cover;
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
