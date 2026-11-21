"use client";

import React, { useState } from "react";
import { Clock, MapPin, Phone, MessageSquare, Compass, Send, Check } from "lucide-react";

export default function LocationAndHours() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Beco das Hortênsias, 142 - Fundos do Jardim Secreto, São Paulo - SP");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="horarios-local"
      className="relative w-full py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-coffee-950 text-cream-100 border-t border-coffee-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Hours & Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-900 border border-brass-500/40 text-brass-400 text-xs tracking-wider uppercase font-medium mb-4">
                <Clock className="w-3.5 h-3.5" />
                <span>Horários & Acesso</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 leading-tight mb-4">
                Encontre o Nosso Refúgio
              </h2>

              <p className="text-cream-400 text-sm sm:text-base font-light leading-relaxed mb-8">
                As portas de madeira estão abertas para quem busca silêncio, uma xícara inesquecível ou o melhor pedaço de torta basca da cidade.
              </p>

              {/* Weekly Schedule */}
              <div className="space-y-3 mb-8 bg-coffee-900/60 p-6 rounded-3xl border border-coffee-800">
                <div className="flex justify-between items-center text-sm py-1 border-b border-coffee-800/80">
                  <span className="text-cream-200">Terça a Sexta-feira</span>
                  <span className="font-mono text-brass-400 font-semibold">08:30 às 19:30</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-coffee-800/80">
                  <span className="text-cream-200">Sábados & Feriados</span>
                  <span className="font-mono text-brass-400 font-semibold">09:00 às 20:00</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-coffee-800/80">
                  <span className="text-cream-200">Domingos (Brunch)</span>
                  <span className="font-mono text-brass-400 font-semibold">09:00 às 18:00</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 text-cream-500">
                  <span>Segunda-feira</span>
                  <span className="italic text-xs text-cream-400">Torra dos lotes (Fechado)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20reservas%20do%20Beco%20do%20Caf%C3%A9."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-brass-400 hover:bg-brass-300 text-coffee-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar com o Barista</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="px-6 py-3 rounded-full bg-coffee-900 hover:bg-coffee-800 border border-coffee-700 text-cream-200 hover:text-cream-50 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-botanical-400" />
                      <span>Endereço Copiado!</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="w-4 h-4 text-brass-400" />
                      <span>Copiar Endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Map & Arrival Guide */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-coffee-900 border border-coffee-800 p-8 shadow-2xl flex flex-col justify-between min-h-[460px]">
              {/* Map Graphic / Background Texture */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d49238_1px,transparent_1px)] [background-size:16px_16px]" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-coffee-950 border border-brass-500/50 flex items-center justify-center text-brass-400">
                      <Compass className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-cream-50">
                        O Beco das Hortênsias, 142
                      </h3>
                      <p className="text-xs text-cream-400">Fundos do Jardim Secreto • Pinheiros/Vila Madalena, SP</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-botanical-900/60 border border-botanical-600/50 text-botanical-300">
                    Aberto Hoje
                  </span>
                </div>

                {/* Secret Passage Hint Card */}
                <div className="p-6 rounded-2xl bg-coffee-950/80 border border-coffee-800 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-brass-400 mb-2 font-mono">
                    ✦ Como Encontrar o Portal
                  </h4>
                  <p className="text-sm text-cream-300 font-light leading-relaxed">
                    Ao caminhar pela calçada do casarão histórico de tijolos à vista, procure pelo portão de ferro ladeado por jasmins. Siga pelo beco florido por cerca de 30 passos até encontrar a grande porta de madeira entalhada com o número 1924 no arco.
                  </p>
                </div>

                {/* Amenities Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-coffee-900/80 border border-coffee-800/80 text-center">
                    <span className="text-xs text-cream-200 block font-medium">Pet Friendly</span>
                    <span className="text-[10px] text-cream-500">Jardim aberto</span>
                  </div>
                  <div className="p-3 rounded-xl bg-coffee-900/80 border border-coffee-800/80 text-center">
                    <span className="text-xs text-cream-200 block font-medium">Wi-Fi Rápido</span>
                    <span className="text-[10px] text-cream-500">Para trabalhar</span>
                  </div>
                  <div className="p-3 rounded-xl bg-coffee-900/80 border border-coffee-800/80 text-center">
                    <span className="text-xs text-cream-200 block font-medium">Bicicletário</span>
                    <span className="text-[10px] text-cream-500">Vagas seguras</span>
                  </div>
                  <div className="p-3 rounded-xl bg-coffee-900/80 border border-coffee-800/80 text-center">
                    <span className="text-xs text-cream-200 block font-medium">Torra Própria</span>
                    <span className="text-[10px] text-cream-500">Pacotes em grãos</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-coffee-800 flex items-center justify-between text-xs text-cream-400">
                <span>Dúvidas ou encomendas de tortas inteiras?</span>
                <a
                  href="mailto:contato@becodocafe.com.br"
                  className="text-brass-400 hover:underline font-mono"
                >
                  contato@becodocafe.com.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
