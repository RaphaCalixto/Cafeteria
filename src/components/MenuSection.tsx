"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS } from "@/data/menuData";
import { MenuItem, MenuCategory } from "@/types/cafe";
import ItemDetailModal from "./ItemDetailModal";
import {
  Sparkles,
  ArrowUpRight,
  Flame,
  Search,
  SlidersHorizontal,
  Compass,
  Clock,
} from "lucide-react";

const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "all", label: "Todos os Itens" },
  { id: "cafes-especiais", label: "Cafés Especiais" },
  { id: "patisserie", label: "Pâtisserie & Doces" },
  { id: "brunch-salgados", label: "Brunch & Salgados" },
  { id: "assinaturas-geladas", label: "Assinaturas Geladas" },
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sensoryNotes?.some((n) =>
          n.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="cardapio-bento"
      className="relative w-full py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-coffee-950 text-cream-100 overflow-hidden"
    >
      {/* Background Ambience & Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-radial-amber opacity-30 pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-radial-botanical opacity-25 pointer-events-none blur-3xl" />
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header with Editorial Character */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-900 border border-brass-500/40 text-brass-400 text-xs tracking-wider uppercase font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cardápio Autoral & Safra do Mês</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-100 tracking-tight leading-tight">
              A Partitura do Paladar
            </h2>
            <p className="text-cream-400 text-base sm:text-lg max-w-2xl mt-3 font-light">
              Grãos colhidos à mão em altitudes elevadas, confeitaria clássica executada diariamente e receitas pensadas para despertar memórias afetivas.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-cream-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar grão, nota ou prato..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-coffee-900/80 border border-coffee-700/80 rounded-full text-xs sm:text-sm text-cream-100 placeholder-cream-500 focus:outline-none focus:border-brass-400 transition-colors backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isSelected
                    ? "text-coffee-950 font-semibold"
                    : "text-cream-300 hover:text-cream-50 bg-coffee-900/50 hover:bg-coffee-800/60 border border-coffee-800/80"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-brass-400 rounded-full shadow-[0_0_15px_rgba(212,146,56,0.5)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-[minmax(320px,auto)]"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              // Decide span classes based on item.layoutType and filter state
              const isHero = item.layoutType === "hero" && selectedCategory === "all";
              const isTall = item.layoutType === "tall" && selectedCategory === "all";
              const isWide = item.layoutType === "wide" && selectedCategory === "all";

              let spanClasses = "col-span-1";
              if (isHero) {
                spanClasses = "col-span-1 md:col-span-2 lg:col-span-2 md:row-span-2";
              } else if (isTall) {
                spanClasses = "col-span-1 md:row-span-2";
              } else if (isWide) {
                spanClasses = "col-span-1 md:col-span-2 lg:col-span-2";
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 55, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (index % 3) * 0.1,
                  }}
                  whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.28, ease: "easeOut" } }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setActiveItem(item)}
                  className={`group relative rounded-3xl overflow-hidden bg-coffee-900/70 border border-coffee-800 hover:border-brass-500/60 transition-colors duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(212,146,56,0.18)] flex flex-col justify-between cursor-pointer ${spanClasses}`}
                >
                  {/* HERO CARD VARIATION */}
                  {isHero && (
                    <div className="relative w-full h-full min-h-[460px] flex flex-col justify-between p-6 sm:p-10">
                      {/* Background Image with Zoom on Hover */}
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/60 to-coffee-950/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/90 via-coffee-950/40 to-transparent" />
                      </div>

                      {/* Header Info */}
                      <div className="relative z-10 flex items-start justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brass-400 text-coffee-950 shadow-md">
                            {item.badge || "Destaque"}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs tracking-wider bg-coffee-950/70 border border-coffee-700 text-cream-300 backdrop-blur-sm">
                            {item.categoryLabel}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-3xl sm:text-4xl font-bold text-brass-400 drop-shadow-md">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Info & Sensory Profile */}
                      <div className="relative z-10 max-w-xl">
                        <span className="text-xs uppercase tracking-[0.25em] text-terracotta-400 font-medium block mb-1">
                          {item.origin}
                        </span>
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-3">
                          {item.name}
                        </h3>
                        <p className="text-cream-300 text-sm sm:text-base leading-relaxed mb-6 font-light line-clamp-2 sm:line-clamp-none">
                          {item.description}
                        </p>

                        {/* Sensory Notes Pills */}
                        {item.sensoryNotes && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {item.sensoryNotes.map((note, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 rounded-lg text-xs font-medium bg-coffee-950/80 border border-coffee-700/80 text-cream-200 backdrop-blur-sm"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-4 border-t border-coffee-700/60">
                          <span className="text-xs text-cream-400 italic">
                            {item.pairing}
                          </span>
                          <div className="w-10 h-10 rounded-full bg-brass-400/90 text-coffee-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TALL CARD VARIATION */}
                  {isTall && (
                    <div className="relative w-full h-full min-h-[500px] flex flex-col justify-between p-6 sm:p-8">
                      <div className="absolute inset-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/70 to-coffee-950/30" />
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-botanical-500 text-cream-50 shadow-md">
                          {item.badge || item.categoryLabel}
                        </span>
                        <span className="font-serif text-2xl font-bold text-brass-400">
                          {item.price}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <span className="text-xs uppercase tracking-widest text-brass-400/80 block mb-1">
                          {item.origin || item.categoryLabel}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight mb-2">
                          {item.name}
                        </h3>
                        <p className="text-cream-300 text-xs sm:text-sm leading-relaxed mb-4 font-light line-clamp-3">
                          {item.description}
                        </p>

                        {item.sensoryNotes && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.sensoryNotes.map((note, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 rounded text-[11px] bg-coffee-950/80 border border-coffee-700 text-cream-300"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t border-coffee-800">
                          <span className="text-xs text-brass-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Ver Detalhes →
                          </span>
                          <span className="text-xs text-cream-400">
                            {item.prepTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDE CARD VARIATION */}
                  {isWide && (
                    <div className="relative w-full h-full min-h-[300px] grid grid-cols-1 md:grid-cols-2">
                      <div className="relative h-60 md:h-full w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent md:hidden" />
                      </div>

                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-terracotta-500 text-cream-50">
                              {item.badge || item.categoryLabel}
                            </span>
                            <span className="font-serif text-2xl font-bold text-brass-400">
                              {item.price}
                            </span>
                          </div>

                          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight mb-2">
                            {item.name}
                          </h3>
                          <p className="text-cream-300 text-sm leading-relaxed mb-4 font-light">
                            {item.description}
                          </p>
                        </div>

                        <div>
                          {item.sensoryNotes && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {item.sensoryNotes.map((note, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded-md text-xs bg-coffee-800 text-cream-300"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-3 border-t border-coffee-800">
                            <span className="text-xs text-cream-400 italic">
                              {item.origin || item.prepTime}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-brass-400/90 text-coffee-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STANDARD / COMPACT CARD VARIATION */}
                  {!isHero && !isTall && !isWide && (
                    <div className="flex flex-col h-full">
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />

                        {item.badge && (
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-coffee-950/80 border border-brass-400/60 text-brass-400 backdrop-blur-sm">
                              {item.badge}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-3 right-3 z-10">
                          <span className="font-serif text-xl font-bold text-cream-50 bg-coffee-950/80 px-2.5 py-1 rounded-lg border border-coffee-800 backdrop-blur-sm">
                            {item.price}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-brass-400/80 font-mono block mb-1">
                            {item.categoryLabel}
                          </span>
                          <h3 className="font-serif text-xl font-bold text-cream-50 leading-tight mb-2">
                            {item.name}
                          </h3>
                          <p className="text-cream-300 text-xs sm:text-sm leading-relaxed mb-4 font-light line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <div>
                          {item.sensoryNotes && (
                            <div className="flex flex-wrap gap-1.5 mb-4">
                              {item.sensoryNotes.slice(0, 2).map((note, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded text-[11px] bg-coffee-800 text-cream-300"
                                >
                                  {note}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="flex items-center justify-between pt-3 border-t border-coffee-800 text-xs">
                            <span className="text-brass-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                              Detalhes & Notas →
                            </span>
                            <span className="text-cream-400">
                              {item.prepTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-coffee-900/40 rounded-3xl border border-coffee-800">
            <p className="text-cream-300 font-serif text-xl mb-2">
              Nenhum item encontrado com o termo &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="text-xs text-brass-400 underline uppercase tracking-wider"
            >
              Limpar busca e filtros
            </button>
          </div>
        )}
      </div>

      {/* Item Details Lightbox / Modal */}
      <ItemDetailModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}
