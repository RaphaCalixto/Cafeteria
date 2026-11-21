"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Leaf, Coffee, Award } from "lucide-react";

export default function StoryAndManifesto() {
  return (
    <section className="relative w-full py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-coffee-900/50 text-cream-100 overflow-hidden border-t border-coffee-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Layered Frames */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Photo: Roasting / Coffee Preparation */}
              <div className="relative h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-coffee-700/80 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <Image
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85"
                  alt="Barista extraindo café artesanal no balcão de madeira nobre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-transparent" />
              </div>

              {/* Overlapping Secondary Card: The Botanical Secret */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-56 sm:w-64 p-5 rounded-2xl bg-coffee-950/95 border border-brass-500/40 backdrop-blur-md shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-brass-400 text-coffee-950 flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brass-400 font-mono block">
                      Altitude Média
                    </span>
                    <span className="font-serif text-lg font-bold text-cream-100">
                      1.250 metros
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-cream-300 font-light leading-relaxed">
                  Grãos colhidos sob noites frias de montanha, garantindo doçura natural e densidade incomparável.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Principles */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-950 border border-coffee-700 text-terracotta-400 text-xs tracking-wider uppercase font-medium mb-4">
              <Leaf className="w-3.5 h-3.5" />
              <span>Nossa Filosofia</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 leading-tight mb-6">
              O Elogio à Lentidão & ao Encontro
            </h2>

            <div className="space-y-4 text-cream-300 text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                O Beco do Café nasceu do desejo de criar uma pausa no ritmo veloz da metrópole. Acreditamos que o café não deve ser um combustível apressado, mas sim uma ponte sensorial de presença.
              </p>
              <p>
                Por trás do portão verde de madeira entalhada e das flores de jasmim, nossos baristas tratam cada extração como uma cerimônia: granulometria calibrada a cada manhã, água mineral aquecida a exatos 93°C e receitas de pâtisserie que respeitam o tempo da manteiga e da fermentação lenta.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-coffee-800">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-4 rounded-2xl bg-coffee-950/50 border border-coffee-800/80"
              >
                <Coffee className="w-5 h-5 text-brass-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-cream-100 mb-1">
                  Torra Semanal
                </h4>
                <p className="text-xs text-cream-400 font-light">
                  Lotes frescos torrados no próprio beco em perfil claro-médio aromático.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-4 rounded-2xl bg-coffee-950/50 border border-coffee-800/80"
              >
                <Leaf className="w-5 h-5 text-botanical-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-cream-100 mb-1">
                  Jardim Nativo
                </h4>
                <p className="text-xs text-cream-400 font-light">
                  Plantas aromáticas colhidas na hora para infusões e drinques botânicos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-4 rounded-2xl bg-coffee-950/50 border border-coffee-800/80"
              >
                <Award className="w-5 h-5 text-terracotta-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-cream-100 mb-1">
                  86+ Pontos SCA
                </h4>
                <p className="text-xs text-cream-400 font-light">
                  Somente cafés especiais certificados com rastreabilidade total de origem.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
