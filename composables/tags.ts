import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useTags() {
  const { supabase } = useSupabase()

  const tags = ref<Tag[]>([])

  async function getTags(slugs: string[]) {
    const { data } = await supabase.from('tags').select().in('slug', slugs)

    tags.value = data as Tag[]
  }

  return {
    tags,
    getTags,
  }
}
