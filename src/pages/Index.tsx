import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MoodWidget from "@/components/MoodWidget";
import ServicesSection from "@/components/ServicesSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LoyaltySection from "@/components/LoyaltySection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, [isRTL]);

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MoodWidget />
      <ServicesSection />
      <PackagesSection />
      <AboutSection />
      <TestimonialsSection />
      <LoyaltySection />
      <GallerySection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
