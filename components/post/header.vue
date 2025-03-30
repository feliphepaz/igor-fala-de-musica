<template>
  <section class="post-header">
    <div class="post-header__wrapper">
      <Text as="h1" type="title-h1" color="black">
        {{ title }}
      </Text>

      <Text type="subtitle" color="black">
        {{ subtitle }}
      </Text>

      <div class="post-header__info">
        <Skeleton v-if="authorLoading" height="17px" />

        <Text v-else type="legend" color="black">
          {{ date }} | Por
          <a
            :href="author.social.x || author.social.instagram || ''"
            target="_blank"
          >
            {{ author.name }}
          </a>
        </Text>
      </div>

      <PostPhoto
        :file="hero.file"
        :copyright="hero.copyright"
        :description="hero.description"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    subtitle: string
    createdAt: string
    hero: {
      file: string
      copyright: string | null
      description: string | null
    }
    authorLoading: boolean
    author: Author
  }

  const { createdAt } = defineProps<Props>()

  const date = computed(() => {
    const date = new Date(createdAt)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${date.getDate()}/${month}/${date.getFullYear()}`
  })
</script>

<style lang="scss" scoped>
  .post-header {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
