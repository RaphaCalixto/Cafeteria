export type MenuCategory =
  | "all"
  | "cafes-especiais"
  | "patisserie"
  | "brunch-salgados"
  | "assinaturas-geladas";

export type CardLayoutType = "hero" | "tall" | "wide" | "standard" | "compact";

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, "all">;
  categoryLabel: string;
  price: string;
  numericPrice: number;
  description: string;
  sensoryNotes?: string[];
  intensity?: number; // 1 to 5
  sweetness?: number; // 1 to 5
  acidity?: number; // 1 to 5
  pairing?: string;
  origin?: string;
  image: string;
  badge?: string;
  badgeType?: "gold" | "botanical" | "terracotta";
  layoutType: CardLayoutType;
  prepTime?: string;
}

export interface AtmosphereImage {
  id: string;
  title: string;
  subtitle: string;
  aspect: "portrait" | "landscape" | "square";
  image: string;
  caption: string;
}
