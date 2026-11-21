export interface ScrollyAct {
  step: number;
  tag: string;
  title: string;
  subtitle: string;
  copy: string;
  accent: string;
}

export const SCROLLY_ACTS: ScrollyAct[] = [
  {
    step: 1,
    tag: "Ato I • O Portal Oculto",
    title: "O Beco do Jardim",
    subtitle: "Onde o barulho da cidade se transforma em silêncio e brisa",
    copy: "Escondido entre heras centenárias, lanternas de latão e folhagens que guardam o caminho, existe um refúgio que poucos conhecem. Role para abrir a porta e descobrir o que há do outro lado.",
    accent: "🌿 O Segredo do Beco",
  },
  {
    step: 2,
    tag: "Ato II • O Acolhimento",
    title: "O Salão do Beco",
    subtitle: "Onde o aroma de torra artesanal encontra a luz âmbar",
    copy: "Ao cruzar o limiar, o ritmo desacelera. Mesas de madeira de demolição, cerâmicas moldadas à mão e o som ritmado do espresso sendo extraído com precisão milimétrica.",
    accent: "☕ A Casa do Café",
  },
  {
    step: 3,
    tag: "Ato III • O Ponto Alto",
    title: "Café & Confeitaria",
    subtitle: "Cada xícara, uma partitura. Cada doce, uma memória",
    copy: "A crema dourada e espessa de grãos colhidos a 1.200 metros de altitude ao lado de sobremesas lapidadas na nossa cozinha diária. O ritual supremo do paladar.",
    accent: "✨ Harmonia Sensorial",
  },
];

export const SCROLLY_ASSETS = {
  // Beco / Jardim com folhagens e luz mágica
  alleyGarden: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=88",
  // Textura rica de porta de madeira clássica com vitral / batentes
  doorTexture: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1600&q=85",
  // Salão interno acolhedor com luz âmbar, tijolos e plantas
  cafeInterior: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=88",
  // Café especial fumegante com sobremesa requintada em plano de detalhe
  coffeeAndDessert: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=2000&q=88",
};
