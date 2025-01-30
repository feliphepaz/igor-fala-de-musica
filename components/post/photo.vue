<template>
  <div class="post-photo">
    <NuxtImg
      class="post-photo__image"
      src="/images/slides/deftones.jpg"
      alt="Deftones"
    />

    <div class="post-photo__legend">
      <Text type="caption" color="black">Foto: David McClister</Text>
      <Text type="legend" color="black">
        Brittany Howard junto com a sua banda Alabama Shakes
      </Text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-photo {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 10px;

    &__image {
      max-height: 460px;
      object-fit: cover;
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
