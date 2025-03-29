import { ref } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function usePostsFound() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 12

  const isPostsFoundLoading = ref(true)
  const postsFound = ref<Post[]>([])
  const postsFoundPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getPostsFound(page: number, term: string) {
    isPostsFoundLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .ilike('title', `%${term}%`)
      .order('created_at', { ascending: false })
      .range(start, end)

    postsFound.value = data as Post[]
    isPostsFoundLoading.value = false
  }

  async function getPostsFoundPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    postsFoundPagination.totalPages = totalPages
  }

  return {
    postsFound,
    postsFoundPagination,
    isPostsFoundLoading,
    getPostsFound,
    getPostsFoundPagination,
  }
}
