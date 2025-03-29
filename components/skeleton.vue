<template>
  <div class="skeleton" />
</template>

<script setup lang="ts">
  interface Props {
    height: string
  }

  defineProps<Props>()
</script>

<style scoped lang="scss">
  .skeleton {
    width: 100%;
    height: v-bind(height);
    background: #e0e0e0;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      background: #e0e0e0;
    }

    50% {
      background: #c0c0c0;
    }

    100% {
      background: #e0e0e0;
    }
  }
</style>
