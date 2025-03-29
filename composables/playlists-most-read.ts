import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function usePlaylistsMostRead() {
  const { supabase } = useSupabase()

  const isPlaylistsMostReadLoading = ref(true)
  const playlistsMostRead = ref<Post[]>([])

  async function getPlaylistsMostRead() {
    isPlaylistsMostReadLoading.value = true
    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'playlist')
      .eq('highlight', true)
      .limit(4)

    playlistsMostRead.value = data as Post[]
    isPlaylistsMostReadLoading.value = false
  }

  return {
    playlistsMostRead,
    isPlaylistsMostReadLoading,
    getPlaylistsMostRead,
  }
}
