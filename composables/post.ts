import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function usePost() {
  const { supabase } = useSupabase()

  const isPostLoading = ref(true)
  const post = ref<Post>()

  async function getPost(slug: string) {
    isPostLoading.value = true
    const { data } = await supabase.from('posts').select().eq('slug', slug)

    if (data) post.value = data[0]
    isPostLoading.value = false
  }

  return {
    post,
    isPostLoading,
    getPost,
  }
}
