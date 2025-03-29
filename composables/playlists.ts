import { ref, reactive } from 'vue'
import useSupabase from '@/composables/supabase'
import usePosts from '@/composables/posts'

export default function usePlaylists() {
  const { supabase } = useSupabase()
  const { posts, getPosts } = usePosts()

  const postsPerPage = 12

  const isPlaylistsLoading = ref(true)
  const playlists = ref<Post[]>([])
  const playlistsPagination = reactive<Pagination>({
    currentPage: 1,
    totalPages: 1,
  })

  async function getPlaylists(page: number) {
    isPlaylistsLoading.value = true

    const start = (page - 1) * postsPerPage
    const end = start + postsPerPage - 1

    const { data } = await supabase
      .from('posts')
      .select()
      .eq('category', 'playlist')
      .order('created_at', { ascending: false })
      .range(start, end)

    playlists.value = data as Post[]
    isPlaylistsLoading.value = false
  }

  async function getPlaylistsPagination() {
    await getPosts()

    const postsLength = posts.value.length

    let totalPages = Math.floor(postsLength / postsPerPage)
    if (postsLength % postsPerPage !== 0) totalPages += 1

    playlistsPagination.totalPages = totalPages
  }

  return {
    playlists,
    playlistsPagination,
    isPlaylistsLoading,
    getPlaylists,
    getPlaylistsPagination,
  }
}
