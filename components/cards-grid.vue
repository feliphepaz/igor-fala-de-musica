<template>
  <div class="cards-grid">
    <div class="container">
      <ul class="cards-grid__cards">
        <li v-for="(card, index) in cards" :key="index">
          <Card :card="card" />
        </li>
      </ul>

      <nav v-if="pagination" class="cards-grid__pagination">
        <button :disabled="actualPage <= 1" @click="actualPage -= 1">
          <ArrowIcon />
        </button>

        <button
          v-for="(page, index) in pages"
          :key="index"
          :class="{ '-is-active': actualPage === page }"
          @click="actualPage = page"
        >
          <Text as="span" type="text-16" color="black">{{ page }}</Text>
        </button>

        <button
          :disabled="actualPage >= pagination.totalPages"
          @click="actualPage += 1"
        >
          <ArrowIcon />
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ArrowIcon } from '@/assets/icons'

  interface Props {
    cards: Post[]
    pagination?: Pagination
  }

  const { cards, pagination } = defineProps<Props>()

  const actualPage = ref(pagination ? pagination.currentPage : 0)

  const pages = computed(() => {
    if (!pagination) return

    if (actualPage.value > 1 && actualPage.value < pagination.totalPages)
      return [actualPage.value - 1, actualPage.value, actualPage.value + 1]
    else if (actualPage.value === pagination.totalPages)
      return [actualPage.value - 2, actualPage.value - 1, actualPage.value]
    else return [actualPage.value, actualPage.value + 1, actualPage.value + 2]
  })
</script>

<style lang="scss" scoped>
  .cards-grid {
    &__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @include before-tablet {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 40px;
      }

      @include before-mobile {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }

    &__pagination {
      display: flex;
      gap: 10px;
      margin-top: 40px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: $color-white;
        transition: $transition-default;
        cursor: pointer;
        border: none;
        outline: none;

        &:disabled {
          opacity: $opacity-40;
          cursor: default;
        }

        &:hover:not(:disabled),
        &.-is-active {
          background: $color-igor;
        }

        &:last-child svg {
          transform: rotate(-180deg);
        }
      }
    }
  }
</style>
