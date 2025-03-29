import { ref } from 'vue'
import useSupabase from '@/composables/supabase'
import useTag from '@/composables/tag'
import usePosts from '@/composables/posts'

export default function usePost() {
  const { supabase } = useSupabase()
  const { getTag } = useTag()
  const { posts, getPosts } = usePosts()

  const isPostLoading = ref(true)
  const post = ref<Post>()

  const isRelatedPostsLoading = ref(true)
  const relatedPosts = ref<Post[]>([])

  async function getPost(slug: string) {
    isPostLoading.value = true
    const { data } = await supabase.from('posts').select().eq('slug', slug)

    if (data) post.value = data[0]
    isPostLoading.value = false
  }

  async function getRelatedPosts(
    postId: number,
    tags: string[],
    category: string,
  ) {
    isRelatedPostsLoading.value = true

    let idsWithSameTags: number[] = []
    let allRelatedPosts: Post[] = []

    for (const tag of tags) {
      const newTags = await getTag(tag)
      idsWithSameTags = [...idsWithSameTags, ...newTags]
    }

    const postsWithSameTags = await supabase
      .from('posts')
      .select()
      .in('id', idsWithSameTags)

    const postsWithSameCategory = await supabase
      .from('posts')
      .select()
      .eq('category', category)

    allRelatedPosts = [
      ...(postsWithSameTags.data as Post[]),
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
    post,
    isPostLoading,
    isRelatedPostsLoading,
    relatedPosts,
    getPost,
    getRelatedPosts,
  }
}
