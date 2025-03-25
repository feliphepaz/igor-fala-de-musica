<template>
  <main class="home">
    <Carousel :slides="SLIDES" />
    <CardsGrid :cards="POSTS.list" :pagination="POSTS.pagination" />

    <section class="home__rankings">
      <div class="home__rankings__wrapper container">
        <div class="home__rankings__wrapper__ranking">
          <Text as="h2" type="title-h1" color="igor">
            As
            <strong>mais lidas</strong>
          </Text>

          <PostsGrid :posts="POSTS.list" :columns="1" />
        </div>

        <div class="home__rankings__wrapper__ranking">
          <Text as="h2" type="title-h1" color="igor">
            Últimas
            <strong>críticas</strong>
          </Text>

          <PostsGrid :posts="POSTS.list" :columns="1" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { SLIDES } from '@/mocks/home/slides'
  import { POSTS } from '@/mocks/home/posts'

  import useSupabase from '@/composables/supabase'

  const { supabase } = useSupabase()

  async function getPosts() {
    try {
      const posts = await supabase.from('posts').select()
      return posts.data
    } catch (err) {
      return new Error()
    }
  }

  onMounted(async () => {
    const posts = await getPosts()

    console.log(posts)
  })
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    gap: 80px;

    &__rankings {
      &__wrapper {
        display: flex;
        padding: 0 115px;
        gap: 100px;

        @include tablet {
          padding: 0 20px;
          gap: 60px;
        }

        @include mobile {
          flex-direction: column;
        }

        &__ranking {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 20px;

          h2::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            opacity: $opacity-20;
            background: $color-igor;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
