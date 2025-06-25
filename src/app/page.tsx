import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroHeader from '@/components/sections/HeroHeader';
import ServicesSection from '@/components/sections/ServicesSection';
import TechnologiesSection from '@/components/sections/TechnologiesSection';
import WorksSection from '@/components/sections/WorksSection';

export default function HomePage() {
  return (
    <>
      <HeroHeader />
      <AboutUsSection />
      <ServicesSection />
      <WorksSection />
      <TechnologiesSection />
      <ContactSection />
      <ScrollToTopButton />
    </>
  );
}
