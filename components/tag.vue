<template>
  <NuxtLink class="tag" to="/">
    <Text as="span" type="text-14" variant="bold" color="cherry">
      Punk Rock
    </Text>
  </NuxtLink>
</template>

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
