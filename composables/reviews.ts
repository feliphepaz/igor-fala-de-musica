import { ref, reactive } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function useReviews() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 12

  const isReviewsLoading = ref(true)
  const reviews = ref<Post[]>([])
  const reviewsPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getReviews(page: number) {
    isReviewsLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'critica')
      .order('created_at', { ascending: false })
      .range(start, end)

    reviews.value = data as Post[]
    isReviewsLoading.value = false
  }

  async function getReviewsPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    reviewsPagination.totalPages = totalPages
  }

  return {
    reviews,
    reviewsPagination,
    isReviewsLoading,
    getReviews,
    getReviewsPagination,
  }
}
