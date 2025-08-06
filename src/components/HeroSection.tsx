import { Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-primary/10 via-background to-secondary/50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">Licensed & Insured Professional</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Expert Plumbing
                <span className="block text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Fast, reliable plumbing services for your home and business. 
                Available 24/7 for emergency repairs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg" className="text-lg">
                <Phone className="h-5 w-5" />
                Call Now: (555) 123-PIPE
              </Button>
              <Button variant="hero" size="lg" className="text-lg">
                Get Free Quote
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <span className="font-medium">24/7 Emergency Service</span>
              </div>
              <div className="text-muted-foreground">
                Same-day appointments available
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional plumber at work" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold">500+ Happy Customers</div>
                  <div className="text-muted-foreground">This month alone</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;