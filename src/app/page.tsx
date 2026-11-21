import HeroScrollytelling from "@/components/HeroScrollytelling";
import MenuSection from "@/components/MenuSection";
import AtmosphereGallery from "@/components/AtmosphereGallery";
import StoryAndManifesto from "@/components/StoryAndManifesto";
import LocationAndHours from "@/components/LocationAndHours";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-coffee-950 text-cream-100 selection:bg-terracotta-500/30 selection:text-cream-50">
      {/* 1. Hero Banner Principal com Scrollytelling Cinemático de 3 Atos */}
      <HeroScrollytelling />

      {/* 2. Seção do Cardápio com Bento Grid Editorial e Cards Assimétricos */}
      <MenuSection />

      {/* 3. Galeria de Fotos e Atmosfera do Jardim & Cafeteria */}
      <AtmosphereGallery />

      {/* 4. História, Torrefação e Filosofia do Beco */}
      <StoryAndManifesto />

      {/* 5. Horários de Funcionamento, Localização e Acesso ao Beco */}
      <LocationAndHours />

      {/* 6. Rodapé da Cafeteria */}
      <Footer />
    </main>
  );
}
