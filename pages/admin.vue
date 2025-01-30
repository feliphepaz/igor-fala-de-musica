<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <input type="file" @change="handleFileChange" />
      <button type="submit">Enviar Imagem</button>
    </form>
    <div v-if="uploadedFilePath">
      <p>
        Imagem enviada com sucesso! Caminho: {{ '/images' + uploadedFilePath }}
      </p>
    </div>
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  // Definindo os tipos das variáveis
  const file = ref<File | null>(null) // 'file' é um File ou null
  const uploadedFilePath = ref<string | null>(null) // Caminho da imagem como string ou null

  // Tipo para o evento do input de arquivo
  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement // Fazemos o cast do target para HTMLInputElement
    const selectedFile = target.files?.[0]
    if (selectedFile) {
      file.value = selectedFile
    }
  }

  const handleSubmit = async () => {
    if (!file.value) {
      console.error('Nenhum arquivo selecionado.')
      return
    }

    const formData = new FormData()
    formData.append('file', file.value)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        uploadedFilePath.value = data[0] // Supondo que o retorno seja o caminho da imagem
      } else {
        console.error('Falha ao enviar imagem.')
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error)
    }
  }
</script>
