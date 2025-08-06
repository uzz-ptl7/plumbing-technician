import { Phone, Wrench, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Header = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                  {/* Mobile hamburger menu */}
                  <SidebarTrigger className="md:hidden" />
                  
                  <div className="flex items-center gap-2">
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
                  <span className="hidden sm:inline">(555) 123-PIPE</span>
                </Button>
              </div>
            </div>
          </header>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Header;