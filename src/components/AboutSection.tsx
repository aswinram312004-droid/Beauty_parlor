import { Heart, Shield, Sparkles, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import salonInterior from "@/assets/salon-interior.jpg";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: isRTL ? "نقاء" : "Purity",
      description: isRTL ? "نستخدم منتجات طبيعية عالية الجودة" : "We use high-quality natural products",
    },
    {
      icon: Shield,
      title: isRTL ? "احترام" : "Respect",
      description: isRTL ? "بيئة آمنة تحترم خصوصيتك وقيمك" : "Safe environment respecting your privacy",
    },
    {
      icon: Sparkles,
      title: isRTL ? "راحة" : "Comfort",
      description: isRTL ? "أجواء هادئة تمنحك الاسترخاء التام" : "Calm atmosphere for complete relaxation",
    },
    {
      icon: Leaf,
      title: isRTL ? "جمال طبيعي" : "Natural Beauty",
      description: isRTL ? "نبرز جمالك الطبيعي بأسلوب راقٍ" : "We enhance your natural beauty elegantly",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-rose">
              <img
                src={salonInterior}
                alt={isRTL ? "داخل صالون نور الحياة" : "Inside Noor Al-Hayat Salon"}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-card rounded-2xl p-6 shadow-card max-w-xs`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">8+</div>
                  <div className="text-sm text-muted-foreground">
                    {isRTL ? "سنوات من الخبرة" : "Years of Experience"}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className={`absolute -top-10 ${isRTL ? '-right-10' : '-left-10'} w-32 h-32 rounded-full bg-primary/10 blur-3xl`} />
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block text-primary font-medium mb-4">
              {isRTL ? "عن صالوننا" : "About Our Salon"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {isRTL ? (
                <>ملاذك الآمن للجمال <br /><span className="text-primary">والاسترخاء</span></>
              ) : (
                <>Your Safe Haven for Beauty <br /><span className="text-primary">& Relaxation</span></>
              )}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("about.p1")}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("about.p2")}
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-muted/50 rounded-xl p-4 transition-all duration-300 hover:bg-muted"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{value.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
