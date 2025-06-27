"use client";

import dynamic from 'next/dynamic';
import HeroHeader from "@/components/sections/HeroHeader";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";

// Carregamento dinâmico para os componentes mais pesados
const WorksSection = dynamic(() => import('@/components/sections/WorksSection'), { ssr: false });
const TechnologiesSection = dynamic(() => import('@/components/sections/TechnologiesSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), { ssr: false });
const ScrollToTopButton = dynamic(() => import('@/components/ScrollToTopButton/ScrollToTopButton'), { ssr: false });


export default function Home() {
  return (
    <main>
      <HeroHeader />
      <AboutUsSection />
      <ServicesSection />
      <WorksSection />
      <TechnologiesSection />
      <ContactSection />
      <ScrollToTopButton />
    </main>
  );
}