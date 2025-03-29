import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useLastReviews() {
  const { supabase } = useSupabase()

  const isLastReviewsLoading = ref(true)
  const lastReviews = ref<Post[]>([])

  async function getLastReviews() {
    isLastReviewsLoading.value = true

    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'critica')
      .order('created_at', { ascending: false })
      .limit(4)

    lastReviews.value = data as Post[]
    isLastReviewsLoading.value = false
  }

  return {
    lastReviews,
    isLastReviewsLoading,
    getLastReviews,
  }
}
