import { ref, reactive } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function useLastPosts() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 9

  const isLastPostsLoading = ref(true)
  const lastPosts = ref<Post[]>([])
  const lastPostsPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getLastPosts(page: number) {
    isLastPostsLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .order('created_at', { ascending: false })
      .range(start, end)

    lastPosts.value = data as Post[]
    isLastPostsLoading.value = false
  }

  async function getLastPostsPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    lastPostsPagination.totalPages = totalPages
  }

  return {
    lastPosts,
    lastPostsPagination,
    isLastPostsLoading,
    getLastPosts,
    getLastPostsPagination,
  }
}
