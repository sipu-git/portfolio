'use client';

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"; 
import ContactSection from "@/components/ContactSection/page";
import EducationSection from "@/components/EducationSection/page";
import ExperienceSection from "@/components/ExperienceSection/page";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/HeroSection/page";
import Projects from "@/components/MyProjects/page";
import Profile from "@/components/profile/page";
import SkillSection from "@/components/SkillSection/page";
import GreenGlowLine from "@/components/ui/GlowingLine";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <StarsBackground 
        starColor="#dc0ce7" 
        speed={120} 
        factor={0.05} 
        className="fixed inset-0 -z-10" 
      />

      <div className="w-full inset-0 z-0 min-h-screen flex flex-col">
        <GreenGlowLine className="fixed top-0 z-50" orientation="horizontal" side="top" />
        <GreenGlowLine className="fixed left-0 z-50" orientation="vertical" side="left" />
        <GreenGlowLine className="fixed right-0 z-50" orientation="vertical" side="right" />
        <GreenGlowLine className="fixed bottom-0 z-50" orientation="horizontal" side="bottom" />

        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row flex-col justify-between gap-20 2xl:mx-12 xl:mx-12 lg:mx-12 mx-3">
          {/* Profile stays sticky again */}
          <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 w-full relative">
            <div className="2xl:sticky xl:sticky lg:sticky top-10 h-auto">
              <Profile />
            </div>
          </div>

          <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full flex flex-col gap-10">
            <HeroSection />
            <ExperienceSection />
            <Projects />
            <EducationSection />
            <SkillSection/>
            <ContactSection />
          </div>
        </div>

        <footer className="mt-2 border-gray-200">
          <Footer />
        </footer>

        <GreenGlowLine className="fixed left-0 z-50" orientation="vertical" position="0" />
      </div>
    </div>
  );
}
