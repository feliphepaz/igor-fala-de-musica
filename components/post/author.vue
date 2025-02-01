<template>
  <div class="post-author">
    <NuxtImg src="/images/avatar.jpg" alt="Feliphe Paz" />

    <div class="post-author__content">
      <Text as="h4" type="text-18" variant="bold" color="black">
        Feliphe Paz
      </Text>

      <Text type="text-14" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia
        tincidunt lorem at lacinia. Vivamus sagittis dictum vulputate. Aliquam
        eget elit sit amet orci aliquam interdum pulvinar et quam.
      </Text>

      <div class="post-author__content__contact">
        <a href="https://x.com/" target="blank" rel="noreferrer">
          <XIcon color="black" />
        </a>

        <a href="https://www.instagram.com/" target="blank" rel="noreferrer">
          <InstagramIcon color="black" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { XIcon, InstagramIcon } from '@/assets/icons'
</script>

<style lang="scss" scoped>
  .post-author {
    display: flex;
    gap: 20px;

    @include mobile {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: $radius-rounded;
    }

    &__content {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      gap: 10px;

      &__contact {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 0;
      }
    }
  }
</style>
