type Category = 'devaneio' | 'lista' | 'critica' | 'playlist'

type Spotify = {
  embed: boolean
  id: string | null
}

type Review = {
  album: {
    cover: string
    year?: string
    name: string
    artist: string
  }
  review: {
    score: string
    ratingText: string
  }
}

type Post = {
  id: number
  created_at: string
  title: string
  slug: string
  subtitle: string
  category: Category
  tags: string[] | null
  images: [
    {
      type: 'hero'
      file: string
      copyright?: string | null
      description?: string | null
    },
    {
      type: 'thumbnail'
      file: string
    },
  ]
  body: Block[]
  review?: Review
  spotify: Spotify
  author: number
  highlight: boolean
}

type Pagination = {
  currentPage: number
  totalPages: number
}
