<template>
  <div class="posts-grid">
    <ul class="posts-grid__posts">
      <li v-if="loading" v-for="n in numberOfCards" :key="n">
        <Skeleton height="140px" />
      </li>

      <li v-for="(post, index) in posts" :key="index">
        <Post :post="post" />
      </li>
    </ul>

    <nav v-if="pagination" class="posts-grid__pagination">
      <button :disabled="actualPage <= 1" @click="prevPage">
        <ArrowIcon />
      </button>

      <button
        v-for="(page, index) in pages"
        v-show="page <= pagination.totalPages && page > 0"
        :key="index"
        :class="{ '-is-active': actualPage === page }"
        @click="setPage(page)"
      >
        <Text as="span" type="text-16" color="black">{{ page }}</Text>
      </button>

      <button :disabled="actualPage >= pagination.totalPages" @click="nextPage">
        <ArrowIcon />
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { ArrowIcon } from '@/assets/icons'

  interface Props {
    numberOfCards?: 4 | 12
    loading: boolean
    posts: Post[]
    pagination?: Pagination
    columns?: number
  }

  const {
    numberOfCards = 12,
    posts,
    pagination,
    columns = 2,
  } = defineProps<Props>()

  const actualPage = ref(pagination ? pagination.currentPage : 0)

  const emit = defineEmits(['nextPage', 'setPage', 'prevPage'])

  const pages = computed(() => {
    if (!pagination) return

    if (actualPage.value > 1 && actualPage.value < pagination.totalPages)
      return [actualPage.value - 1, actualPage.value, actualPage.value + 1]
    else if (actualPage.value === pagination.totalPages)
      return [actualPage.value - 2, actualPage.value - 1, actualPage.value]
    else return [actualPage.value, actualPage.value + 1, actualPage.value + 2]
  })

  function prevPage() {
    actualPage.value--
    emit('prevPage', actualPage.value)
  }

  function nextPage() {
    actualPage.value++
    emit('nextPage', actualPage.value)
  }

  function setPage(page: number) {
    actualPage.value = page
    emit('setPage', page)
  }
</script>

<style lang="scss" scoped>
  .posts-grid {
    &__posts {
      display: grid;
      grid-template-columns: repeat(v-bind(columns), 1fr);
      gap: 20px 40px;

      @include before-mobile {
        grid-template-columns: 1fr;
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

          span {
            color: $color-white;
          }
        }

        &:last-child svg {
          transform: rotate(-180deg);
        }
      }
    }
  }
</style>
