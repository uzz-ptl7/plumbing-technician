import { Phone, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-plumber.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-gradient-to-r from-primary/10 via-background to-secondary/50 w-full">
      <div className="container mx-auto px-4 py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-medium">Licensed & Insured Professional</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Professional Plumbing
                <span className="block text-primary">Solutions</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                Fast, reliable plumbing services for your home and business. 
                Available 24/7 for emergency repairs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="emergency" size="lg" className="text-base lg:text-lg">
                <Phone className="h-5 w-5" />
                Call Now: +250 788 123 456
              </Button>
              <Button variant="hero" size="lg" className="text-base lg:text-lg">
                Get Free Quote
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Clock className="h-5 w-5" />
                <span className="font-medium">24/7 Emergency Service</span>
              </div>
              <div className="text-muted-foreground">
                Same-day appointments available
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={heroImage} 
              alt="Professional plumber at work" 
              className="w-full h-[350px] sm:h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;