<template>
  <main class="post">
    <Skeleton class="breadcrumb-loading" v-if="isPostLoading" height="90px" />
    <Breadcrumb v-else :type="post.category" />

    <article class="post__article">
      <Skeleton v-if="isPostLoading" height="400px" />
      <PostHeader
        v-else
        :title="post.title"
        :subtitle="post.subtitle"
        :created-at="post.created_at"
        :hero="post.images[0]"
        :author-loading="isAuthorLoading"
        :author="author"
      />

      <Skeleton v-if="isPostLoading" height="800px" />
      <PostBody v-else :blocks="post.body" />

      <PostReview
        v-if="post && post.category === 'critica' && post.review"
        v-model:review="post.review"
      />

      <Skeleton v-if="isPostLoading" height="500px" />
      <PostFooter
        v-else
        :spotify="post.spotify"
        :tags="tags"
        :author-loading="isAuthorLoading"
        :author="author"
      />
    </article>

    <section class="post__related-posts">
      <div class="container">
        <Text as="h2" type="title-h1" color="igor">Relacionados</Text>
      </div>

      <CardsGrid
        :cards="relatedPosts"
        :loading="isRelatedPostsLoading"
        :number-of-cards="6"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
  import usePost from '@/composables/post'
  import useRelatedPosts from '@/composables/related-posts'
  import useAuthor from '@/composables/author'
  import useTags from '@/composables/tags'

  const route = useRoute()

  const { post, isPostLoading, getPost } = usePost()
  const { relatedPosts, isRelatedPostsLoading, getRelatedPosts } =
    useRelatedPosts()
  const { author, isAuthorLoading, getAuthor } = useAuthor()
  const { tags, getTags } = useTags()

  onMounted(async () => {
    await getPost(route.params.post as string)

    if (post.value) {
      await getRelatedPosts(post.value.id, post.value.tags, post.value.category)
      await getAuthor(post.value.author)
      if (post.value.tags) await getTags(post.value.tags)

      useHead({
        title: `Igor Fala de Música | ${post.value.title}`,
        meta: [
          {
            name: 'description',
            content: post.value.subtitle,
          },
          {
            property: 'og:title',
            content: `Igor Fala de Música | ${post.value.title}`,
          },
          {
            property: 'og:description',
            content: post.value.subtitle,
          },
          {
            property: 'og:image',
            content: post.value.images[1].file,
          },
        ],
      })
    } else {
      await navigateTo('/404')
    }
  })
</script>

<style lang="scss" scoped>
  .post {
    .breadcrumb-loading {
      height: 90px;

      @include mobile {
        height: 80px;
      }
    }

    &__article {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 840px;
      margin: 0 auto;
      padding: 0 20px;
    }

    &__related-posts {
      margin-top: 80px;

      @include mobile {
        margin-top: 60px;
      }

      h2 {
        margin-bottom: 20px;

        &::after {
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
