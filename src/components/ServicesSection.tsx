import { Wrench, Droplet, Zap, Shield, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Droplet,
    title: "Leak Repairs",
    description: "Quick detection and repair of all types of leaks, from faucets to major pipe bursts.",
    features: ["Emergency response", "Pipe replacement", "Water damage prevention"]
  },
  {
    icon: Wrench,
    title: "Pipe Installation",
    description: "Professional installation of new plumbing systems for homes and businesses.",
    features: ["Modern materials", "Code compliance", "Warranty included"]
  },
  {
    icon: Zap,
    title: "Drain Cleaning",
    description: "Advanced drain cleaning services to restore proper water flow throughout your property.",
    features: ["High-pressure jetting", "Camera inspection", "Preventive maintenance"]
  },
  {
    icon: Shield,
    title: "Water Heater Service",
    description: "Installation, repair, and maintenance of all water heater types and brands.",
    features: ["Energy efficient options", "Same-day service", "Extended warranties"]
  },
  {
    icon: Clock,
    title: "Emergency Plumbing",
    description: "24/7 emergency services for urgent plumbing issues that can't wait.",
    features: ["Rapid response", "No overtime charges", "Fully equipped trucks"]
  },
  {
    icon: ThumbsUp,
    title: "Bathroom Remodeling",
    description: "Complete bathroom renovation services with modern fixtures and design.",
    features: ["Custom design", "Quality materials", "Professional installation"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-section-bg w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Professional Plumbing Services
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine maintenance to emergency repairs, we provide comprehensive 
            plumbing solutions with guaranteed satisfaction.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md h-full">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm lg:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;