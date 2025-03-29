import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useDaydreamsMostRead() {
  const { supabase } = useSupabase()

  const isDaydreamsMostReadLoading = ref(true)
  const daydreamsMostRead = ref<Post[]>([])

  async function getDaydreamsMostRead() {
    isDaydreamsMostReadLoading.value = true
    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'devaneio')
      .eq('highlight', true)
      .limit(4)

    daydreamsMostRead.value = data as Post[]
    isDaydreamsMostReadLoading.value = false
  }

  return {
    daydreamsMostRead,
    isDaydreamsMostReadLoading,
    getDaydreamsMostRead,
  }
}
