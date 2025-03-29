<template>
  <div class="post-author">
    <NuxtImg :src="author.avatar" :alt="author.name" />

    <div class="post-author__content">
      <Text as="h4" type="text-18" variant="bold" color="black">
        {{ author.name }}
      </Text>

      <Text type="text-14" color="black">
        {{ author.biography }}
      </Text>

      <div
        v-if="author.social.x || author.social.instagram"
        class="post-author__content__contact"
      >
        <a v-if="author.social.x" :href="author.social.x" target="_blank">
          <XIcon color="black" />
        </a>

        <a
          v-if="author.social.instagram"
          :href="author.social.instagram"
          target="_blank"
        >
          <InstagramIcon color="black" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { XIcon, InstagramIcon } from '@/assets/icons'

  interface Props {
    author: Author
  }

  defineProps<Props>()
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
      background: $color-white;
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
