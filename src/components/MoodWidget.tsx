import { useState } from "react";
import { Sparkles, Heart, Crown, Flower2, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MoodWidget = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { t, isRTL } = useLanguage();

  const moods = [
    {
      id: "soft",
      icon: Flower2,
      label: t("mood.soft"),
      recommendation: {
        title: isRTL ? "باقة الإطلالة الناعمة" : "Soft Look Package",
        description: isRTL
          ? "مكياج طبيعي خفيف مع عناية بالبشرة وتسريحة أنيقة"
          : "Light natural makeup with skincare and elegant hairstyle",
        price: isRTL ? "450 درهم" : "450 AED",
      },
    },
    {
      id: "evening",
      icon: Sparkles,
      label: t("mood.evening"),
      recommendation: {
        title: isRTL ? "باقة إطلالة المساء" : "Evening Look Package",
        description: isRTL
          ? "مكياج سهرة فاخر مع تسريحة راقية وأظافر مميزة"
          : "Luxury evening makeup with elegant hairstyle and special nails",
        price: isRTL ? "650 درهم" : "650 AED",
      },
    },
    {
      id: "bride",
      icon: Crown,
      label: t("mood.bride"),
      recommendation: {
        title: isRTL ? "باقة العروس الذهبية" : "Golden Bridal Package",
        description: isRTL
          ? "تجربة عروس كاملة تشمل مكياج، شعر، أظافر وعناية بالبشرة"
          : "Complete bridal experience including makeup, hair, nails and skincare",
        price: isRTL ? "2500 درهم" : "2500 AED",
      },
    },
    {
      id: "relax",
      icon: Heart,
      label: t("mood.relax"),
      recommendation: {
        title: isRTL ? "باقة الاسترخاء الفاخرة" : "Luxury Relaxation Package",
        description: isRTL
          ? "مساج كامل للجسم مع عناية بالوجه وحمام مغربي"
          : "Full body massage with facial care and Moroccan bath",
        price: isRTL ? "750 درهم" : "750 AED",
      },
    },
  ];

  const currentMood = moods.find((m) => m.id === selectedMood);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("mood.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {isRTL
              ? "اختاري إحساسك ودعينا نقترح لك الخدمة المناسبة"
              : "Choose your feeling and let us suggest the right service for you"}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {moods.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(mood.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                selectedMood === mood.id
                  ? "bg-primary text-primary-foreground shadow-rose scale-105"
                  : "bg-card text-foreground shadow-card hover:shadow-rose hover:scale-105"
              }`}
            >
              <mood.icon className="w-5 h-5" />
              {mood.label}
            </button>
          ))}
        </div>

        {/* Recommendation Card */}
        {currentMood && (
          <div className="max-w-xl mx-auto animate-scale-in">
            <div className="bg-card rounded-3xl p-8 shadow-rose relative overflow-hidden">
              {/* Close button */}
              <button
                onClick={() => setSelectedMood(null)}
                className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors`}
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>

              {/* Decorative gradient */}
              <div className={`absolute -top-20 ${isRTL ? '-right-20' : '-left-20'} w-40 h-40 rounded-full bg-primary/10 blur-3xl`} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  {t("mood.recommendation")}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {currentMood.recommendation.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {currentMood.recommendation.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {isRTL ? "يبدأ من" : "Starting from"}
                    </span>
                    <div className="text-2xl font-bold text-accent">
                      {currentMood.recommendation.price}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const element = document.querySelector("#booking");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="btn-primary"
                  >
                    {t("mood.book")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MoodWidget;
