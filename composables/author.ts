import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useAuthor() {
  const { supabase } = useSupabase()

  const isAuthorLoading = ref(true)
  const author = ref<Author>()

  async function getAuthor(id: number) {
    isAuthorLoading.value = true
    const { data } = await supabase.from('authors').select().eq('id', id)

    if (data) author.value = data[0]
    isAuthorLoading.value = false
  }

  return {
    author,
    isAuthorLoading,
    getAuthor,
  }
}
