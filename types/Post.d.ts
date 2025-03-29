type Post = {
  id: number
  created_at: string
  title: string
  slug: string
  subtitle: string
  category: string
  tags: string[] | null
  images: [
    {
      type: 'hero'
      file: string
    },
    {
      type: 'thumbnail'
      file: string
    },
  ]
  body: Block[]
  review?: Review
  spotify: {
    embed: boolean
    id: string | null
  }
}

type Pagination = {
  currentPage: number
  totalPages: number
}
