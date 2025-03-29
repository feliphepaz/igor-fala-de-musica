import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function usePosts() {
  const { supabase } = useSupabase()

  const posts = ref<Post[]>([])

  async function getPosts() {
    const { data } = await supabase.from('posts').select()

    posts.value = data as Post[]
  }

  return {
    posts,
    getPosts,
  }
}
