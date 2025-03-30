<template>
  <Header />

  <main class="error">
    <div class="error__hero" />
    <div class="error__wrapper container">
      <div class="error__wrapper__header">
        <Text as="span" type="title" color="igor">Ops!</Text>
        <Text as="h1" type="title-h1" color="black">
          Ainda estamos trabalhando nessa página.
          <br />
          Volte em breve! :)
        </Text>
      </div>

      <div class="error__wrapper__menu">
        <Text type="subtitle" color="black">
          Enquanto isso você pode navegar entre outras páginas:
        </Text>

        <ul class="error__wrapper__menu__list">
          <li
            class="error__wrapper__menu__list__item"
            v-for="(item, index) in MENU_ITEMS"
            :key="index"
          >
            <NuxtLink :to="item.path">
              <Text as="span" type="text-18" variant="bold" color="cherry">
                {{ item.title }}
              </Text>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </main>

  <Footer />
</template>

<script setup lang="ts">
  import { MENU_ITEMS } from '@/mocks/menu-items'

  useHead({
    title: 'Igor Fala de Música',
    meta: [{ property: 'og:title', content: 'Igor Fala de Música' }],
  })
</script>

<style lang="scss" scoped>
  .error {
    &__hero {
      background-image: url('/hero.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 200px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 80px;
      padding: 80px 40px 40px 40px;

      &__menu {
        display: flex;
        flex-direction: column;
        gap: 30px;

        &__list {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          gap: 10px;

          &__item a {
            outline: none;

            &:hover,
            &:focus,
            &.-is-active {
              .text {
                color: $color-igor;
              }
            }
          }
        }
      }
    }
  }
</style>
