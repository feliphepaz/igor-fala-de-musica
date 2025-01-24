<template>
  <div class="search">
    <input type="text" :placeholder="placeholder" />
    <button>
      <SearchIcon />
    </button>
  </div>
</template>

<script setup lang="ts">
  import { SearchIcon } from '@/assets/icons'

  interface Props {
    placeholder: string
    expand?: boolean
  }

  const { expand } = defineProps<Props>()

  const maxWidth = computed(() => (expand ? '100%' : '280px'))
</script>

<style lang="scss" scoped>
  .search {
    position: relative;
    width: 100%;
    max-width: v-bind(maxWidth);
    transition: $transition-default;
    opacity: $opacity-60;

    input {
      width: 100%;
      padding: 10px 45px 10px 20px;
      font-family: $font-sans;
      font-weight: $weight-regular;
      color: $color-black;
      font-size: 18px;
      line-height: 120%;
      border: none;
      outline: none;
      border-radius: $radius-20;
      background: $color-white;

      &::placeholder {
        color: $color-black;
        opacity: $opacity-40;
      }
    }

    button {
      position: absolute;
      right: 20px;
      top: 12px;
      width: 16px;
      height: 16px;
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
    }

    &:hover,
    &:focus-within {
      opacity: $opacity-100;
    }
  }
</style>
