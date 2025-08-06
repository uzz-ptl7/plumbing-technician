import { Phone, Mail, MapPin, Wrench, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">PLUMBING TECHNICIAN</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Professional plumbing services you can trust. Licensed, bonded, 
              and insured with over 15 years of experience.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Leak Repairs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pipe Installation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Drain Cleaning</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Water Heater Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Bathroom Remodeling</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Service Areas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span>(555) 123-PIPE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span>info@plumbingtechnician.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60 mt-0.5" />
                <span>123 Main Street<br />Your City, State 12345</span>
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="accent" size="sm" className="w-full">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © 2024 PLUMBING TECHNICIAN. All rights reserved.
            </div>
            <div className="flex gap-1">
              <span>Licensed #PL-123456</span>
              <span>•</span>
              <span>BBB A+ Rating</span>
              <span>•</span>
              <span>Fully Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;