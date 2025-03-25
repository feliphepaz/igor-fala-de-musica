<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__content__wrapper container">
        <NuxtLink class="footer__content__wrapper__logo" to="/">
          <Logo />
        </NuxtLink>

        <nav class="footer__content__wrapper__menu">
          <div class="footer__content__wrapper__menu__contact">
            <a href="https://x.com/" target="blank" rel="noreferrer">
              <XIcon />
            </a>

            <a
              href="https://www.instagram.com/"
              target="blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>

          <ul class="footer__content__wrapper__menu__list">
            <li
              class="footer__content__wrapper__menu__list__item"
              v-for="(item, index) in MENU_ITEMS"
              :key="index"
            >
              <NuxtLink
                :class="{ '-is-active': item.path === $route.path }"
                :to="item.path"
              >
                <Text as="span" type="text-18" variant="bold" color="cherry">
                  {{ item.title }}
                </Text>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="footer__copyright">
      <div class="footer__copyright__wrapper container">
        <Text as="small" type="caption" color="white">
          Igor Fala de Música. 2025. &copy; Todos os direitos reservados. Feito
          com muito ❤️ de fã para fã.
        </Text>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { Logo } from '@/assets/logos'
  import { XIcon, InstagramIcon } from '@/assets/icons'
  import { MENU_ITEMS } from '@/mocks/menu-items'
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 100px;

    @include mobile {
      margin-top: 80px;
    }

    &__content {
      background: $color-igor;
      padding: 30px 0 26px;

      &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        &__logo {
          display: flex;

          @include tablet {
            width: 120px;
          }
        }

        &__menu {
          display: flex;
          gap: 30px;

          @include mobile {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          &__contact {
            display: flex;
            gap: 10px;

            a {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              background: $color-cherry;
              border-radius: $radius-rounded;
            }

            @include mobile {
              order: 2;
            }
          }

          &__list {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px 30px;

            &__item a {
              outline: none;

              &:hover,
              &:focus,
              &.-is-active {
                .text {
                  color: $color-white;
                }
              }
            }
          }
        }
      }
    }

    &__copyright {
      padding: 10px 0;
      background: $color-cherry;

      &__wrapper {
        display: flex;
        justify-content: center;

        small {
          text-align: center;
        }
      }
    }
  }
</style>
