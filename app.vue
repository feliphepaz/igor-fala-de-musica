<template>
  <Header />
  <NuxtPage />
  <Footer />
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Igor Fala de Música',
    ogTitle: 'Igor Fala de Música',
    description:
      'A Igor Fala de Música é o blog mais sensachocrível sobre música que você vai ver por aí, pelo menos é o que nossos amigos disseram. Tudo sobre rock, indie e música alternativa, da forma mais amadora possível.',
    ogDescription:
      'A Igor Fala de Música é o blog mais sensachocrível sobre música que você vai ver por aí, pelo menos é o que nossos amigos disseram. Tudo sobre rock, indie e música alternativa, da forma mais amadora possível.',
    ogImage:
      'https://soaccrxkkbkviaqhzrmp.supabase.co/storage/v1/object/public/misc//og-image.jpg',
    twitterCard: 'summary_large_image',
  })
</script>
