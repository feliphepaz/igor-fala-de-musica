type BlockType = 'paragraph' | 'highlight' | 'photo' | 'youtube'

type Block = {
  type: BlockType
  content?: string
  verses?: string[]
  music?: string
  band?: string
  file?: string
  copyright?: string
  description?: string
}
