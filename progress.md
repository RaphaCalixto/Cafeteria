# Progress Log: Cafeteria "Jardim Secreto • Beco do Café"

## Registro Cronológico de Atividades

### [2026-11-19 14:34] - Intake & Planejamento Inicial
- Executado formulário de onboarding com o usuário via `ask_question`.
- Definida stack: Next.js + Tailwind CSS + Framer Motion + GSAP ScrollTrigger.
- Definida direção visual: Editorial Botânico & Warm Dark.
- Criados arquivos da tríade de planejamento (`task_plan.md`, `findings.md`, `progress.md`).
- Próximo passo: Apresentar o Blueprint para confirmação do usuário e iniciar o scaffolding do projeto.

### [2026-11-19 15:13] - Conclusão da Fase 1 e Início da Fase 2
- Inicializado setup Next.js com App Router e TypeScript.
- Instaladas dependências: `gsap`, `@gsap/react`, `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- Configurados `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `next.config.mjs`, `.gitignore` e `.env.example`.
- Criados `src/lib/utils.ts` e `src/types/cafe.ts`.
- Iniciada Fase 2: Construção da base de dados e curadoria de imagens de alta resolução para o cardápio e para as 3 etapas de scrollytelling.

### [2026-11-19 15:14] - Conclusão da Fase 2 e Início da Fase 3
- Finalizada a estruturação de tipos e dados de cardápio, fotos e scrollytelling.
- Itens do cardápio enriquecidos com notas sensoriais, harmonização, origem e tipos de layout assimétrico (`hero`, `tall`, `wide`, `standard`, `compact`).
- Criados os roteiros dos 3 Atos de Scrollytelling com copies poéticas e assets visuais.
- Iniciada Fase 3: Construção do componente `HeroScrollytelling.tsx` utilizando GSAP ScrollTrigger, `@gsap/react` e Framer Motion.

### [2026-11-19 15:17] - Conclusão das Fases 3 e 4
- Implementado `HeroScrollytelling.tsx`: Mecânica de scrollytelling de 3 atos usando GSAP ScrollTrigger e `useGSAP` oficial com scope. Portas de madeira em 3D que abrem com o scroll, parallax de folhagens e flores, revelação do salão da cafeteria com luz âmbar e transição de foco na sobremesa com café fumegante.
- Implementado `ItemDetailModal.tsx` com animações em Framer Motion (`AnimatePresence`, spring easing) e barras de perfil sensorial de sabor.
- Implementado `MenuSection.tsx` com Bento Grid Editorial assimétrico (Cards `hero`, `tall`, `wide`, `standard` e `compact`), filtros de categoria e busca rápida.
- Iniciada Fase 5: Criação da Galeria de Fotos da Casa, História/Manifesto e Seção de Localização e Horários.

### [2026-11-19 15:21] - Conclusão das Fases 5 e 6 & Validação do Projeto
- Implementada a galeria de fotos `AtmosphereGallery.tsx` com visualização em Lightbox.
- Implementada a seção `StoryAndManifesto.tsx` detalhando a história da cafeteria, os grãos de altitude e a torrefação artesanal.
- Implementada a seção `LocationAndHours.tsx` com horários da semana, mapa estilizado, instrução para encontrar o portal no beco e botão de WhatsApp.
- Implementado o componente `Footer.tsx` com navegação de retorno ao topo.
- Integrado tudo na página principal `src/app/page.tsx`.
- Executado `next build` com sucesso absoluto: compilação estática concluída com geração de rotas sem erros de TypeScript ou lint.
- Projeto 100% pronto para visualização e execução local via `npm run dev`.

### [2026-11-19 17:14] - Ajuste da Imagem de Referência do Beco & Eliminação da Área Preta
- Incorporada a imagem de referência fornecida pelo usuário (`public/images/green-door-tunnel.jpg`) com o beco botânico, lanterna acesa e a frase marcante *"O Jardim Secreto não tem placa."*.
- Implementada a mecânica da câmera vindo de trás no beco (dolly-in / caminhada de avanço pelos ramos de heras) e aproximando da porta verde.
- Implementada a abertura 3D da porta verde de madeira entalhada revelando a luz dourada do interior.
- Diagnosticada e resolvida a causa da tela/área preta:
  - O container pai continha `overflow-x-hidden`, o que no motor dos navegadores desabilita `position: sticky`.
  - Migrado para o `pin: true` nativo do GSAP ScrollTrigger com `anticipatePin: 1` e removido o `overflow-x-hidden`.
- Testado e validado visualmente ponta a ponta com o subagente de browser, confirmando zero áreas pretas e transição 100% contínua e fluida para o cardápio.

### [2026-11-19 17:41] - Integração do Vídeo Real com Scrubbing Fluido pelo Scroll
- Substituído o wallpaper estático e a porta simulada pelo vídeo real enviado pelo usuário (`public/videos/door-entry.mp4`).
- Implementado sistema de scrubbing de alta performance:
  - Eliminação de dependências reativas do `useGSAP` para evitar recriação de timelines e duplicação de `.pin-spacer`.
  - Mecanismo de seek assíncrono e não-bloqueante via listener do evento `seeked` do HTML5 Video.
  - Adição de `poster` com o primeiro frame do beco para carregamento visual instantâneo a 0ms no topo.
- Resultados validados no navegador:
  - Scroll = 0: visualização imediata do beco, da porta verde e da frase *"O Jardim Secreto não tem placa."* (zero tela preta).
  - Scroll > 0: a câmera avança pelo beco e a porta se abre fisicamente no vídeo com fluidez.
  - Final do vídeo: fusão perfeita em cross-fade com o interior do salão (Ato II), foco na mesa com café e sobremesa (Ato III), e despinagem contínua para o cardápio bento grid.

### [2026-11-19 17:47] - Remoção do Poster Estático & Exibição Direta em 1080p Nativo
- Removido o atributo `poster` de baixa resolução do elemento `<video>`.
- O vídeo em Full HD 1080p (`/videos/door-entry.mp4`) agora é renderizado diretamente desde o primeiro milissegundo com fidelidade de cores, texturas de tijolos e iluminação âmbar nítida.
- Suavizados os gradientes para preservar o contraste sem degradar a pureza visual da gravação.
- Verificação concluída com 100% de sucesso no navegador: nitidez cristalina, zero engasgos e sincronia perfeita do scroll com a abertura da porta.

### [2026-11-19 18:00] - Adição da Copy Cinemática na Revelação da Cafeteria (Ato II)
- Implementada a copy poética de alto impacto no momento exato em que a porta abre e o salão interno da cafeteria é revelado:
  - Badge: `☕ ATO II • O SALÃO DO BECO`
  - Título: *"Ao cruzar o portal, o tempo desacelera."*
  - Descritivo: *"Onde o aroma do grão fresco encontra a luz âmbar acolhedora, mesas de madeira nobre e a calma de uma segunda casa."*
- Sincronização e transição suave validadas no navegador com 100% de precisão visual.

### [2026-11-20 22:04] - Publicação do Repositório no GitHub
- Inicializado repositório Git local.
- Configurado remote `origin`: `https://github.com/RaphaCalixto/Cafeteria.git`.
- Criado `README.md` completo e detalhado.
- Realizado commit raiz e push com sucesso para o branch `main`.
