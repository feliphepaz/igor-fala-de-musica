import { ref, reactive } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function useLists() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 12

  const isListsLoading = ref(true)
  const lists = ref<Post[]>([])
  const listsPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getLists(page: number) {
    isListsLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'lista')
      .order('created_at', { ascending: false })
      .range(start, end)

    lists.value = data as Post[]
    isListsLoading.value = false
  }

  async function getListsPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    listsPagination.totalPages = totalPages
  }

  return {
    lists,
    listsPagination,
    isListsLoading,
    getLists,
    getListsPagination,
  }
}
