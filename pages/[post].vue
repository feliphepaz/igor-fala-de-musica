<template>
  <main class="post">
    <Breadcrumb />

    <article class="post__article">
      <PostHeader />
      <PostBody />
      <PostReview />
      <PostFooter />
    </article>
  </main>
</template>

<style lang="scss" scoped>
  .post {
    &__article {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 840px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
</style>
