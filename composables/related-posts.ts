import { ref } from 'vue'
import useSupabase from '@/composables/supabase'
import useTag from '@/composables/tag'
import usePosts from '@/composables/posts'

export default function useRelatedPosts() {
  const { supabase } = useSupabase()
  const { getTag } = useTag()
  const { posts, getPosts } = usePosts()

  const isRelatedPostsLoading = ref(true)
  const relatedPosts = ref<Post[]>([])

  async function getRelatedPosts(
    postId: number,
    tags: string[] | null,
    category: string,
  ) {
    isRelatedPostsLoading.value = true

    let postsWithSameTags: Post[] = []
    let idsWithSameTags: number[] = []
    let allRelatedPosts: Post[] = []

    if (tags) {
      for (const tag of tags) {
        const newTags = await getTag(tag)
        idsWithSameTags = [...idsWithSameTags, ...newTags]
      }

      const { data } = await supabase
        .from('posts')
        .select()
        .in('id', idsWithSameTags)

      postsWithSameTags = data as Post[]
    }

    const postsWithSameCategory = await supabase
      .from('posts')
      .select()
      .eq('category', category)

    allRelatedPosts = [
      ...postsWithSameTags,
      ...(postsWithSameCategory.data as Post[]),
    ]

    if (allRelatedPosts.length < 6) {
      await getPosts()
      allRelatedPosts = [...allRelatedPosts, ...posts.value]
    }

    const allRelatedPostsIds = allRelatedPosts
      .map((post) => post.id)
      .filter((id) => id !== postId)

    const filteredRelatedPosts = [...new Set(allRelatedPostsIds)].splice(0, 6)

    const { data } = await supabase
      .from('posts')
      .select()
      .in('id', filteredRelatedPosts)

    relatedPosts.value = data as Post[]
    isRelatedPostsLoading.value = false
  }

  return {
    relatedPosts,
    isRelatedPostsLoading,
    getRelatedPosts,
  }
}
