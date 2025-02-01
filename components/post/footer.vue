<template>
  <section class="post-footer">
    <div class="post-footer__wrapper">
      <div class="post-footer__wrapper__spotify">
        <Text as="h3" type="text-18" variant="bold" color="cherry">
          Escuta aí po!
        </Text>

        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/album/13fXtIpIyvz4D5Ny3TSHym?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>

      <div class="post-footer__wrapper__tags">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>

      <div class="post-footer__wrapper__author">
        <Text as="h3" type="text-18" variant="bold" color="cherry">
          Sobre o autor
        </Text>

        <div class="post-footer__wrapper__author__content">
          <PostAuthor />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .post-footer {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;

      &__spotify {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-10;
          background: $color-cherry;
          margin-top: 10px;
        }
      }

      &__tags {
        display: flex;
        gap: 10px;
        padding: 10px 0;
      }

      &__author {
        display: flex;
        flex-direction: column;
        gap: 20px;

        h3::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          opacity: $opacity-10;
          background: $color-cherry;
          margin-top: 10px;
        }
      }
    }
  }
</style>
