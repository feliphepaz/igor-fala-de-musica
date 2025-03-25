<template>
  <div class="post-quote">
    <div class="post-quote__content">
      <div class="post-quote__content__verses">
        <Text type="body" color="black">
          Boa sorte aos meus inimigos que tanto pediram esse sinal
        </Text>
        <Text type="body" color="black">
          Você conhece o jogo, cães do salvador
        </Text>
        <Text type="body" color="black">
          Glória à legião, trauma pros vizinhos
        </Text>
      </div>
    </div>

    <div class="post-quote__author">
      <Text type="text-14" color="black" variant="bold">Emergence</Text>
      <Text type="text-14" color="black">| Sleep Token</Text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .post-quote {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__content {
      display: flex;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: $color-black;
        opacity: $opacity-20;
      }

      &__verses {
        margin-left: 20px;
      }
    }

    &__author {
      display: flex;
      gap: 4px;
    }
  }
</style>
