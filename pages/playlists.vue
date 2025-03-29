<template>
  <main class="category">
    <div class="category__wrapper container">
      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">Playlists</Text>

        <PostsGrid
          :posts="playlists"
          :pagination="playlistsPagination"
          :loading="isPlaylistsLoading"
          @set-page="(page) => getPlaylists(page)"
          @next-page="(page) => getPlaylists(page)"
          @prev-page="(page) => getPlaylists(page)"
        />
      </section>

      <section class="category__wrapper__section">
        <Text as="h2" type="title-h1" color="igor">
          Playlists
          <strong>mais lidas</strong>
        </Text>

        <PostsGrid
          :posts="playlistsMostRead"
          :loading="isPlaylistsMostReadLoading"
          :number-of-cards="4"
        />
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import usePlaylists from '@/composables/playlists'
  import usePlaylistsMostRead from '@/composables/playlists-most-read'

  const {
    playlists,
    playlistsPagination,
    isPlaylistsLoading,
    getPlaylists,
    getPlaylistsPagination,
  } = usePlaylists()

  const {
    playlistsMostRead,
    isPlaylistsMostReadLoading,
    getPlaylistsMostRead,
  } = usePlaylistsMostRead()

  onMounted(async () => {
    await getPlaylists(1)
    await getPlaylistsPagination()
    await getPlaylistsMostRead()
  })

  useHead({
    title: 'Igor Fala de Música | Playlists',
    meta: [
      { property: 'og:title', content: 'Igor Fala de Música | Playlists' },
    ],
  })
</script>

<style lang="scss" scoped>
  .category {
    &__wrapper {
      display: flex;
      flex-direction: column;
      gap: 80px;
      padding-top: 60px;

      &__section {
        display: flex;
        flex-direction: column;
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
</style>
