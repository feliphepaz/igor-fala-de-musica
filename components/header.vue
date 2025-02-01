<template>
  <header class="header">
    <div class="header__wrapper container">
      <NuxtLink class="header__wrapper__logo" to="/">
        <Logo />
      </NuxtLink>

      <nav class="header__wrapper__menu">
        <ul
          ref="menuRef"
          :class="[
            'header__wrapper__menu__list',
            { '-is-active': showMobileMenu },
          ]"
        >
          <li class="header__wrapper__menu__list__search">
            <Search placeholder="Pesquisar" expand />
          </li>
          <li
            class="header__wrapper__menu__list__item"
            v-for="(item, index) in MENU_ITEMS"
            :key="index"
          >
            <NuxtLink
              :class="{ '-is-active': item.path === $route.path }"
              :to="item.path"
              @click="showMobileMenu = false"
            >
              <Text as="span" type="text-18" variant="bold" color="cherry">
                {{ item.title }}
              </Text>
            </NuxtLink>
          </li>
          <li class="header__wrapper__menu__list__contact">
            <Button as-link to="/contato" @click="showMobileMenu = false">
              Quero escrever também!
            </Button>
          </li>
        </ul>
      </nav>

      <div class="header__wrapper__options">
        <Button as-link to="/contato">Quero escrever também!</Button>
        <Search placeholder="Pesquisar" />
      </div>

      <button
        ref="mobileButtonRef"
        :class="[
          'header__wrapper__mobile-button',
          { '-is-active': showMobileMenu },
        ]"
        @click="showMobileMenu = !showMobileMenu"
      >
        <ul>
          <li />
          <li />
          <li />
        </ul>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { Logo } from '@/assets/logos'
  import { onClickOutside } from '@vueuse/core'

  import { MENU_ITEMS } from '@/mocks/menu-items'

  const showMobileMenu = ref(false)
  const menuRef = ref(null)
  const mobileButtonRef = ref(null)

  onClickOutside(menuRef, () => (showMobileMenu.value = false), {
    ignore: [mobileButtonRef],
  })
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    background: $color-igor;
    padding: 14px 0;
    box-shadow: $shadow;
    z-index: 9999;

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;

      @include tablet {
        position: relative;
      }

      &__logo {
        display: flex;

        @include tablet {
          width: 120px;
        }
      }

      &__menu {
        &__list {
          display: flex;
          align-items: center;
          gap: 30px;

          @include tablet {
            display: none;
            flex-direction: column;
            align-items: flex-start;
            position: absolute;
            top: var(--header-height);
            left: 0;
            gap: 0;
            z-index: 999;
            width: 100%;
            background: $color-white;
            box-shadow: $shadow;

            &.-is-active {
              display: block;
            }
          }

          &__search {
            display: none;
            width: 100%;
            background: $color-queen;
            padding: 20px;

            @include mobile {
              display: block;
            }
          }

          &__item {
            @include tablet {
              width: 100%;
            }

            a {
              outline: none;

              @include tablet {
                padding: 20px;
                width: 100%;
              }

              &:hover,
              &:focus,
              &.-is-active {
                @include tablet {
                  background: $color-igor;
                }

                .text {
                  color: $color-white !important;
                }
              }
            }
          }

          &__contact {
            display: none;
            width: 100%;
            background: $color-queen;
            padding: 20px;

            @include tablet {
              display: block;
            }
          }
        }
      }

      &__options {
        display: flex;
        align-items: center;
        gap: 20px;

        @include tablet {
          width: 100%;
          justify-content: flex-end;

          .button {
            display: none;
          }
        }

        @include mobile {
          display: none;
        }
      }

      &__mobile-button {
        display: none;
        height: 42px;
        width: 42px;
        border: 4px solid $color-cherry;
        border-radius: $radius-rounded;
        transition: $transition-default;
        background: none;
        cursor: pointer;

        @include tablet {
          display: block;
        }

        ul {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;

          li {
            width: 6px;
            height: 6px;
            flex: none;
            background: $color-cherry;
            border-radius: $radius-rounded;
            transition: $transition-default;
          }
        }

        &.-is-active {
          border: 4px solid $color-white;

          ul li {
            background: $color-white;
          }
        }
      }
    }
  }
</style>
