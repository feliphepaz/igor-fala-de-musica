<template>
  <section class="post-body">
    <div class="post-body__wrapper">
      <template v-for="(block, index) in blocks" :key="index">
        <Text v-if="block.type === 'paragraph'" type="body" color="black">
          {{ block.content }}
        </Text>

        <PostPhoto
          v-if="block.type === 'photo'"
          :file="block.file as string"
          :copyright="block.copyright"
          :description="block.description"
        />

        <PostQuote
          v-if="block.type === 'highlight'"
          :verses="block.verses!"
          :music="block.music!"
          :band="block.band!"
        />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    blocks: Block[]
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post-body {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
</style>
