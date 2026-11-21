# Task Plan: Cafeteria "Jardim Secreto • Beco do Café"

## 1. Visão Geral do Projeto
Desenvolvimento de uma experiência web imersiva e cinematográfica para uma cafeteria artesanal escondida em um jardim botânico / beco.
O projeto utiliza **Next.js (App Router)**, **Tailwind CSS**, **GSAP (com ScrollTrigger & @gsap/react)** e **Framer Motion**, com design editorial anti-"AI slop", paleta Dark Warm/Botânica e cards de cardápio com diagramação e tamanhos diferenciados.

---

## 2. Fases do Projeto

### Phase 1: Setup do Projeto e Infraestrutura Base
- **Status:** complete
- **Tarefas:**
  - [x] Inicializar projeto Next.js com TypeScript e Tailwind CSS.
  - [x] Instalar dependências de animação: `gsap`, `@gsap/react`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
  - [x] Configurar tipografia e paleta customizada no Tailwind (Cores: Coffee, Botanical, Cream, Terracotta, Brass).
  - [x] Garantir `.gitignore` com proteção a variáveis de ambiente e arquivos sensíveis.

### Phase 2: Curadoria de Assets, Estrutura de Dados e Tipos
- **Status:** complete
- **Tarefas:**
  - [x] Estruturar tipos em `src/types/cafe.ts` (Categorias, Tipos de Card, Sensoriais, Layouts bento).
  - [x] Criar base do cardápio em `src/data/menuData.ts` com notas sensoriais, preços, fotos e layouts diferenciados.
  - [x] Criar roteiro e dados dos 3 Atos de Scrollytelling em `src/data/scrollyData.ts`.
  - [x] Criar galeria de atmosfera em `src/data/galleryData.ts`.

### Phase 3: Mecânica de Scrollytelling e Banner Hero Cinemático
- **Status:** complete
- **Tarefas:**
  - [x] Criar componente `HeroScrollytelling` com GSAP ScrollTrigger e `useGSAP`.
  - [x] Implementar Ato 1: Beco/Jardim fechado com luz suave, flores e porta de madeira com perspectiva 3D + Copy 1.
  - [x] Implementar Ato 2: Abertura das portas em 3D, afastamento de folhagens e luz âmbar revelando o interior da cafeteria + Copy 2.
  - [x] Implementar Ato 3: Zoom e transição cinematográfica para mesa com café especial, sobremesa artesanal e vapor sutil + Copy 3.
  - [x] Adicionar timeline HUD com navegação direta entre atos e indicador de scroll.

### Phase 4: Layout Editorial do Cardápio & Cards Assimétricos
- **Status:** complete
- **Tarefas:**
  - [x] Desenvolver `MenuSection` com Bento Grid Editorial (cards Hero, Tall, Wide, Standard e Compact).
  - [x] Filtros dinâmicos por categoria com Framer Motion (`layoutId="activeFilterPill"`).
  - [x] Campo de busca rápida em tempo real por grão, ingrediente ou nota sensorial.
  - [x] Modal interativo `ItemDetailModal` com fotos em alta definição, barras de perfil aromático e harmonização.

### Phase 5: Galeria de Fotos, Experiência da Casa & Localização
- **Status:** complete
- **Tarefas:**
  - [x] Criar galeria editorial `AtmosphereGallery` com lightbox e fotos do pátio, torrefação e barista.
  - [x] Criar seção de manifesto e história `StoryAndManifesto` com métricas de altitude e grãos de 86+ pontos.
  - [x] Criar seção de horários e localização `LocationAndHours` com instruções de acesso ao beco e contato via WhatsApp.
  - [x] Criar rodapé artesanal `Footer` com navegação suave.

### Phase 6: Polimento, Responsividade e Verificação Final
- **Status:** complete
- **Tarefas:**
  - [x] Otimizar tipografia e fontes Google com fallback seguro para build autônomo.
  - [x] Validar compilação de produção (`next build`) com 100% de sucesso (páginas estáticas geradas).
  - [x] Garantir animações a 60fps com aceleração por GPU (transforms 3D, perspective, opacidades).
  - [x] Ajustar o banner do beco conforme a imagem de referência do usuário com a frase "O Jardim Secreto não tem placa.", porta verde e caminhada da câmera.
  - [x] Corrigir a área preta desativando `overflow-x-hidden` que quebrava o sticky e migrando para o `pin: true` nativo do GSAP ScrollTrigger.
  - [x] Validação visual ponta a ponta com o subagente do navegador.
