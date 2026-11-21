import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jardim Secreto • Beco do Café Artesanal",
  description:
    "Uma cafeteria escondida em um beco botânico acolhedor. Cafés especiais colhidos em altitude, pâtisserie autoral e momentos de contemplação.",
  keywords: [
    "cafeteria",
    "cafés especiais",
    "jardim secreto",
    "confeitaria artesanal",
    "brunch",
    "beco do café",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-coffee-950 text-cream-100 font-sans antialiased selection:bg-terracotta-500/30 selection:text-cream-50">
        {children}
      </body>
    </html>
  );
}
