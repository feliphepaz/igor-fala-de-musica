<template>
  <div class="post-photo">
    <NuxtImg class="post-photo__image" :src="file" :alt="description ?? ''" />

    <div v-if="copyright || description" class="post-photo__legend">
      <Text v-if="copyright" type="caption" color="black">
        {{ copyright }}
      </Text>
      <Text v-if="description" type="caption" color="black">
        {{ description }}
      </Text>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    file: string
    copyright?: string | null
    description?: string | null
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post-photo {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &__image {
      max-height: 460px;
    }

    &__legend {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2px;
      opacity: $opacity-60;
    }
  }
</style>
