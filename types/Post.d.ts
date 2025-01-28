type Categories = 'Devaneio' | 'Crítica' | 'Lista' | 'Playlist'

type Post = {
  slug: string
  image: string
  date: string
  category: Categories
  title: string
}

type Pagination = {
  currentPage: number
  totalPages: number
}
