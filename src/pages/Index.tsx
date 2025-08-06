import { Phone, Wrench, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="relative min-h-screen bg-background">
        <AppSidebar />
        
        <div className="w-full">
          {/* Header */}
          <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 w-full">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4 flex-1">
                  {/* Mobile hamburger menu */}
                  <SidebarTrigger className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </SidebarTrigger>
                  
                  <div className="flex items-center gap-2 flex-1 md:justify-start justify-center">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground whitespace-nowrap">
                      PLUMBING TECHNICIAN
                    </span>
                  </div>
                </div>
                
                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </a>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </nav>
                
                <Button variant="emergency" size="sm" className="ml-4">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline ml-2">+250 788 123 456</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="w-full">
            <HeroSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
