<template>
  <NuxtLink class="tag" :to="`/busca/${path}`">
    <Text as="span" type="text-14" variant="bold" color="cherry">
      <slot />
    </Text>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    path: string
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .tag {
    padding: 10px 14px;
    background: $color-igor;
    border-radius: $radius-20;
    transition: $transition-default;
    text-align: center;

    @include mobile {
      padding: 10px;
    }

    &:hover {
      background: $color-cherry;

      .text {
        color: $color-white;
      }
    }
  }
</style>
