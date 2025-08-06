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
      <div className="flex min-h-screen bg-background w-full">
        <AppSidebar />
        
        {/* Main layout container */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shrink-0">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4 md:flex-1">
                  {/* Mobile hamburger menu */}
                  <SidebarTrigger className="md:hidden">
                    <Menu className="h-6 w-6" />
                  </SidebarTrigger>
                  
                  <div className="flex items-center gap-2 md:flex-1 md:justify-start justify-center">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <Wrench className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">PLUMBING TECHNICIAN</span>
                  </div>
                </div>
                
                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-8">
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
                
                <Button variant="emergency" size="sm">
                  <Phone className="h-4 w-4" />
                  <span className="hidden sm:inline">+250 788 123 456</span>
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">
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
