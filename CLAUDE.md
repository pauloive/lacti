# CLAUDE.md — Landing Page Corporativa

## Projeto
Landing page de apresentação para a Lactifoz - Transformação e Comércio de Peixes e Marisco, S.A. (Portugal).
Inspiração visual: https://caxamar.pt — design premium, limpo, elegante.
Setor: alimentar (peixes e marisco).

## Stack
- Next.js (App Router)
- Vanilla CSS (sem Tailwind)
- Google Fonts: Inter (corpo), Playfair Display (títulos)
- Deploy: Vercel + GitHub

## Design
- Paleta: azul-marinho escuro (#0a1f3f), dourado (#c9a84c), branco (#ffffff), cinza (#f5f5f5)
- Estilo premium: imagens grandes, animações suaves, espaçamentos generosos
- Mobile-first: tudo deve funcionar bem em telemóvel
- Idioma: Português (PT-PT)

## Estrutura da Página
1. Navbar (logo Lactifoz + links + hamburger mobile)
2. Hero banner (imagem grande + slogan + CTA)
3. Barra de valores/serviços (ícones + texto)
4. Sobre Nós (texto + imagem)
5. Produtos (3-5 categorias com imagens, layout alternado)
6. Localização (Google Maps + morada)
7. Footer (logo + links + redes sociais + copyright)

## Empresa
- Nome: Lactifoz - Transformação e Comércio de Peixes e Marisco, S.A.
- Setor: transformação e comércio de peixes e marisco
- Logo: /public/images/lactifoz-logo.png

## Regras
- Textos placeholder em português — o cliente substitui depois
- Cada componente num ficheiro separado em /src/components/
- CSS global em /src/app/globals.css com variáveis CSS
- Imagens em /public/images/
- Usar semantic HTML (header, main, section, footer)
- Manter SEO: title, meta description, heading hierarchy (um h1 por página)
- Código limpo
