"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/types/cafe";
import { X, Clock, Compass, Sparkles, Check, Heart } from "lucide-react";

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onFavoriteToggle?: (id: string) => void;
  isFavorited?: boolean;
}

export default function ItemDetailModal({
  item,
  onClose,
  onFavoriteToggle,
  isFavorited = false,
}: ItemDetailModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-coffee-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-coffee-900 border border-coffee-700/80 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 text-cream-100 my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-coffee-950/70 border border-coffee-700 text-cream-300 hover:text-cream-50 hover:bg-coffee-800 transition-colors flex items-center justify-center backdrop-blur-sm"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Container */}
            <div className="relative h-64 sm:h-80 md:h-full min-h-[300px] w-full overflow-hidden bg-coffee-950">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 via-transparent to-transparent md:hidden" />

              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brass-400 text-coffee-950 shadow-lg">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-brass-400 font-semibold">
                    {item.categoryLabel}
                  </span>
                  <span className="font-serif text-2xl font-bold text-cream-100">
                    {item.price}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 leading-tight mb-3">
                  {item.name}
                </h3>

                <p className="text-cream-300 text-sm leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Sensory Notes */}
                {item.sensoryNotes && item.sensoryNotes.length > 0 && (
                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-wider text-cream-400/80 block mb-2 font-mono">
                      Perfil Aromático & Notas
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.sensoryNotes.map((note, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs bg-coffee-800 border border-coffee-700/80 text-cream-200"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flavor Metrics Bars (Intensidade, Doçura, Acidez) */}
                {(item.intensity || item.sweetness || item.acidity) && (
                  <div className="space-y-3 mb-6 p-4 rounded-2xl bg-coffee-950/60 border border-coffee-800">
                    {item.intensity && (
                      <div>
                        <div className="flex justify-between text-xs text-cream-300 mb-1">
                          <span>Intensidade</span>
                          <span className="font-mono text-brass-400">{item.intensity}/5</span>
                        </div>
                        <div className="w-full h-1.5 bg-coffee-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-terracotta-500 rounded-full"
                            style={{ width: `${(item.intensity / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {item.sweetness && (
                      <div>
                        <div className="flex justify-between text-xs text-cream-300 mb-1">
                          <span>Doçura Residual</span>
                          <span className="font-mono text-brass-400">{item.sweetness}/5</span>
                        </div>
                        <div className="w-full h-1.5 bg-coffee-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brass-400 rounded-full"
                            style={{ width: `${(item.sweetness / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {item.acidity && (
                      <div>
                        <div className="flex justify-between text-xs text-cream-300 mb-1">
                          <span>Acidez Cítrica</span>
                          <span className="font-mono text-brass-400">{item.acidity}/5</span>
                        </div>
                        <div className="w-full h-1.5 bg-coffee-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-botanical-400 rounded-full"
                            style={{ width: `${(item.acidity / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Origin or Pairing */}
                {item.origin && (
                  <div className="flex items-start gap-2 text-xs text-cream-400 mb-2">
                    <Compass className="w-4 h-4 text-brass-400 shrink-0 mt-0.5" />
                    <span>{item.origin}</span>
                  </div>
                )}

                {item.pairing && (
                  <div className="flex items-start gap-2 text-xs text-terracotta-400 mb-4 italic">
                    <Sparkles className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                    <span>{item.pairing}</span>
                  </div>
                )}
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-coffee-800 flex items-center justify-between gap-4">
                {item.prepTime && (
                  <div className="flex items-center gap-1.5 text-xs text-cream-400">
                    <Clock className="w-3.5 h-3.5 text-brass-400" />
                    <span>Preparo: {item.prepTime}</span>
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-brass-400 hover:bg-brass-300 text-coffee-950 font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg ml-auto"
                >
                  Concluído
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
