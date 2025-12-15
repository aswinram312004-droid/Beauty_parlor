import { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { t, isRTL } = useLanguage();

  const testimonials = isRTL
    ? [
        {
          id: 1,
          name: "سارة المنصوري",
          location: "دبي مارينا",
          rating: 5,
          text: "أول مرة أرتاح في صالون بهذا الشكل. المكياج كان ناعماً وفخماً كما أحب. الجو هادئ ومريح جداً والفريق محترف للغاية.",
          service: "مكياج مناسبات",
        },
        {
          id: 2,
          name: "فاطمة الزعابي",
          location: "جميرا",
          rating: 5,
          text: "تجربتي في يوم زفافي كانت لا تُنسى. الفريق اهتم بكل تفصيلة صغيرة وكان المكياج ثابتاً طوال اليوم.",
          service: "باقة العروس",
        },
        {
          id: 3,
          name: "نورة الشامسي",
          location: "البرشاء",
          rating: 5,
          text: "خدمة العناية بالبشرة غيّرت بشرتي تماماً. أصبحت أكثر نضارة وإشراقاً. المنتجات طبيعية والنتائج مذهلة.",
          service: "عناية بالبشرة",
        },
        {
          id: 4,
          name: "مريم الحمادي",
          location: "داون تاون دبي",
          rating: 5,
          text: "المساج كان رائعاً جداً، شعرت بالاسترخاء التام. الأجواء هادئة وراقية. سأعود قريباً لتجربة المزيد.",
          service: "مساج واسترخاء",
        },
      ]
    : [
        {
          id: 1,
          name: "Sarah Al Mansouri",
          location: "Dubai Marina",
          rating: 5,
          text: "First time I felt so comfortable in a salon. The makeup was soft and luxurious just as I like. The atmosphere is calm and the team is very professional.",
          service: "Event Makeup",
        },
        {
          id: 2,
          name: "Fatima Al Zaabi",
          location: "Jumeirah",
          rating: 5,
          text: "My wedding day experience was unforgettable. The team took care of every little detail and the makeup lasted all day.",
          service: "Bridal Package",
        },
        {
          id: 3,
          name: "Noura Al Shamsi",
          location: "Al Barsha",
          rating: 5,
          text: "The skincare service completely changed my skin. It became more radiant and glowing. Natural products and amazing results.",
          service: "Skincare",
        },
        {
          id: 4,
          name: "Mariam Al Hammadi",
          location: "Downtown Dubai",
          rating: 5,
          text: "The massage was wonderful, I felt completely relaxed. The atmosphere is calm and elegant. I will return soon to try more services.",
          service: "Massage & Relaxation",
        },
      ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {isRTL ? "آراء عميلاتنا" : "Client Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>ماذا تقول <span className="text-primary">عميلاتنا</span> عنا</>
            ) : (
              <>What Our <span className="text-primary">Clients</span> Say</>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute ${isRTL ? 'right-0 -translate-x-4 md:-translate-x-12' : 'left-0 translate-x-4 md:translate-x-12'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300`}
          >
            {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
          </button>

          <button
            onClick={nextSlide}
            className={`absolute ${isRTL ? 'left-0 translate-x-4 md:translate-x-12' : 'right-0 -translate-x-4 md:-translate-x-12'} top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300`}
          >
            {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-8">
            <div
              className={`transition-all duration-500 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card relative">
                {/* Quote Icon */}
                <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>

                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentIndex].service}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
