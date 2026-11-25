# Igor Fala de Música

Blog brasileiro dedicado a críticas, listas e devaneios sobre música — especialmente rock, indie e música alternativa.

## Sobre o projeto

O **Igor Fala de Música** é uma aplicação construída com Nuxt 3 e Vue 3. Os conteúdos são organizados em categorias, exibidos em páginas públicas e consultados a partir do Supabase.

## Funcionalidades

- Página inicial com destaques e posts recentes
- Seções de críticas, listas e devaneios
- Páginas individuais de artigos
- Busca de conteúdos
- Navegação por categorias e tags
- Layout responsivo
- Metadados e Open Graph configurados
- Carrosséis e componentes reutilizáveis

## Tecnologias

- [Nuxt 3](https://nuxt.com/) — framework Vue
- [Vue 3](https://vuejs.org/) — interfaces reativas
- [TypeScript](https://www.typescriptlang.org/) — tipagem
- [SCSS/Sass](https://sass-lang.com/) — estilos
- [Supabase](https://supabase.com/) — dados da aplicação
- [Nuxt Image](https://image.nuxt.com/) — otimização de imagens
- [VueUse](https://vueuse.org/) — utilitários Vue
- [Swiper](https://swiperjs.com/) — carrosséis
- [Google Fonts](https://fonts.google.com/) — tipografia
- [Yarn](https://yarnpkg.com/) — gerenciamento de pacotes

## Pré-requisitos

- Node.js 18 ou superior
- Yarn 1.x
- Um projeto Supabase com acesso à API

## Instalação

Clone o repositório:

```bash
git clone https://github.com/feliphepaz/igor-fala-de-musica.git
cd igor-fala-de-musica
```

Instale as dependências:

```bash
yarn install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_KEY=sua_chave_publica
```

Essas variáveis são disponibilizadas publicamente pela configuração do Nuxt por meio de `runtimeConfig.public`.

> Use a chave publicável (`anon`) do Supabase. Não coloque chaves secretas ou tokens administrativos no código público ou em variáveis públicas.

## Executando localmente

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `yarn dev` | Inicia o servidor de desenvolvimento |
| `yarn build` | Gera o build de produção |
| `yarn generate` | Gera uma versão estática |
| `yarn preview` | Pré-visualiza o build localmente |
| `yarn postinstall` | Executa a preparação do Nuxt |

## Estrutura do projeto

```text
.
├── app.vue             # Layout geral da aplicação
├── assets/             # Estilos, fontes e recursos estáticos
├── components/         # Componentes Vue reutilizáveis
├── composables/        # Composables e lógica reutilizável
├── mocks/              # Dados de teste ou demonstração
├── pages/              # Rotas da aplicação
├── public/             # Arquivos públicos
├── server/             # Rotas e lógica de servidor
├── types/              # Definições de tipos TypeScript
├── nuxt.config.ts      # Configurações do Nuxt
└── package.json        # Dependências e scripts
```

## Build de produção

Gere o build:

```bash
yarn build
```

Pré-visualize o resultado:

```bash
yarn preview
```

Para uma publicação estática:

```bash
yarn generate
```

## Estilo e formatação

O projeto usa Prettier e SCSS. As regras de formatação estão definidas em `.prettierrc.json`.

Os estilos globais ficam em `assets/scss`, com variáveis e mixins compartilhados configurados automaticamente pelo Nuxt.

## Licença

Nenhuma licença foi definida neste repositório. Consulte o proprietário antes de reutilizar o código ou os conteúdos.
