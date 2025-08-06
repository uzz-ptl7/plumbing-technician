import { Phone, Mail, MapPin, Clock } from "lucide-react";
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
          {/* Card 1: Contact Info */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-emergency/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-emergency" />
                </div>
                <div>
                  <div className="text-xl font-bold text-emergency mb-1">+250 788 123 456</div>
                  <p className="text-sm text-muted-foreground">Available 24/7 for emergencies in Kigali</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">info@kigaliplumbing.rw</div>
                  <p className="text-sm text-muted-foreground">Responses within 2 hours (business hours)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Kigali & Surrounding Areas</div>
                  <p className="text-sm text-muted-foreground">Serving Nyarugenge, Gasabo & Kicukiro</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Business Hours & Info */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">Business Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">Emergency Only</span>
                </div>
              </div>

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
            </CardContent>
          </Card>

          {/* Card 3: Find Us + Map */}
          <Card className="border-0 shadow-md overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Find Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4956943123456!2d30.061865!3d-1.942269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1579718854243!5m2!1sen!2srw"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location in Kigali"
              ></iframe>

              <div className="text-center">
                <div className="font-semibold mb-1">Our Office</div>
                <p className="text-sm text-muted-foreground">
                  KG 15 Ave, Nyarugenge<br />
                  Kigali, Rwanda
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
