import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function usePostsMostRead() {
  const { supabase } = useSupabase()

  const isPostsMostReadLoading = ref(true)
  const postsMostRead = ref<Post[]>([])

  async function getPostsMostRead() {
    isPostsMostReadLoading.value = true
    const { data } = await supabase
      .from('posts')
      .select()
      .eq('highlight', true)
      .limit(4)

    postsMostRead.value = data as Post[]
    isPostsMostReadLoading.value = false
  }

  return {
    postsMostRead,
    isPostsMostReadLoading,
    getPostsMostRead,
  }
}
