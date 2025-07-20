import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Star } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Excellence Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Honored to receive the Excellence Award from VIDYAPEET, powered by PhysicsWallah
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Award Image */}
          <div className="relative animate-fade-in">
            <Card className="overflow-hidden shadow-card border-2 border-primary/20">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/cdf0a2c6-bad7-4f30-9a2c-b5fe485e965a.png"
                  alt="Bhola Shankar receiving Excellence Award at VIDYAPEET ceremony"
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
            <div className="absolute -top-4 -right-4 bg-primary rounded-full p-3 shadow-glow">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* Award Details */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Excellence Award 2024
              </Badge>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Recognition of Outstanding Achievement
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Received the prestigious Excellence Award from VIDYAPEET, powered by PhysicsWallah, 
                in recognition of outstanding professional contributions and leadership excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Team Leadership</h4>
                  <p className="text-sm text-muted-foreground">Recognized for exceptional team management</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/20">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">Outstanding performance and dedication</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;