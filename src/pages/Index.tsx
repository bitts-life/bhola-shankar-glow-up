import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AwardSection from "@/components/AwardSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <AwardSection />
      <Contact />
    </div>
  );
};

export default Index;
