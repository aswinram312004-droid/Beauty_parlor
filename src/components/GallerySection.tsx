import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceBridal from "@/assets/service-bridal.jpg";
import serviceSkincare from "@/assets/service-skincare.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceNails from "@/assets/service-nails.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import salonInterior from "@/assets/salon-interior.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { isRTL } = useLanguage();

  const galleryImages = [
    { src: salonInterior, alt: isRTL ? "صالون نور الحياة - الداخل" : "Noor Al-Hayat Salon - Interior", category: isRTL ? "الصالون" : "Salon" },
    { src: serviceBridal, alt: isRTL ? "مكياج عروس" : "Bridal Makeup", category: isRTL ? "مكياج" : "Makeup" },
    { src: heroBg, alt: isRTL ? "أجواء الصالون" : "Salon Atmosphere", category: isRTL ? "الصالون" : "Salon" },
    { src: serviceMakeup, alt: isRTL ? "أدوات المكياج" : "Makeup Tools", category: isRTL ? "مكياج" : "Makeup" },
    { src: serviceSkincare, alt: isRTL ? "عناية بالبشرة" : "Skincare", category: isRTL ? "بشرة" : "Skincare" },
    { src: serviceHair, alt: isRTL ? "تسريحات الشعر" : "Hair Styling", category: isRTL ? "شعر" : "Hair" },
    { src: serviceNails, alt: isRTL ? "أظافر ومانيكير" : "Nails & Manicure", category: isRTL ? "أظافر" : "Nails" },
    { src: serviceMassage, alt: isRTL ? "مساج واسترخاء" : "Massage & Relaxation", category: isRTL ? "استرخاء" : "Relaxation" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {isRTL ? "معرض الصور" : "Photo Gallery"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>لمحات من <span className="text-primary">أعمالنا</span></>
            ) : (
              <>Glimpses of <span className="text-primary">Our Work</span></>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {isRTL
              ? "شاهدي مجموعة من أعمالنا المميزة وأجواء صالوننا الراقية"
              : "See a collection of our distinguished works and our elegant salon atmosphere"}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 3 ? "row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: index === 0 || index === 3 ? "400px" : "200px" }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <ZoomIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30 transition-colors`}
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={selectedImage}
            alt={isRTL ? "صورة مكبرة" : "Enlarged image"}
            className="max-w-full max-h-[90vh] rounded-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
