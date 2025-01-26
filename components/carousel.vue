<template>
  <div class="carousel">
    <Swiper
      class="carousel__swiper"
      :modules="modules"
      :slides-per-view="1"
      :autoplay="{ delay: 6000 }"
      :pagination="{ clickable: true }"
      loop
    >
      <SwiperSlide v-for="(slide, index) in SLIDES" :key="index">
        <NuxtLink class="carousel__swiper__slide" :to="slide.path">
          <NuxtImg :src="slide.image" />

          <div class="carousel__swiper__slide__content">
            <div class="carousel__swiper__slide__content__legend">
              <Text as="span" type="legend" color="black">
                {{ slide.date }}
              </Text>
              <Text as="span" type="text-14" variant="bold" color="black">
                {{ slide.category }}
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

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Autoplay, Pagination } from 'swiper/modules'
  import { SLIDES } from '@/mocks/slides'

  import 'swiper/css'
  import 'swiper/css/pagination'

  const modules = [Autoplay, Pagination]
</script>

<style lang="scss" scoped>
  .carousel {
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
          object-fit: cover;

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
        margin: 0;
        opacity: 1;
      }

      :deep(.swiper-pagination-bullet-active) {
        background: $color-igor;
      }
    }
  }
</style>
