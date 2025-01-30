<template>
  <section class="post-header">
    <div class="post-header__wrapper">
      <Text as="h1" type="title-h1" color="black">
        What Now e os 10 anos de Sound & Color
      </Text>

      <Text type="subtitle" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus
        sed metus ac placerat. Vivamus erat ligula, laoreet sit amet metus at,
        maximus sagittis tellus. Mauris vel sodales nunc.
      </Text>

      <div class="post-header__info">
        <Text type="legend" color="black">
          22/01/2025 | Por
          <NuxtLink to="/autores/feliphe-paz">Feliphe Paz</NuxtLink>
        </Text>
      </div>

      <PostPhoto />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .post-header {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
