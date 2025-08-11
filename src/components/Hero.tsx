import { Award, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0">
        <Star className="absolute top-20 left-20 text-primary-glow animate-float w-6 h-6" />
        <Trophy className="absolute top-32 right-32 text-primary-glow animate-float w-8 h-8" style={{ animationDelay: '1s' }} />
        <Award className="absolute bottom-40 left-32 text-primary-glow animate-float w-7 h-7" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
            Bhola Shankar Sharma
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Marketing Analyst & Business Intelligence Expert | Excellence Award Recipient
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow px-8 py-6 text-lg font-semibold"
            >
              View My Achievements
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;