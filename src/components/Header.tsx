import { useState } from "react";
import { Menu, X, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: "/" },
  { title: "Services", url: "#services" },
  { title: "About", url: "#home" },
  { title: "Contact", url: "#contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-40 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <Wrench className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
              PLUMBING TECHNICIAN
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
            {navigationItems.slice(1).map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Right side: call button on desktop, hamburger on mobile */}
          <div className="flex items-center gap-4">
            <Button
              variant="emergency"
              size="sm"
              className="hidden md:flex whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span className="ml-2">+250 788 123 456</span>
            </Button>

            {/* Hamburger on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t border-border">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}

            {/* Call button inside mobile menu */}
            <Button
              variant="emergency"
              size="sm"
              className="w-full flex justify-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="h-4 w-4" />
              <span className="ml-2">+250 788 123 456</span>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
