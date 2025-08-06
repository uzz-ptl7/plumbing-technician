import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to solve your plumbing problems? Contact us today for fast, 
            professional service you can trust.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 bg-emergency/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-emergency" />
                    </div>
                    Emergency Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emergency mb-2">(555) 123-PIPE</div>
                  <p className="text-muted-foreground">Available 24/7 for urgent plumbing emergencies</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-2">info@expertplumbing.com</div>
                  <p className="text-muted-foreground">We'll respond within 2 hours during business hours</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    Service Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-2">Greater Metro Area</div>
                  <p className="text-muted-foreground">Serving all neighborhoods within 25 miles</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">8:00 AM - 5:00 PM</span>
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
                  Licensed • Bonded • Insured
                </div>
                <div className="text-xs text-muted-foreground">
                  License #PL-123456 | BBB A+ Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;