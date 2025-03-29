import { ref, reactive } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function useDaydreams() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 12

  const isDaydreamsLoading = ref(true)
  const daydreams = ref<Post[]>([])
  const daydreamsPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getDaydreams(page: number) {
    isDaydreamsLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'devaneio')
      .order('created_at', { ascending: false })
      .range(start, end)

    daydreams.value = data as Post[]
    isDaydreamsLoading.value = false
  }

  async function getDaydreamsPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    daydreamsPagination.totalPages = totalPages
  }

  return {
    daydreams,
    daydreamsPagination,
    isDaydreamsLoading,
    getDaydreams,
    getDaydreamsPagination,
  }
}
