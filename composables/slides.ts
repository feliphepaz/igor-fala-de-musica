import { ref } from 'vue'
import useSupabase from '@/composables/supabase'

export default function useSlides() {
  const { supabase } = useSupabase()

  const isSlidesLoading = ref(true)
  const slides = ref<Post[]>([])

  async function getSlides() {
    isSlidesLoading.value = true

    const { data } = await supabase
      .from('posts')
      .select()
      .order('created_at', { ascending: false })
      .limit(3)

    slides.value = data as Post[]
    isSlidesLoading.value = false
  }

  return {
    slides,
    isSlidesLoading,
    getSlides,
  }
}
