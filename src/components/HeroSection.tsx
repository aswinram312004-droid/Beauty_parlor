import { Star, Users, Award, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  const trustBadges = [
    { icon: Star, value: "4.9", label: t("hero.rating") },
    { icon: Users, value: "5000+", label: t("hero.clients") },
    { icon: Award, value: "8", label: t("hero.experience") },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Noor Al-Hayat Salon"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-${isRTL ? 'l' : 'r'} from-secondary/90 via-secondary/70 to-secondary/50`} />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-rose-light/30 blur-2xl animate-pulse-soft" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className={`max-w-3xl ${isRTL ? 'mr-auto' : 'ml-auto'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground text-sm">
              {isRTL ? "صالون نسائي فاخر في دبي" : "Luxury Ladies Salon in Dubai"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {isRTL ? (
              <>
                لمسات جمال ناعمة
                <br />
                <span className="text-accent">تعكس نقاء روحك</span>
              </>
            ) : (
              <>
                Gentle Beauty Touches
                <br />
                <span className="text-accent">Reflecting Your Pure Soul</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <button
              onClick={() => scrollToSection("#booking")}
              className="btn-primary flex items-center gap-2 group"
            >
              {t("hero.cta1")}
              <ArrowIcon className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="bg-card/20 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-card/30 hover:scale-105"
            >
              {t("hero.cta2")}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: "0.8s" }}>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card/10 backdrop-blur-sm rounded-2xl px-5 py-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <badge.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-foreground">
                    {badge.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {badge.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
