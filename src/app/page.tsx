import AboutUsSection from '@/components/sections/AboutUsSection';
import HeroHeader from '@/components/sections/HeroHeader';
import ServicesSection from '@/components/sections/ServicesSection';
import WorksSection from '@/components/sections/WorksSection';

export default function HomePage() {
  return (
    <>
      <HeroHeader />
      <AboutUsSection />
      <ServicesSection />
      <WorksSection />
    </>
  );
}
