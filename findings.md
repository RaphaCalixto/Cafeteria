# Findings & Architectural Decisions: Cafeteria "Jardim Secreto • Beco do Café"

## 1. Decisões Técnicas e Stack
- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Motor de Animação de Scroll:** GSAP com plugin ScrollTrigger registrado oficialmente e integrado via `@gsap/react` (`useGSAP`) para isolamento de escopo e compatibilidade estrita com React.
- **Microinterações e Transições de Estado:** Framer Motion (`motion.div`, `AnimatePresence`) para filtros de cardápio, modais e transições de cards.
- **Tipografia:** Serif editorial imponente (Playfair Display / Instrument Serif vibe) combinada com Sans geométrica legível (Plus Jakarta Sans).
- **Paleta de Cores (Editorial Botânico & Dark Warm):**
  - Fundo Primário / Dark Espresso: `#0f0c0a` e `#17120e`
  - Fundo Secundário / Roasted Hazelnut: `#211a14`
  - Acento Botânico / Olive Moss: `#3a4a3b` e `#283618`
  - Acento Quente / Terracotta & Bronze: `#c26d45` e `#d4a373`
  - Texto e Linho / Warm Cream: `#f5eee6` e `#d8cfc4`

## 2. Scrollytelling Architecture (3 Fases Pinned)
- Usaremos um container pinned no ScrollTrigger com pin-spacing adequado:
  - **Fase 1 (0% - 30%):** Beco botânico fechado com hera, flores iluminadas por luz âmbar e porta de madeira maciça de duas folhas centralizada.
  - **Fase 2 (30% - 65%):** Rotação 3D das folhas da porta (`rotateY` negativa na esquerda, positiva na direita com `perspective: 1200px`), parallax das folhagens periféricas para fora da tela, fade-in e scale sutil do salão interno caloroso da cafeteria.
  - **Fase 3 (65% - 100%):** Transição de foco cinematográfico do salão para o close-up requintado de uma sobremesa artesanal ao lado de uma xícara de café fumegante.
  - **Textos:** Orquestração de cada bloco de copy em sincronicidade com os momentos exatos do scroll, com entrada e saída elegantes.

## 3. Filosofia Anti-"AI Slop" para os Cards
- Proibição de grids repetitivos de 3 cards idênticos.
- Uso de Bento Grid com cards variando entre:
  - Card Hero Duplo (destaque da casa com imagem panorâmica e badge brilhante)
  - Card Retrato Alto (fotografia vertical de bebida autoral)
  - Card Minimalista com Notas de Degustação (foco tipográfico e tabela sensorial)
  - Card Interativo de Sobremesa com preview de camadas
