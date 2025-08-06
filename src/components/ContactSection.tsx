import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-background w-full">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to solve your plumbing problems? Contact us today for fast, 
            professional service you can trust.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-base lg:text-lg">
                  <div className="w-10 h-10 bg-emergency/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-emergency" />
                  </div>
                  Emergency Hotline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl lg:text-2xl font-bold text-emergency mb-2">+250 788 123 456</div>
                <p className="text-sm lg:text-base text-muted-foreground">Available 24/7 for urgent plumbing emergencies in Kigali</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-base lg:text-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold mb-2">info@kigaliplumbing.rw</div>
                <p className="text-sm lg:text-base text-muted-foreground">We'll respond within 2 hours during business hours</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-base lg:text-lg">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-semibold mb-2">Kigali City & Surrounding Areas</div>
                <p className="text-sm lg:text-base text-muted-foreground">Serving Nyarugenge, Gasabo, and Kicukiro districts</p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-base lg:text-lg">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="h-5 w-5 text-primary" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Business Hours */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 lg:p-8">
            <div className="mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent mt-1" />
                <div>
                  <div className="font-semibold mb-1">Same-Day Service</div>
                  <p className="text-sm text-muted-foreground">
                    Most repairs completed the same day you call
                  </p>
                </div>
              </div>
              
              <Button variant="accent" size="lg" className="w-full">
                Schedule Service Online
              </Button>
              
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Licensed • Certified • Insured
                </div>
                <div className="text-xs text-muted-foreground">
                  RDB License #PL-2024-KGL-789 | 5-Year Warranty
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-base lg:text-lg">Find Us</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4956943123456!2d30.061865!3d-1.942269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1579718854243!5m2!1sen!2srw"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location in Kigali"
                ></iframe>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="font-semibold mb-2">Our Office</div>
                  <div className="text-sm text-muted-foreground">
                    KG 15 Ave, Nyarugenge<br />
                    Kigali, Rwanda
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;