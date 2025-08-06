import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />

      <main className="w-full">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
