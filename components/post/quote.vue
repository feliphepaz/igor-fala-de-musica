<template>
  <div class="post-quote">
    <div class="post-quote__content">
      <div class="post-quote__content__verses">
        <Text
          v-for="(verse, index) in verses"
          :key="index"
          type="body"
          color="black"
        >
          {{ verse }}
        </Text>
      </div>
    </div>

    <div class="post-quote__author">
      <Text type="text-14" color="black" variant="bold">{{ music }}</Text>
      <Text type="text-14" color="black">| {{ band }}</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    verses: string[]
    music: string
    band: string
  }

  defineProps<Props>()
</script>

<style lang="scss" scoped>
  .post-quote {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__content {
      display: flex;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: $color-black;
        opacity: $opacity-20;
      }

      &__verses {
        margin-left: 20px;
      }
    }

    &__author {
      display: flex;
      gap: 4px;
    }
  }
</style>
