"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Coffee, Sparkles, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeStage, setActiveStage] = useState<number>(1);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const video = videoRef.current;
      let targetTime = 0;
      let isSeeking = false;

      const performSeek = () => {
        if (!video || video.readyState < 2 || isSeeking) return;

        const dur =
          video.duration && !isNaN(video.duration) && isFinite(video.duration)
            ? video.duration
            : 3.5;

        const clamped = Math.max(0, Math.min(targetTime, dur - 0.04));

        if (Math.abs(video.currentTime - clamped) > 0.03) {
          isSeeking = true;
          video.currentTime = clamped;
        }
      };

      const handleSeeked = () => {
        isSeeking = false;
        performSeek();
      };

      if (video) {
        video.addEventListener("seeked", handleSeeked);
      }

      // Master Timeline with native pin: true
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2600",
          pin: true,
          scrub: 1.15,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;

            if (p < 0.42) {
              setActiveStage(1);
            } else if (p < 0.76) {
              setActiveStage(2);
            } else {
              setActiveStage(3);
            }

            // Sync video playback directly with scroll
            // The video covers progress 0.0 -> 0.55
            const videoProgress = Math.min(1, Math.max(0, p / 0.55));
            const dur =
              video && video.duration && !isNaN(video.duration) && isFinite(video.duration)
                ? video.duration
                : 3.5;

            targetTime = videoProgress * dur;
            performSeek();
          },
        },
      });

      timelineRef.current = tl;

      // ===============================================================
      // PHASE 1: O BECO & A CAMINHADA
      // (Progress: 0.0 -> 0.35)
      // ===============================================================

      // 1. Initial quote fades out as user scrolls forward
      tl.to(
        ".tunnel-quote",
        {
          opacity: 0,
          x: -50,
          scale: 0.95,
          duration: 0.9,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Initial scroll prompt fades away
      tl.to(
        ".scroll-prompt",
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
        },
        0.1
      );

      // 3. Subtle scale of the video as camera crosses the threshold
      tl.to(
        ".video-wrapper",
        {
          scale: 1.12,
          ease: "power1.inOut",
          duration: 3.0,
        },
        1.2
      );

      // ===============================================================
      // PHASE 2: ABERTURA DA PORTA & REVELAÇÃO DA CAFETERIA (COM COPY)
      // (Progress: 0.38 -> 0.72)
      // ===============================================================

      // 4. Smooth cross-fade to the cafe interior
      tl.to(
        ".video-wrapper",
        {
          opacity: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        2.8
      );

      tl.fromTo(
        ".cafe-interior-content",
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 2.0, ease: "power2.out" },
        2.8
      );

      // 5. NOVA COPY CINEMÁTICA: APARECE QUANDO A CAFETERIA É REVELADA!
      tl.fromTo(
        ".cafe-reveal-quote",
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power2.out" },
        2.6
      );

      // A copy da cafeteria permanece em destaque e faz fade-out suave ao avançar
      tl.to(
        ".cafe-reveal-quote",
        {
          opacity: 0,
          y: -30,
          scale: 0.96,
          duration: 1.0,
          ease: "power2.in",
        },
        4.8
      );

      // ===============================================================
      // PHASE 3: TRANSIÇÃO PARA A MESA (CAFÉ ESPECIAL & PÂTISSERIE)
      // (Progress: 0.72 -> 1.00)
      // ===============================================================

      // 6. O salão suaviza com desfoque elegante
      tl.to(
        ".cafe-interior-content",
        {
          scale: 1.12,
          filter: "blur(8px)",
          opacity: 0.25,
          duration: 2.2,
          ease: "power2.inOut",
        },
        5.0
      );

      // 7. A mesa com café e sobremesa surge em foco nítido
      tl.fromTo(
        ".coffee-dessert-content",
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 2.2, ease: "power2.out" },
        5.2
      );

      // 8. Copy de clímax (Café & Pâtisserie)
      tl.fromTo(
        ".dessert-reveal-quote",
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power2.out" },
        5.4
      );

      // 9. Fumaça de vapor subindo suavemente da xícara
      tl.fromTo(
        ".steam-layer",
        { opacity: 0 },
        { opacity: 0.9, duration: 1.4, ease: "power2.out" },
        5.6
      );

      return () => {
        tl.kill();
        if (video) {
          video.removeEventListener("seeked", handleSeeked);
        }
      };
    },
    { scope: containerRef }
  );

  const scrollToStage = (stage: number) => {
    if (!timelineRef.current || !timelineRef.current.scrollTrigger) return;
    const st = timelineRef.current.scrollTrigger;
    const start = st.start;
    const end = st.end;
    let targetY = start;
    if (stage === 1) targetY = start;
    if (stage === 2) targetY = start + (end - start) * 0.54;
    if (stage === 3) targetY = start + (end - start) * 0.88;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const scrollToMenu = () => {
    const el = document.getElementById("cardapio-bento");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      id="hero-experience"
      className="relative w-full h-screen overflow-hidden select-none bg-coffee-950 text-cream-100"
    >
      {/* ========================================================= */}
      {/* LAYER 3 (DEEPEST): Close na Mesa (Café & Sobremesa)       */}
      {/* ========================================================= */}
      <div className="coffee-dessert-content absolute inset-0 w-full h-full opacity-0 pointer-events-none">
        <Image
          src="/images/coffee-dessert.jpg"
          alt="Café especial com crema perfeita e sobremesa artesanal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-coffee-950/70" />
        <div className="absolute inset-0 bg-radial-amber opacity-40 mix-blend-screen" />

        {/* Steaming Coffee Effect */}
        <div className="steam-layer absolute bottom-[38%] left-[48%] -translate-x-1/2 opacity-0 pointer-events-none z-10 flex gap-2">
          <div className="w-1.5 h-16 bg-gradient-to-t from-cream-100/50 to-transparent rounded-full blur-[3px] animate-steam-1" />
          <div className="w-2 h-20 bg-gradient-to-t from-cream-100/60 to-transparent rounded-full blur-[4px] animate-steam-2" />
          <div className="w-1.5 h-14 bg-gradient-to-t from-cream-100/50 to-transparent rounded-full blur-[3px] animate-steam-3" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 2 (MIDDLE): Interior da Cafeteria (Salão Acolhedor) */}
      {/* ========================================================= */}
      <div className="cafe-interior-content absolute inset-0 w-full h-full opacity-0 pointer-events-none">
        <Image
          src="/images/cafe-interior.jpg"
          alt="Interior acolhedor da cafeteria com mesas de madeira nobre e luz âmbar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-coffee-950/70" />
        <div className="absolute inset-0 bg-radial-amber opacity-35 mix-blend-color-dodge" />
      </div>

      {/* ========================================================= */}
      {/* LAYER 1 (FRONT): VÍDEO CINEMÁTICO 1080p PURO               */}
      {/* (Câmera avançando pelo beco botânico e abrindo a porta)   */}
      {/* ========================================================= */}
      <div className="video-wrapper absolute inset-0 w-full h-full pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/door-entry.mp4"
          playsInline
          muted
          preload="auto"
          disablePictureInPicture
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-transparent to-coffee-950/30 pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* HEADER / NAVIGATION OVERLAY                               */}
      {/* ========================================================= */}
      <header className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-coffee-900/80 border border-brass-500/40 flex items-center justify-center text-brass-400 shadow-lg backdrop-blur-md">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-semibold block">
              O Beco Oculto
            </span>
            <span className="font-serif text-lg tracking-wide text-cream-100 font-bold">
              Jardim Secreto Café
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={scrollToMenu}
            className="px-4 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-cream-100 bg-coffee-900/80 hover:bg-coffee-800 border border-cream-200/20 hover:border-brass-400/60 rounded-full transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            Cardápio Completo
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("experiencia-galeria");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-cream-300 hover:text-cream-50 transition-colors"
          >
            A Casa
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("horarios-local");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden sm:inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-cream-300 hover:text-cream-50 transition-colors"
          >
            Localização
          </button>
        </div>
      </header>

      {/* ========================================================= */}
      {/* COPY 1: O BECO & O PORTAL (INÍCIO NO TOPO)                */}
      {/* ========================================================= */}
      <div className="tunnel-quote absolute top-[40%] sm:top-[38%] left-6 sm:left-12 md:left-20 z-30 max-w-sm sm:max-w-md pointer-events-none">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-[1.15] drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
          O Jardim Secreto
          <span className="block mt-1">não tem placa.</span>
        </h1>
        <p className="text-cream-300 text-xs sm:text-sm mt-3 font-light drop-shadow-md">
          Role a página para caminhar pelo beco e abrir a porta.
        </p>
      </div>

      {/* ========================================================= */}
      {/* COPY 2: A CAFETERIA SE REVELA (QUANDO A PORTA ABRE)       */}
      {/* ========================================================= */}
      <div className="cafe-reveal-quote absolute top-[36%] sm:top-[34%] left-6 sm:left-12 md:left-20 z-30 max-w-lg pointer-events-none opacity-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-950/85 border border-brass-500/50 text-brass-400 text-xs uppercase tracking-wider font-medium mb-3 backdrop-blur-md shadow-lg">
          <Coffee className="w-3.5 h-3.5" />
          <span>Ato II • O Salão do Beco</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          Ao cruzar o portal,
          <span className="block mt-1 text-brass-300">o tempo desacelera.</span>
        </h2>
        <p className="text-cream-200 text-sm sm:text-base mt-4 font-light leading-relaxed drop-shadow-lg max-w-md">
          Onde o aroma do grão fresco encontra a luz âmbar acolhedora, mesas de madeira nobre e a calma de uma segunda casa.
        </p>
      </div>

      {/* ========================================================= */}
      {/* COPY 3: CLÍMAX NA MESA (CAFÉ ESPECIAL & PÂTISSERIE)       */}
      {/* ========================================================= */}
      <div className="dessert-reveal-quote absolute top-[36%] sm:top-[34%] left-6 sm:left-12 md:left-20 z-30 max-w-lg pointer-events-none opacity-0">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-950/85 border border-terracotta-500/50 text-terracotta-400 text-xs uppercase tracking-wider font-medium mb-3 backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ato III • O Ponto Alto</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
          Café Especial &
          <span className="block mt-1 text-terracotta-400">Pâtisserie Artesanal</span>
        </h2>
        <p className="text-cream-200 text-sm sm:text-base mt-4 font-light leading-relaxed drop-shadow-lg max-w-md">
          A harmonia entre grãos selecionados a 1.250m de altitude e sobremesas feitas diariamente na nossa cozinha.
        </p>
        <div className="mt-6 pointer-events-auto">
          <button
            onClick={scrollToMenu}
            className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-coffee-950 bg-brass-400 hover:bg-brass-300 rounded-full transition-all shadow-xl flex items-center gap-2"
          >
            <span>Ver Cardápio & Preços</span>
            <span>↓</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TIMELINE PROGRESS CONTROLLER (LATERAL DIREITO)            */}
      {/* ========================================================= */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-3 bg-coffee-950/75 border border-coffee-800/80 backdrop-blur-md rounded-full py-4 px-2 shadow-xl">
          {[1, 2, 3].map((stage) => {
            const isActive = activeStage === stage;
            return (
              <button
                key={stage}
                onClick={() => scrollToStage(stage)}
                className="group relative flex items-center justify-center p-1.5 transition-all"
                aria-label={`Ir para Estágio ${stage}`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brass-400 scale-125 shadow-[0_0_10px_rgba(212,146,56,0.8)]"
                      : "bg-cream-400/30 hover:bg-cream-200/60"
                  }`}
                />
                <span className="absolute right-7 px-2.5 py-1 text-[10px] tracking-wider uppercase whitespace-nowrap bg-coffee-900 border border-coffee-700 text-cream-200 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
                  {stage === 1 ? "O Beco & A Porta" : stage === 2 ? "O Salão" : "Café & Sobremesa"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="text-[10px] uppercase tracking-widest text-cream-400/60 font-mono rotate-90 origin-center mt-2">
          0{activeStage} / 03
        </div>
      </div>

      {/* ========================================================= */}
      {/* INITIAL SCROLL CUE                                        */}
      {/* ========================================================= */}
      <div className="scroll-prompt absolute bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2">
        <div className="px-4 py-1.5 rounded-full bg-coffee-950/80 border border-cream-200/20 backdrop-blur-md text-[11px] uppercase tracking-widest text-cream-300 flex items-center gap-2 shadow-lg">
          <span>Role para desvendar o portal</span>
          <ChevronDown className="w-3.5 h-3.5 text-brass-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
