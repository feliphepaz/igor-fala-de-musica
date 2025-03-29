import useSupabase from '@/composables/supabase'

export default function useTag() {
  const { supabase } = useSupabase()

  async function getTag(slug: string) {
    const { data } = await supabase.from('tags').select().eq('slug', slug)

    if (data) return data[0].posts
  }

  return {
    getTag,
  }
}
