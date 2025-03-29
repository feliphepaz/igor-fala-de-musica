import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useReviewsMostRead() {
  const { supabase } = useSupabase()

  const isReviewsMostReadLoading = ref(true)
  const reviewsMostRead = ref<Post[]>([])

  async function getReviewsMostRead() {
    isReviewsMostReadLoading.value = true
    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'critica')
      .eq('highlight', true)
      .limit(4)

    reviewsMostRead.value = data as Post[]
    isReviewsMostReadLoading.value = false
  }

  return {
    reviewsMostRead,
    isReviewsMostReadLoading,
    getReviewsMostRead,
  }
}
