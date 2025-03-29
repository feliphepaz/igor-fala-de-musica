<template>
  <section class="post-footer">
    <div class="post-footer__wrapper">
      <div
        v-if="spotify.embed && spotify.id"
        class="post-footer__wrapper__spotify"
      >
        <Text as="h3" type="text-18" variant="bold" color="cherry">
          Escuta aí po!
        </Text>

        <iframe
          style="border-radius: 12px"
          :src="`https://open.spotify.com/embed/album/${spotify.id}?utm_source=generator`"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>

      <div class="post-footer__wrapper__tags">
        <Tag v-for="tag in tags" :key="tag.id" :path="tag.title">
          {{ tag.title }}
        </Tag>
      </div>

      <div class="post-footer__wrapper__author">
        <Text as="h3" type="text-18" variant="bold" color="cherry">
          Sobre o autor
        </Text>

        <div class="post-footer__wrapper__author__content">
          <Skeleton v-if="authorLoading" height="136px" />

          <PostAuthor v-else :author="author" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    spotify: Spotify
    tags: Tag[]
    authorLoading: boolean
    author: Author
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post-footer {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;

      &__spotify {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-10;
          background: $color-cherry;
          margin-top: 10px;
        }
      }

      &__tags {
        display: flex;
        gap: 10px;
        padding: 10px 0;
      }

      &__author {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-10;
          background: $color-cherry;
          margin-top: 10px;
        }

        &__content {
          &:deep(.skeleton) {
            height: 136px;

            @include mobile {
              height: 266px;
            }
          }
        }
      }
    }
  }
</style>
