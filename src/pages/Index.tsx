import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CatalogSection from "@/components/CatalogSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <CatalogSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
