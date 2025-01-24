<template>
  <component :is="as" :class="classList" :style="{ color: textColor }">
    <slot />
  </component>
</template>

<script setup lang="ts">
  interface Props {
    as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4'
    type:
      | 'title-h1'
      | 'title'
      | 'body'
      | 'subtitle'
      | 'text-18'
      | 'text-16'
      | 'text-14'
      | 'legend'
      | 'caption'
    color: 'white' | 'black' | 'queen' | 'igor' | 'cherry'
    variant?: 'italic' | 'bold' | 'underline'
  }

  const props = withDefaults(defineProps<Props>(), {
    as: 'p',
  })

  const classList = [
    'text',
    `-${props.type}`,
    props.variant && `-${props.variant}`,
  ]

  const textColor = computed(() => {
    switch (props.color) {
      case 'white':
        return '#ffffff'
      case 'black':
        return '#000000'
      case 'queen':
        return '#f2d0d0'
      case 'igor':
        return '#ff91b4'
      case 'cherry':
        return '#a63247'
    }
  })
</script>

<style lang="scss" scoped>
  .text {
    transition: $transition-default;

    &.-title-h1 {
      font-family: $font-serif;
      font-weight: $weight-bold;
      font-size: 40px;
      line-height: 120%;
    }

    &.-title {
      font-family: $font-serif;
      font-weight: $weight-bold;
      font-size: 20px;
      line-height: 140%;
    }

    &.-body {
      font-family: $font-serif;
      font-weight: $weight-regular;
      font-size: 20px;
      line-height: 160%;
      letter-spacing: 0.2px;

      &.-italic {
        font-style: italic;
      }

      &.-bold {
        font-weight: $weight-bold;
      }
    }

    &.-subtitle {
      font-family: $font-serif;
      font-weight: $weight-regular;
      font-size: 18px;
      line-height: 140%;
    }

    &.-text-18 {
      font-family: $font-sans;
      font-weight: $weight-regular;
      font-size: 18px;
      line-height: 120%;

      &.-bold {
        font-weight: $weight-bold;
      }
    }

    &.-text-16 {
      font-family: $font-sans;
      font-weight: $weight-regular;
      font-size: 16px;
      line-height: 120%;
    }

    &.-text-14 {
      font-family: $font-sans;
      font-weight: $weight-regular;
      font-size: 14px;
      line-height: 120%;
      letter-spacing: 0.2px;

      &.-bold {
        font-weight: $weight-bold;
      }
    }

    &.-legend {
      font-family: $font-serif;
      font-weight: $weight-regular;
      font-size: 14px;
      line-height: 120%;

      &.-underline {
        text-decoration: underline;
      }
    }

    &.-caption {
      font-family: $font-serif;
      font-weight: $weight-regular;
      font-size: 12px;
      line-height: 120%;

      &.-bold {
        font-weight: $weight-bold;
      }
    }
  }
</style>
