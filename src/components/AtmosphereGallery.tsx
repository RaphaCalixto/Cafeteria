"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/data/galleryData";
import { AtmosphereImage } from "@/types/cafe";
import { Camera, X, Maximize2 } from "lucide-react";

export default function AtmosphereGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<AtmosphereImage | null>(null);

  return (
    <section
      id="experiencia-galeria"
      className="relative w-full py-28 px-4 sm:px-8 md:px-12 lg:px-20 bg-coffee-950 text-cream-100 border-t border-coffee-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-botanical-900/60 border border-botanical-600/40 text-botanical-300 text-xs tracking-wider uppercase font-medium mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>A Atmosfera do Beco</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream-50 leading-tight mb-4">
            Um Olhar Pelo Nosso Jardim
          </h2>
          <p className="text-cream-400 text-sm sm:text-base font-light">
            Entre a luz suave que atravessa as folhas e o cheiro da torra diária, cada canto foi pensado para acolher suas melhores conversas ou seu silêncio favorito.
          </p>
        </div>

        {/* Editorial Masonry/Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Photo 1: Landscape Large */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[0])}
            className="md:col-span-8 group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] bg-coffee-900 border border-coffee-800 cursor-pointer shadow-xl"
          >
            <Image
              src={GALLERY_ITEMS[0].image}
              alt={GALLERY_ITEMS[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-brass-400 font-mono block mb-1">
                  {GALLERY_ITEMS[0].subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50">
                  {GALLERY_ITEMS[0].title}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-coffee-950/80 border border-coffee-700 text-cream-200 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Photo 2: Portrait Tall */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[1])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] bg-coffee-900 border border-coffee-800 cursor-pointer shadow-xl"
          >
            <Image
              src={GALLERY_ITEMS[1].image}
              alt={GALLERY_ITEMS[1].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-terracotta-400 font-mono block mb-1">
                {GALLERY_ITEMS[1].subtitle}
              </span>
              <h3 className="font-serif text-2xl font-bold text-cream-50">
                {GALLERY_ITEMS[1].title}
              </h3>
            </div>
          </div>

          {/* Photo 3: Square */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[2])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[320px] bg-coffee-900 border border-coffee-800 cursor-pointer shadow-xl"
          >
            <Image
              src={GALLERY_ITEMS[2].image}
              alt={GALLERY_ITEMS[2].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-brass-400 font-mono block mb-1">
                {GALLERY_ITEMS[2].subtitle}
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-50">
                {GALLERY_ITEMS[2].title}
              </h3>
            </div>
          </div>

          {/* Photo 4: Portrait */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[3])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[320px] bg-coffee-900 border border-coffee-800 cursor-pointer shadow-xl"
          >
            <Image
              src={GALLERY_ITEMS[3].image}
              alt={GALLERY_ITEMS[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-botanical-300 font-mono block mb-1">
                {GALLERY_ITEMS[3].subtitle}
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-50">
                {GALLERY_ITEMS[3].title}
              </h3>
            </div>
          </div>

          {/* Photo 5: Wide Landscape */}
          <div
            onClick={() => setSelectedPhoto(GALLERY_ITEMS[4])}
            className="md:col-span-4 group relative rounded-3xl overflow-hidden min-h-[320px] bg-coffee-900 border border-coffee-800 cursor-pointer shadow-xl"
          >
            <Image
              src={GALLERY_ITEMS[4].image}
              alt={GALLERY_ITEMS[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-widest text-brass-400 font-mono block mb-1">
                {GALLERY_ITEMS[4].subtitle}
              </span>
              <h3 className="font-serif text-xl font-bold text-cream-50">
                {GALLERY_ITEMS[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-coffee-950/90 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-coffee-900 border border-coffee-700 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-coffee-950/70 border border-coffee-700 text-cream-200 hover:text-white flex items-center justify-center backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[480px] sm:h-[560px] w-full bg-coffee-950">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-coffee-900 border-t border-coffee-800">
                <span className="text-xs uppercase tracking-widest text-brass-400 font-mono block mb-1">
                  {selectedPhoto.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-cream-50 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-cream-300 text-sm font-light">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
