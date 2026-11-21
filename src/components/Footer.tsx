"use client";

import React from "react";
import { Compass, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-coffee-950 text-cream-300 py-16 px-4 sm:px-8 md:px-12 lg:px-20 border-t border-coffee-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-coffee-900 border border-brass-500/40 flex items-center justify-center text-brass-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="font-serif text-lg text-cream-50 font-bold block">
              Beco do Café • Jardim Secreto
            </span>
            <span className="text-xs text-cream-500 font-mono">
              São Paulo, Brasil • Cafés Especiais & Pâtisserie
            </span>
          </div>
        </div>

        <div className="text-center text-xs text-cream-400 font-light flex items-center gap-1.5">
          <span>Feito com zelo artesanal e café fresco</span>
          <Heart className="w-3.5 h-3.5 text-terracotta-400 fill-current inline" />
        </div>

        <button
          onClick={scrollToTop}
          className="px-4 py-2 rounded-full bg-coffee-900/80 hover:bg-coffee-800 border border-coffee-800 text-xs uppercase tracking-widest text-cream-200 hover:text-cream-50 transition-colors flex items-center gap-2"
        >
          <span>Voltar ao Início</span>
          <ArrowUp className="w-3.5 h-3.5 text-brass-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-coffee-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-500">
        <p>© {new Date().getFullYear()} Beco do Café Artesanal. Todos os direitos reservados.</p>
        <p className="mt-2 sm:mt-0 font-mono">Imersão Sensorial • GSAP & Framer Motion</p>
      </div>
    </footer>
  );
}
