import { Check, Crown, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PackagesSection = () => {
  const { t, isRTL } = useLanguage();

  const packages = [
    {
      id: 1,
      title: t("package.bride.title"),
      icon: Crown,
      price: t("package.bride.price"),
      originalPrice: "3,200",
      badge: t("packages.bestseller"),
      features: [
        t("package.bride.item1"),
        t("package.bride.item2"),
        t("package.bride.item3"),
        t("package.bride.item4"),
        t("package.bride.item5"),
      ],
      popular: true,
    },
    {
      id: 2,
      title: t("package.monthly.title"),
      icon: Heart,
      price: t("package.monthly.price"),
      originalPrice: "1,200",
      badge: null,
      features: [
        t("package.monthly.item1"),
        t("package.monthly.item2"),
        t("package.monthly.item3"),
        t("package.monthly.item4"),
      ],
      popular: false,
    },
    {
      id: 3,
      title: t("package.evening.title"),
      icon: Sparkles,
      price: t("package.evening.price"),
      originalPrice: "600",
      badge: isRTL ? "عرض محدود" : "Limited Offer",
      features: [
        t("package.evening.item1"),
        t("package.evening.item2"),
        t("package.evening.item3"),
        t("package.evening.item4"),
      ],
      popular: false,
    },
  ];

  const scrollToBooking = () => {
    const element = document.querySelector("#booking");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4">
            {isRTL ? "عروض خاصة" : "Special Offers"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {isRTL ? (
              <>باقات <span className="text-accent">موفرة</span> ومميزة</>
            ) : (
              <><span className="text-accent">Value</span> Packages</>
            )}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("packages.subtitle")}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-card rounded-3xl p-8 shadow-card transition-all duration-500 hover:shadow-rose hover:-translate-y-2 ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-bold ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <pkg.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {pkg.title}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground">{isRTL ? "درهم" : "AED"}</span>
                </div>
                <div className="text-muted-foreground text-sm line-through">
                  {pkg.originalPrice} {isRTL ? "درهم" : "AED"}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={scrollToBooking}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:shadow-rose"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {t("packages.book")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
