<template>
  <div class="breadcrumb">
    <div class="container">
      <NuxtLink class="breadcrumb__link" to="/devaneios">
        <ArrowIcon />
        <Text as="span" type="text-16" color="black">Devaneio</Text>
      </NuxtLink>

      <hr class="breadcrumb__line" />
    </div>
  </div>
</template>

<script setup>
  import { ArrowIcon } from '@/assets/icons'
</script>

<style lang="scss" scoped>
  .breadcrumb {
    padding: 40px 0;

    @include mobile {
      padding: 30px 0 20px;
    }

    &__link {
      display: flex;
      align-items: center;
      width: max-content;
      gap: 10px;
      opacity: $opacity-40;
      transition: $transition-default;

      &:hover {
        opacity: $opacity-100;
      }
    }

    &__line {
      margin: 10px 0 0;
      border: none;
      height: 1px;
      width: 100%;
      background: $color-black;
      opacity: $opacity-6;
    }
  }
</style>
