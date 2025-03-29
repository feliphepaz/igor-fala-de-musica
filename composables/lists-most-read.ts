import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useListsMostRead() {
  const { supabase } = useSupabase()

  const isListsMostReadLoading = ref(true)
  const listsMostRead = ref<Post[]>([])

  async function getListsMostRead() {
    isListsMostReadLoading.value = true
    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'lista')
      .limit(4)

    listsMostRead.value = data as Post[]
    isListsMostReadLoading.value = false
  }

  return {
    listsMostRead,
    isListsMostReadLoading,
    getListsMostRead,
  }
}
