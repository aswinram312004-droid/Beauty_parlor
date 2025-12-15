import { useState } from "react";
import { Gift, Percent, Cake, Star, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const LoyaltySection = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();

  const benefits = [
    {
      icon: Percent,
      title: isRTL ? "خصومات حصرية" : "Exclusive Discounts",
      description: isRTL ? "احصلي على خصم 15% على جميع الخدمات" : "Get 15% off all services",
    },
    {
      icon: Gift,
      title: isRTL ? "نقاط مكافآت" : "Reward Points",
      description: isRTL ? "اجمعي نقاط مع كل زيارة واستبدليها بخدمات مجانية" : "Collect points with every visit and redeem for free services",
    },
    {
      icon: Cake,
      title: isRTL ? "هدية يوم الميلاد" : "Birthday Gift",
      description: isRTL ? "خدمة مجانية في يوم ميلادك الخاص" : "Free service on your special birthday",
    },
    {
      icon: Star,
      title: isRTL ? "عروض أولوية" : "Priority Offers",
      description: isRTL ? "كوني أول من يعرف عن العروض الجديدة" : "Be the first to know about new offers",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: isRTL ? "خطأ" : "Error",
        description: isRTL ? "الرجاء تعبئة جميع الحقول المطلوبة" : "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: isRTL ? "مرحباً بكِ في نادي الجميلات! 🎉" : "Welcome to the Beauty Club! 🎉",
      description: t("loyalty.success"),
    });
  };

  return (
    <section id="loyalty" className="py-20 bg-gradient-to-b from-secondary to-plum-light overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <span className="inline-block text-accent font-medium mb-4">
              {isRTL ? "انضمي إلينا" : "Join Us"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              {isRTL ? (
                <>نادي <span className="text-accent">الجميلات</span></>
              ) : (
                <><span className="text-accent">Beauty</span> Club</>
              )}
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {t("loyalty.subtitle")}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-card/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-primary-foreground">
                      {benefit.title}
                    </div>
                    <div className="text-sm text-primary-foreground/70">
                      {benefit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card rounded-3xl p-8 shadow-card">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {isRTL ? "مرحباً بكِ في نادي الجميلات!" : "Welcome to Beauty Club!"}
                </h3>
                <p className="text-muted-foreground">
                  {isRTL
                    ? "تم تسجيلك بنجاح. سنرسل لكِ رسالة ترحيبية قريباً مع كود خصم خاص."
                    : "You have been successfully registered. We will send you a welcome message soon with a special discount code."}
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {isRTL ? "سجلي الآن مجاناً" : "Register Now for Free"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {isRTL
                    ? "واحصلي على خصم 10% فوري على أول حجز"
                    : "And get an instant 10% discount on your first booking"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("loyalty.name")} *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder={isRTL ? "أدخلي اسمك الكامل" : "Enter your full name"}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("loyalty.phone")} *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="+971 50 XXX XXXX"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("loyalty.email")} ({isRTL ? "اختياري" : "optional"})
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? isRTL ? "جاري التسجيل..." : "Registering..."
                      : t("loyalty.join")}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
