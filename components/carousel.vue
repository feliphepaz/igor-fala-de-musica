<template>
  <div class="carousel">
    <Skeleton v-if="loading" height="640px" />
    <Swiper
      v-else
      class="carousel__swiper"
      :modules="modules"
      :slides-per-view="1"
      :autoplay="{ delay: 5500 }"
      :pagination="{ clickable: true }"
      loop
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <NuxtLink class="carousel__swiper__slide" :to="`/posts/${slide.slug}`">
          <NuxtImg :src="slide.images[0].file" :alt="slide.title" />

          <div class="carousel__swiper__slide__content">
            <div class="carousel__swiper__slide__content__legend">
              <Text as="span" type="legend" color="black">
                {{ convertDate(slide.created_at) }}
              </Text>
              <Text as="span" type="text-14" variant="bold" color="black">
                {{ convertCategory(slide.category) }}
              </Text>
            </div>

            <Text as="h2" type="title-h1" color="black">
              {{ slide.title }}
            </Text>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'

  interface Props {
    loading: boolean
    slides: Post[]
  }

  defineProps<Props>()

  const modules = [Autoplay, Pagination]

  function convertDate(timestamp: string) {
    const date = new Date(timestamp)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    return `${date.getDate()}/${month}/${date.getFullYear()}`
  }

  function convertCategory(slug: string) {
    if (slug === 'critica') return 'Crítica'
    else return slug.charAt(0).toUpperCase() + slug.slice(1)
  }
</script>

<style lang="scss" scoped>
  .carousel {
    &:deep(.skeleton) {
      height: 640px;

      @include tablet {
        height: 540px;
      }
    }

    &__swiper {
      height: 640px;

      @include tablet {
        height: 540px;
      }

      &__slide {
        position: relative;
        width: 100%;

        img {
          height: 640px;

          @include tablet {
            height: 540px;
          }
        }

        &__content {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 700px;
          position: absolute;
          bottom: 60px;
          background: $color-queen;
          padding: 20px 40px;

          @include tablet {
            padding: 20px;
          }

          &__legend {
            display: flex;
            gap: 10px;
          }
        }
      }

      :deep(.swiper-pagination) {
        display: flex;
        justify-content: center;
        gap: 10px;
        bottom: 20px;
      }

      :deep(.swiper-pagination-bullet) {
        width: 10px;
        height: 10px;
        background: $color-white;
        opacity: $opacity-100;
        margin: 0;
      }

      :deep(.swiper-pagination-bullet-active) {
        background: $color-igor;
      }
    }
  }
</style>
